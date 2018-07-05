using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Security;

namespace SICAU.QSS.Common
{
    public class QssLogHelper
    {
        /// <summary>
        /// 获取记录器
        /// </summary>
        static ILog log = LogManager.GetLogger("DbAndSmtpLogger");

        /// <summary>
        /// 写入日志统一处理方法
        /// </summary>
        /// <param name="title">日志标题</param>
        /// <param name="content">日志内容</param>
        /// <param name="type">日志类型</param>
        /// <param name="exception">异常</param>
        /// <param name="_operator">操作者：若为空，将直接从登陆信息中获取，无法获取将直接标记为游客；若要填写请按照此格式填写：学号(姓名)</param>
        public static void Log(string title, string content, QssLogType type, Exception exception, string _operator)
        {
            // 获取操作者
            string __operator = _operator ?? (
                // 是否登录
                HttpContext.Current == null ? "系统定时任务":
                HttpContext.Current.User.Identity.IsAuthenticated ? (
                    // 是否为超级管理员
                    HttpContext.Current.User.IsInRole(QssRoleType.Administrator.ToString())
                    ? "超级管理员" :
                    // 获取非超级管理员登录用户的账号和密码
                    $"{HttpContext.Current.User.Identity.Name}({ FormsAuthentication.Decrypt(HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName].Value).UserData.Split('|')[1] })"
                ) : "游客"
             );

            // 拼接消息 格式：[标题][内容][操作者][IP]
            string message = $"[{title}][{content}][{__operator}][{QssIpHelper.GetIp()}]";

            // 写日志
            int result =
                type == QssLogType.Debug ? (exception == null ? Debug(message) : Debug(message, exception)) :
                type == QssLogType.Info ? (exception == null ? Info(message) : Info(message, exception)) :
                type == QssLogType.Warn ? (exception == null ? Warn(message) : Warn(message, exception)) :
                type == QssLogType.Error ? (exception == null ? Error(message) : Error(message, exception)) :
                type == QssLogType.Fatal ? (exception == null ? Fatal(message) : Fatal(message, exception)) :
                1;
        }

        /// <summary>
        /// 写入日志统一处理方法
        /// </summary>
        /// <param name="title">日志标题</param>
        /// <param name="content">日志内容</param>
        /// <param name="type">日志类型</param>
        /// <param name="exception">异常</param>
        public static void Log(string title, string content, QssLogType type, Exception exception)
        {
            Log(title, content, type, exception, null);
        }

        /// <summary>
        /// 写入日志统一处理方法
        /// </summary>
        /// <param name="title">日志标题</param>
        /// <param name="content">日志内容</param>
        /// <param name="type">日志类型</param>
        /// <param name="_operator">操作者：若为空，将直接从登陆信息中获取，无法获取将直接标记为游客；若要填写请按照此格式填写：学号(姓名)</param>
        public static void Log(string title, string content, QssLogType type, string _operator)
        {
            Log(title, content, type, null, _operator);
        }

        /// <summary>
        /// 写入日志统一处理方法
        /// </summary>
        /// <param name="title">日志标题</param>
        /// <param name="content">日志内容</param>
        /// <param name="type">日志类型</param>
        public static void Log(string title, string content, QssLogType type)
        {
            Log(title, content, type, null, null);
        }

        /// <summary>
        /// 写入Debug级别的信息
        /// </summary>
        /// <param name="message">信息</param>
        private static int Debug(string message)
        {
            return Debug(message, null);
        }

        /// <summary>
        /// 写入Debug级别的信息和异常
        /// </summary>
        /// <param name="message">信息</param>
        /// <param name="exception">异常</param>
        private static int Debug(string message, Exception exception)
        {
            if (log.IsDebugEnabled)
            {
                log.Debug(message, exception);
            }
            return 1;
        }

        /// <summary>
        /// 写入Info级别的信息
        /// </summary>
        /// <param name="message">信息</param>
        private static int Info(string message)
        {
            return Info(message, null);
        }

        /// <summary>
        /// 写入Info级别的信息和异常
        /// </summary>
        /// <param name="message">信息</param>
        /// <param name="exception">异常</param>
        private static int Info(string message, Exception exception)
        {
            if (log.IsInfoEnabled)
            {
                log.Info(message, exception);
            }
            return 1;
        }

        /// <summary>
        /// 写入Error级别的信息
        /// </summary>
        /// <param name="message">信息</param>
        private static int Error(string message)
        {
            return Error(message, null);
        }

        /// <summary>
        /// 写入Error级别的信息和异常
        /// </summary>
        /// <param name="message">信息</param>
        /// <param name="exception">异常</param>
        private static int Error(string message, Exception exception)
        {
            if (log.IsErrorEnabled)
            {
                log.Error(message, exception);
            }
            return 1;
        }

        /// <summary>
        /// 写入Warn级别的信息
        /// </summary>
        /// <param name="message">信息</param>
        private static int Warn(string message)
        {
            return Warn(message, null);
        }

        /// <summary>
        /// 写入Warn级别的信息和异常
        /// </summary>
        /// <param name="message">信息</param>
        /// <param name="exception">异常</param>
        private static int Warn(string message, Exception exception)
        {
            if (log.IsWarnEnabled)
            {
                log.Warn(message, exception);
            }
            return 1;
        }

        /// <summary>
        /// 写入Fatal级别的信息
        /// </summary>
        /// <param name="message">信息</param>
        private static int Fatal(string message)
        {
            return Fatal(message, null);
        }

        /// <summary>
        /// 写入Fatal级别的信息和异常
        /// </summary>
        /// <param name="message">信息</param>
        /// <param name="exception">异常</param>
        private static int Fatal(string message, Exception exception)
        {
            if (log.IsFatalEnabled)
            {
                log.Fatal(message, exception);
            }
            return 1;
        }
    }
}
