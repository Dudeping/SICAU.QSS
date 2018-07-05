using Quartz;
using SICAU.QSS.BLL;
using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICAU.QSS.UI.Portal.Quartz
{
    /// <summary>
    /// 删除过期学生
    /// </summary>
    public class DeleteUserJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            // 一切记录 成员、问卷、投票、填写记录
            StaticBllFactory.GetUserService().DeleteExpireUser();
        }
    }

    /// <summary>
    /// 删除过期组织
    /// </summary>
    public class DeleteOrgJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            // 一切记录 成员、问卷、投票、填写记录
            StaticBllFactory.GetOrganizeService().DeleteExpireOrg();
        }
    }

    /// <summary>
    /// 发送邮件
    /// </summary>
    public class SendEmailJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            if (QssEmailHelper.EmailEnqueueCount() == 0) return;
            var email = QssEmailHelper.DequeueEmail();
            QssEmailHelper.SendMail(email.ToEmail, email.Subject, email.ToName, email.BodyInfo);
        }
    }

    /// <summary>
    /// 开始问卷
    /// </summary>
    public class StartQuesJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            StaticBllFactory.GetQuestionService().StartQuesVote();
        }
    }

    /// <summary>
    /// 开始投票
    /// </summary>
    public class StartVoteJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            StaticBllFactory.GetVoteService().StartQuesVote();
        }
    }

    /// <summary>
    /// 结束问卷
    /// </summary>
    public class EndQuesJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            StaticBllFactory.GetQuestionService().EndQues();
        }
    }

    /// <summary>
    /// 结束投票
    /// </summary>
    public class EndVoteJob : IJob
    {
        public void Execute(IJobExecutionContext context)
        {
            StaticBllFactory.GetVoteService().EndVote();
        }
    }
}