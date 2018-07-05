using SICAU.QSS.Common;
using SICAU.QSS.DAL;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// 发送组织状态更改通知(邮件和站内信)
    /// </summary>
    internal class QssSendOrgLetterEmail
    {
        /// <summary>
        /// 当前上下文对象
        /// </summary>
        private IQssDbSession DbSession { get; set; } = StaticDalFactory.GetCurrentDbSession();
        /// <summary>
        /// 当前组织
        /// </summary>
        private Organize currentOrg;
        /// <summary>
        /// 接收者
        /// </summary>
        private List<User> receives = new List<User>();
        /// <summary>
        /// 信息相关
        /// </summary>
        private string message = "获取信息成功!", title = "", content = "";

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="organize"></param>
        public QssSendOrgLetterEmail(Organize organize)
        {
            currentOrg = organize;
        }

        /// <summary>
        /// 发送站内信和邮件
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult Send(out string message)
        {
            if (GetMessage() != QssResult.Success)
            {
                message = this.message;
                return QssResult.Fail;
            }

            // 发送邮件
            List<EmailModel> emailList = new List<EmailModel>();
            foreach (var item in receives)
            {
                emailList.Add(new EmailModel { ToEmail = item.Email, ToName = item.Name, Subject = title, BodyInfo = content });
            }
            QssEmailHelper.EnqueueEamil(emailList);
            // 发送站内信
            try
            {
                DbSession.LetterDal.Add(new Letter() { Title = title, Content = content, CreateTime = DateTime.Now, Receive = receives });
                DbSession.SaveChanges();

                message = $"组织状态更改成功！";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("发送站内信失败", "在更新组织状态之后，出现错误! 原因：" + exception.Message, QssLogType.Error);
                message = $"组织状态更改失败！";
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 获取信息
        /// </summary>
        /// <returns></returns>
        private QssResult GetMessage()
        {
            return
                currentOrg.State == QssOrganizeState.Pass ? GetPassMessage() :
                currentOrg.State == QssOrganizeState.NotPass ? GetNotPassMessage() :
                currentOrg.State == QssOrganizeState.InAudit ? GetInAuditMessage() :
                GetNoAuditedMessage();
        }

        /// <summary>
        /// 获取未审核状态下的信息
        /// </summary>
        /// <returns></returns>
        private QssResult GetNoAuditedMessage()
        {
            // 系统管理员
            var sysAdmin = DbSession.UserDal.GetEntities(p => p.Role.Name == QssRoleType.SysAdmin.ToString());
            if (!sysAdmin.Any())
            {
                message = "未添加系统管理员！";
                QssLogHelper.Log("获取系统管理员失败", $"将组织：{currentOrg.Name}提交给系统管理员审核时，未获取到系统管理员，应该尚未添加系统管理员！", QssLogType.Error);
                return QssResult.Fail;
            }
            receives.AddRange(sysAdmin);

            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = "/Users/AuditManage" }.ToString();
            title = "收到一个组织审核任务";
            content = $"有一个组织待审核，请点击<a target='_blank' href='{url}'> 此处 </a>开始审核。";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核中状态下的信息
        /// </summary>
        /// <returns></returns>
        private QssResult GetInAuditMessage()
        {
            // 获取创建者
            if (GetCreator() != QssResult.Success) return QssResult.Fail;

            title = "组织正在审核中";
            content = $"您创建的组织：{currentOrg.Name}正在审核中，请稍后.";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核通过状态下的信息
        /// </summary>
        /// <returns></returns>
        private QssResult GetPassMessage()
        {
            // 获取创建者
            if (GetCreator() != QssResult.Success) return QssResult.Fail;

            // 加入组织Url
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = "/Organize/JoinOrganize/" + currentOrg.Id, }.ToString();
            title = "组织审核通过";
            if (currentOrg.Type == QssOrganizeType.Association || currentOrg.Type == QssOrganizeType.Department || currentOrg.Type == QssOrganizeType.Temp)
                content = $"您创建的组织：{currentOrg.Name} 已通过审核，请将以下链接发送给有权限加入该组织的用户。<br/> <a href='{url}'> {url} </a>";
            else content = $"您创建的组织：{currentOrg.Name} 已通过审核，该组织的用户登录时将自动加入该组织.";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核不通过状态下的信息
        /// </summary>
        /// <returns></returns>
        private QssResult GetNotPassMessage()
        {
            // 获取创建者
            if (GetCreator() != QssResult.Success) return QssResult.Fail;

            // 修改组织Url
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = "/Organize/Edit/" + currentOrg.Id }.ToString();
            title = "组织审核未通过";
            content = $"您创建的组织：{currentOrg.Name} 审核未通过，原因：{currentOrg.Reason}，点击 <a target='_blank' href='{url}'> 此处 </a> 进行更改。";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取创建者
        /// </summary>
        /// <returns></returns>
        private QssResult GetCreator()
        {
            // 获取创建者
            var creator = currentOrg.Admin;
            if (creator == null)
            {
                message = "获取组织创建者失败!";
                QssLogHelper.Log("获取组织创建者失败", $"在更改组织{currentOrg.Id} 状态时，获取组织创建者失败！", QssLogType.Error);
                return QssResult.Fail;
            }
            receives.Add(creator);

            return QssResult.Success;
        }
    }
}
