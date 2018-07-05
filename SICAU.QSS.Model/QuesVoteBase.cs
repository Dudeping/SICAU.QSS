using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Model
{
    /// <summary>
    /// 问卷和投票的基类
    /// </summary>
    public abstract class QuesVoteBase
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [DisplayName("标题")]
        [Required(ErrorMessage = "{0}为必填项！")]
        [StringLength(50, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 2)]
        public string Title { get; set; }

        /// <summary>
        /// 简介
        /// 富文本形式
        /// </summary>
        [DisplayName("简介")]
        [StringLength(10000, ErrorMessage = "{0}不能超过{1}个字!")]
        public string Introduct { get; set; }

        /// <summary>
        /// 创建者
        /// </summary>
        [DisplayName("创建者")]
        public virtual User Creator { get; set; }

        /// <summary>
        /// 发布者 组织名/用户名
        /// </summary>
        [Required(ErrorMessage = "{0}为必填项！")]
        public string Publisher { get; set; }

        /// <summary>
        /// 审核者
        /// </summary>
        [DisplayName("审核者")]
        public virtual User Auditor { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        [DisplayName("开始时间")]
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        [DisplayName("结束时间")]
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 是否通知结果
        /// </summary>
        [DisplayName("是否通知结果")]
        public bool IsNotice { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [DisplayName("状态")]
        public QssQuesAndVoteState State { get; set; }

        /// <summary>
        /// 未通过原因
        /// </summary>
        [DisplayName("未通过原因")]
        public string Reason { get; set; }

        /// <summary>
        /// 所属组织或个人Id
        /// </summary>
        [DisplayName("所属组织或个人Id")]
        public int BelongTo { get; set; }

        /// <summary>
        /// 是否属于组织
        /// true:属于组织,false:属于个人
        /// </summary>
        [DisplayName("是否属于组织")]
        public bool IsBelongOrganize { get; set; }

        /// <summary>
        /// 参加人数
        /// </summary>
        [DisplayName("参加人数")]
        public int JoinNum { get; set; }

        /// <summary>
        /// 弃权人数
        /// </summary>
        [DisplayName("弃权人数")]
        public int WaiverNum { get; set; }

        /// <summary>
        /// 内容
        /// 因为内容作为Json字符串发送到前端,
        /// 所以使用字符串保存起来,减少查询量
        /// </summary>
        [DisplayName("内容")]
        [Description("因为内容作为Json字符串发送到前端,所以使用字符串保存起来,减少查询量")]
        public string Content { get; set; }

        /// <summary>
        /// 结果
        /// 因为结果作为Json字符串发送到前端,
        /// 所以使用字符串保存起来,减少查询量
        /// </summary>
        [DisplayName("结果")]
        [Description("因为结果作为Json字符串发送到前端,所以使用字符串保存起来,减少查询量")]
        public string Result { get; set; }
    }
}
