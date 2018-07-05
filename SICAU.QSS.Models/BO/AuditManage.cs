using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 审核
    /// </summary>
    public class AuditManageModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 提交者 组织名或用户名
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// 提交时间
        /// </summary>
        public DateTime SubmitTime { get; set; }
        
        /// <summary>
        /// 提交类型 组织、问卷、投票
        /// </summary>
        public QssAuditSubmitType SubmitType { get; set; }

        /// <summary>
        /// 是否在审核中
        /// </summary>
        public bool IsInAudit { get; set; }

        /// <summary>
        /// 审核者 账号
        /// </summary>
        public string Auditor { get; set; }
    }

    /// <summary>
    /// 审核提交类型
    /// </summary>
    public enum QssAuditSubmitType
    {
        /// <summary>
        /// 组织
        /// </summary>
        org,
        /// <summary>
        /// 问卷
        /// </summary>
        ques,
        /// <summary>
        /// 
        /// </summary>
        vote
    }

    /// <summary>
    /// 确认提交类型
    /// </summary>
    public enum QssConfirmSubmitType
    {
        /// <summary>
        /// 问卷
        /// </summary>
        ques,
        /// <summary>
        /// 
        /// </summary>
        vote
    }

    /// <summary>
    /// 确认
    /// </summary>
    public class ConfirmManageModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 提交者 用户名
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// 提交时间
        /// </summary>
        public DateTime SubmitTime { get; set; }

        /// <summary>
        /// 提交类型 问卷、投票
        /// </summary>
        public QssConfirmSubmitType SubmitType { get; set; }
    }
}