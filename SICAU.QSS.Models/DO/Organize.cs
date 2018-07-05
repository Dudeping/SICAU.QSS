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
    /// 组织
    /// </summary>
    public class Organize
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 组织名
        /// </summary>
        [DisplayName("组织名")]
        [StringLength(100, ErrorMessage = "{0}应该少于{1}字!", MinimumLength =2)]
        public string Name { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 组织管理员
        /// </summary>
        [DisplayName("组织管理员")]
        public virtual User Admin { get; set; }

        /// <summary>
        /// 审核者
        /// </summary>
        [DisplayName("审核者")]
        public virtual User Auditor { get; set; }

        /// <summary>
        /// 组织类型
        /// </summary>
        [DisplayName("组织类型")]
        public QssOrganizeType Type { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [DisplayName("状态")]
        public QssOrganizeState State { get; set; }

        /// <summary>
        /// 审核未通过原因
        /// </summary>
        [DisplayName("审核未通过原因")]
        [StringLength(200, ErrorMessage = "{0}应该少于{1}字!")]
        public string Reason { get; set; }

        /// <summary>
        /// 过期时间
        /// Description: 时间设置为1996-9-6视为永久有效
        /// </summary>
        [DisplayName("过期时间")]
        [Description("时间设置为1996-9-6视为永久有效")]
        public DateTime DeleteTime { get; set; }

        /// <summary>
        /// 组织成员
        /// 延迟加载
        /// </summary>
        [DisplayName("组织成员")]
        [InverseProperty("JoinOrganizes")]
        public virtual ICollection<User> Users { get; set; }

        /// <summary>
        /// 是否属于临时组织
        /// </summary>
        [DisplayName("是否属于临时组织")]
        public bool IsTemp { get; set; }

        /// <summary>
        /// 所属校区
        /// </summary>
        [DisplayName("所属校区")]
        public string Campus { get; set; }

        /// <summary>
        /// 所属学院
        /// </summary>
        [DisplayName("所属学院")]
        public string College { get; set; }

        /// <summary>
        /// 所属专业
        /// </summary>
        [DisplayName("所属专业")]
        public string Major { get; set; }

        /// <summary>
        /// 可填写问卷
        /// </summary>
        [DisplayName("可填写问卷")]
        [InverseProperty("QuesWtOrganizes")]
        public virtual ICollection<Question> WtQuestins { get; set; }

        /// <summary>
        /// 可查看问卷
        /// </summary>
        [DisplayName("可查看问卷")]
        [InverseProperty("QuesRdOrganizes")]
        public virtual ICollection<Question> RdQuestins { get; set; }

        /// <summary>
        /// 可填写投票
        /// </summary>
        [DisplayName("可填写投票")]
        [InverseProperty("VoteWtOrganizes")]
        public virtual ICollection<Vote> WtVotes { get; set; }

        /// <summary>
        /// 可查看投票
        /// </summary>
        [DisplayName("可查看投票")]
        [InverseProperty("VoteRdOrganizes")]
        public virtual ICollection<Vote> RdVotes { get; set; }
    }
}
