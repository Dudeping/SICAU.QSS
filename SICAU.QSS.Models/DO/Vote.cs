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
    #region 投票模型
    /// <summary>
    /// 投票
    /// </summary>
    public class Vote : QuesVoteBase
    {
        /// <summary>
        /// 允许填写的组织
        /// </summary>
        [DisplayName("允许填写的组织")]
        public virtual ICollection<Organize> VoteWtOrganizes { get; set; }

        /// <summary>
        /// 允许查看结果组织
        /// </summary>
        [DisplayName("允许查看结果组织")]
        public virtual ICollection<Organize> VoteRdOrganizes { get; set; }

        /// <summary>
        /// 投票类型
        /// </summary>
        [DisplayName("投票类型")]
        public QssVoteType Type { get; set; }

        /// <summary>
        /// 最多选多少个
        /// </summary>
        [DisplayName("最多选多少个")]
        public int MaxNum { get; set; }

        /// <summary>
        /// 投票选项
        /// 延迟加载
        /// </summary>
        [DisplayName("投票选项")]
        public virtual ICollection<VoteOption> VoteOptions { get; set; }
    }

    /// <summary>
    /// 投票选项
    /// </summary>
    public class VoteOption
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 选项内容
        /// </summary>
        [DisplayName("选项内容")]
        public string Content { get; set; }

        /// <summary>
        /// 被选次数
        /// </summary>
        [DisplayName("被选次数")]
        public int Num { get; set; }

        /// <summary>
        /// 所属投票
        /// 延迟加载
        /// </summary>
        [DisplayName("所属投票")]
        public virtual Vote Vote { get; set; }
    }
    #endregion
}
