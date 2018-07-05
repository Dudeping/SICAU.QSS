using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.Common
{
    /// <summary>
    /// 邮件发送配置节点处理类
    /// </summary>
    public class EmailConfigurationProvider : ConfigurationSection
    {
        /// <summary>
        /// 发送方名称
        /// </summary>
        [ConfigurationProperty("name", IsRequired = true)]
        public string Name
        {
            get { return this["name"].ToString(); }
            set { this["name"] = value; }
        }

        /// <summary>
        /// 发送者账号
        /// </summary>
        [ConfigurationProperty("account", IsRequired = true)]
        public string Account
        {
            get { return this["account"].ToString(); }
            set { this["account"] = value; }
        }

        /// <summary>
        /// 发送者密码
        /// </summary>
        [ConfigurationProperty("password", IsRequired = true)]
        public string Password
        {
            get { return this["password"].ToString(); }
            set { this["password"] = value; }
        }

        /// <summary>
        /// 邮件发送服务器
        /// </summary>
        [ConfigurationProperty("server", IsRequired = true)]
        public string Server
        {
            get { return this["server"].ToString(); }
            set { this["server"] = value; }
        }

        /// <summary>
        /// 邮件发送端口
        /// </summary>
        [ConfigurationProperty("port", IsRequired = true)]
        public int Port
        {
            get { return Int32.Parse(this["port"].ToString()); }
            set { this["port"] = value; }
        }

        /// <summary>
        /// 是否加密
        /// </summary>
        [ConfigurationProperty("isSSL", IsRequired = true)]
        public bool IsSSL
        {
            get { return Boolean.Parse(this["isSSL"].ToString()); }
            set { this["isSSL"] = value; }
        }
    }

    /// <summary>
    /// 邮件发送类
    /// </summary>
    public static class QssEmailHelper
    {
        /// <summary>
        /// 锁辅助对象
        /// </summary>
        public static object obj = new object();

        /// <summary>
        /// 待发送邮件队列
        /// </summary>
        public static Queue<EmailModel> EmailEnqueue { get; set; } = new Queue<EmailModel>();

        /// <summary>
        /// 发送邮件
        /// </summary>
        /// <param name="toEmail">目标邮箱</param>
        /// <param name="subjectInfo">邮件标题</param>
        /// <param name="bodyInfo">邮件正文</param>
        /// <returns>true:发送成功，false:发送失败</returns>
        public static bool SendMail(string toEmail, string subjectInfo, string toName, string bodyInfo)
        {
            // 获取邮件配置
            var mailconfig = (EmailConfigurationProvider)ConfigurationManager.GetSection("EmailConfigurationProvider");
            try
            {
                // 发送者信息
                MailAddress from = new MailAddress(mailconfig.Account, mailconfig.Name);
                // 接收者信息
                MailAddress to = new MailAddress(toEmail, toName);
                // 邮件信息
                string mailBody = File.ReadAllText(HttpRuntime.AppDomainAppPath.ToString()+"App_Data\\email.html").Replace("{{TONAME}}", toName).Replace("{{BODYINFO}}", bodyInfo);
                MailMessage message = new MailMessage(from, to)
                {
                    Subject = subjectInfo,
                    IsBodyHtml = true,
                    Body = mailBody
                };
                // 建立邮件发送对象
                SmtpClient client = new SmtpClient(mailconfig.Server, mailconfig.Port)
                {
                    EnableSsl = mailconfig.IsSSL,
                    Credentials = new NetworkCredential(mailconfig.Account, mailconfig.Password)
                };
                // 发送
                client.Send(message);
            }
            catch (Exception exception)
            {
                // 发送失败
                QssLogHelper.Log("邮件发送失败",
                    $"发送给:{toName}({toEmail})<br/>主题为:{subjectInfo }<br/>内容:{ bodyInfo }<br/>的邮件发送失败!<br/>失败原因:{exception.Message}", QssLogType.Error, exception);
                return false;
            }
            return true;
        }

        /// <summary>
        /// 将邮件入队
        /// 由系统维护的定时任务负责发送邮件
        /// </summary>
        public static void EnqueueEamil(EmailModel model)
        {
            lock (obj)
            {
                EmailEnqueue.Enqueue(model);
            }
        }

        /// <summary>
        /// 将邮件入队
        /// 由系统维护的定时任务负责发送邮件
        /// </summary>
        public static void EnqueueEamil(IEnumerable<EmailModel> model)
        {
            lock (obj)
            {
                foreach (var item in model)
                {
                    EmailEnqueue.Enqueue(item);
                }
            }
        }

        /// <summary>
        /// 邮件发送队列中的待发送邮件数
        /// </summary>
        /// <returns></returns>
        public static int EmailEnqueueCount()
        {
            lock (obj)
            {
                return EmailEnqueue.Count;
            }
        }

        /// <summary>
        /// 出队一个邮件
        /// </summary>
        /// <returns></returns>
        public static EmailModel DequeueEmail()
        {
            lock (obj)
            {
                return EmailEnqueue.Dequeue();
            }
        }
    }

    /// <summary>
    /// 用于入队的邮件发送模型
    /// </summary>
    public class EmailModel
    {
        /// <summary>
        /// 邮件主题
        /// </summary>
        public string Subject { get; set; }

        /// <summary>
        /// 邮件主题
        /// </summary>
        public string BodyInfo { get; set; }

        /// <summary>
        /// 接受者邮箱
        /// </summary>
        public string ToEmail { get; set; }

        /// <summary>
        /// 接收者名称
        /// </summary>
        public string ToName { get; set; }
    }
}
