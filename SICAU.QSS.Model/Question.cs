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
    /// 问卷调查
    /// </summary>
    public class Question : QuesVoteBase
    {
        /// <summary>
        /// 允许填写的组织
        /// </summary>
        [DisplayName("允许填写的组织")]
        public virtual ICollection<Organize> QuesWtOrganizes { get; set; }

        /// <summary>
        /// 允许查看结果组织
        /// </summary>
        [DisplayName("允许查看结果组织")]
        public virtual ICollection<Organize> QuesRdOrganizes { get; set; }

        /// <summary>
        /// 问卷题目
        /// 延迟加载
        /// </summary>
        [DisplayName("问卷题目")]
        public virtual ICollection<QuesSubject> QuesSubjects { get; set; }
    }

    /// <summary>
    /// 问卷调查题目
    /// </summary>
    public class QuesSubject
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 题目类型
        /// </summary>
        [DisplayName("题目类型")]
        public QssQuesSubType Type { get; set; }

        /// <summary>
        /// 题目内容
        /// </summary>
        [DisplayName("题目内容")]
        [StringLength(200, ErrorMessage = "{0}不能超过{1}字!")]
        public string Content { get; set; }

        /// <summary>
        /// 所属问卷
        /// 延迟加载
        /// </summary>
        [DisplayName("所属问卷")]
        public virtual Question Question { get; set; }

        /// <summary>
        /// 主观题答案
        /// 多个答案使用@@@@@分割
        /// </summary>
        [DisplayName("主观题答案")]
        public string Answer { get; set; }

        /// <summary>
        /// 题目选项
        /// 延迟加载
        /// </summary>
        [DisplayName("题目选项")]
        public virtual ICollection<QuesOption> QuesOptions { get; set; }
    }

    /// <summary>
    /// 问卷调查选项
    /// </summary>
    [Description("判断题处理,自动生成两个选项,当成单选题处理")]
    public class QuesOption
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 题目内容
        /// </summary>
        [DisplayName("选项内容")]
        [StringLength(50, ErrorMessage = "{0}不能超过{1}字!")]
        public string Content { get; set; }

        /// <summary>
        /// 被选次数
        /// </summary>
        [DisplayName("被选次数")]
        public int Num { get; set; }

        /// <summary>
        /// 所属题目
        /// 延迟加载
        /// </summary>
        [DisplayName("所属题目")]
        public virtual QuesSubject QuesSubject { get; set; }
    }
}
