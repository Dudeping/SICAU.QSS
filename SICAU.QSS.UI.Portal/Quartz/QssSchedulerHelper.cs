using Quartz;
using Quartz.Impl;
using SICAU.QSS.UI.Portal.Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICAU.QSS.UI.Portal
{
    /// <summary>
    /// 定时任务
    /// </summary>
    public class QssSchedulerHelper
    {
        /// <summary>
        /// 开始任务
        /// </summary>
        public static void Start()
        {
            // 从工厂中获取一个调度器实例
            IScheduler scheduler = StdSchedulerFactory.GetDefaultScheduler();
            // 开启调度器
            scheduler.Start();
            
            #region 删除已过期学生
            IJobDetail delUserJob = JobBuilder.Create<DeleteUserJob>()
                .WithIdentity("delUserJob", "qssJob1")
                .Build();
            ITrigger delUserTger = TriggerBuilder.Create()
                .WithIdentity("delUserTger", "qssTger1")
                .StartNow()
                // TODO: 每年9月9日3时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(delUserJob, delUserTger);
            #endregion

            #region 删除过期组织
            IJobDetail delOrgJob = JobBuilder.Create<DeleteOrgJob>()
                .WithIdentity("delOrgJob", "qssJob2")
                .Build();
            ITrigger delOrgTger = TriggerBuilder.Create()
                .WithIdentity("delOrgTger", "qssTger2")
                .StartNow()
                // TODO: 每日2时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(delOrgJob, delOrgTger);
            #endregion

            #region 开始问卷
            IJobDetail startQuesJob = JobBuilder.Create<StartQuesJob>()
                .WithIdentity("startQuesJob", "qssJob3")
                .Build();
            ITrigger startQuesTger = TriggerBuilder.Create()
                .WithIdentity("startQuesTger", "qssTger3")
                .StartNow()
                // TODO: 每日2时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(startQuesJob, startQuesTger);
            #endregion

            #region 开始投票
            IJobDetail startVoteJob = JobBuilder.Create<StartVoteJob>()
                .WithIdentity("startVoteJob", "qssJob4")
                .Build();
            ITrigger startVoteTger = TriggerBuilder.Create()
                .WithIdentity("startVoteTger", "qssTger4")
                .StartNow()
                // TODO: 每时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(startVoteJob, startVoteTger);
            #endregion
            
            #region 结束问卷
            IJobDetail endQuesJob = JobBuilder.Create<EndQuesJob>()
                .WithIdentity("endQuesJob", "qssJob5")
                .Build();
            ITrigger endQuesTger = TriggerBuilder.Create()
                .WithIdentity("endQuesTger", "qssTger5")
                .StartNow()
                // TODO: 每时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(endQuesJob, endQuesTger);
            #endregion

            #region 结束投票
            IJobDetail endVoteJob = JobBuilder.Create<EndVoteJob>()
                .WithIdentity("endVoteJob", "qssJob6")
                .Build();
            ITrigger endVoteTger = TriggerBuilder.Create()
                .WithIdentity("endVoteTger", "qssTger6")
                .StartNow()
                // TODO: 每时1分1秒执行一次
                .WithCronSchedule("/5 * * ? * *")
                .Build();
            scheduler.ScheduleJob(endVoteJob, endVoteTger);
            #endregion

            #region 发送邮件
            IJobDetail sendEmailJob = JobBuilder.Create<SendEmailJob>()
                .WithIdentity("sendEmailJob", "qssJob7")
                .Build();
            ITrigger sendEmailTger = TriggerBuilder.Create()
                .WithIdentity("sendEmailTger", "qsstger7")
                // 现在开始
                .StartNow()
                .WithSimpleSchedule(x => x
                    // 3秒执行一次
                    .WithIntervalInSeconds(3)
                    // 不间断重复执行
                    .RepeatForever())
                .Build();
            // 把作业，触发器加入调度器。
            scheduler.ScheduleJob(sendEmailJob, sendEmailTger);
            #endregion
        }
    }
}