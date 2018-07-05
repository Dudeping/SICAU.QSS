using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 系统消息
    /// </summary>
    public class SysNews
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 公告标题
        /// </summary>
        [DisplayName("公告标题")]
        [StringLength(20, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 2)]
        public string Title { get; set; }

        /// <summary>
        /// 公告内容
        /// </summary>
        [DisplayName("公告内容")]
        [StringLength(1000, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 2)]
        public string Content { get; set; }

        /// <summary>
        /// 发布时间
        /// </summary>
        [DisplayName("发布时间")]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 是否是长期公告
        /// </summary>
        [DisplayName("是否是长期公告")]
        public bool IsLong { get; set; }
    }

    /// <summary>
    /// 日志
    /// </summary>
    public class Log
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 记录线程
        /// </summary>
        [DisplayName("记录线程")]
        public string Thread { get; set; }

        /// <summary>
        /// 日志水平
        /// </summary>
        [DisplayName("日志水平")]
        public string Level { get; set; }

        /// <summary>
        /// 记录者
        /// </summary>
        [DisplayName("记录者")]
        public string Logger { get; set; }

        /// <summary>
        /// 记录时间
        /// </summary>
        [DisplayName("记录时间")]
        public DateTime Date { get; set; }

        /// <summary>
        /// 异常
        /// </summary>
        [DisplayName("异常")]
        public string Exception { get; set; }

        /// <summary>
        /// 消息
        /// 格式：[标题][内容][操作者][IP]
        /// </summary>
        [DisplayName("消息")]
        [Description("格式：[标题][内容][操作者][IP]")]
        public string Message { get; set; }
    }

    /// <summary>
    /// 填写问卷或投票记录
    /// </summary>
    public class WtLog
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 填写者
        /// 延迟加载
        /// </summary>
        [DisplayName("填写者")]
        [InverseProperty("WtLogs")]
        public virtual User User { get; set; }

        /// <summary>
        /// 填写类型
        /// WtLogType
        /// </summary>
        [DisplayName("填写类型")]
        public QssWtLogType Type { get; set; }

        /// <summary>
        /// 问卷或投票Id
        /// </summary>
        [DisplayName("问卷或投票Id")]
        public int QuesVoteId { get; set; }

        /// <summary>
        /// 填写时间
        /// </summary>
        [DisplayName("填写时间")]
        public DateTime WtTime { get; set; }

        /// <summary>
        /// 填写记录
        /// </summary>
        [DisplayName("填写记录")]
        public string Content { get; set; }
    }

    /// <summary>
    /// 站内信
    /// </summary>
    public class Letter
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [DisplayName("标题")]
        public string Title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [DisplayName("内容")]
        public string Content { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 接收者
        /// </summary>
        [DisplayName("接收者")]
        [InverseProperty("ReceiveLetters")]
        public virtual ICollection<User> Receive { get; set; }

        /// <summary>
        /// 是否阅读
        /// </summary>
        [DisplayName("是否阅读")]
        [InverseProperty("ReadLetters")]
        public virtual ICollection<User> IsRead { get; set; }

        /// <summary>
        /// 是否删除
        /// </summary>
        [DisplayName("是否删除")]
        [InverseProperty("DeleteLetters")]
        public virtual ICollection<User> IsDelete { get; set; }
    }
}
