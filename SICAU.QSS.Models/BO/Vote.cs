using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    #region 显示投票模型
    /// <summary>
    /// 显示投票模型
    /// </summary>
    public class GetVoteModel
    {
        /// <summary>
        /// 投票整体说明
        /// </summary>
        public GetVoteGlobal Global { get; set; }

        /// <summary>
        /// 投票选项
        /// </summary>
        public GetVoteOption[] Options { get; set; }
    }

    /// <summary>
    /// 投票整体说明
    /// </summary>
    public class GetVoteGlobal
    {
        /// <summary>
        /// 投票Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 投票标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 简介
        /// 富文本形式
        /// </summary>
        public string Introduct { get; set; }

        /// <summary>
        /// 投票类型
        /// VoteType
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// 最大选择数
        /// </summary>
        public int MaxNum { get; set; }

        /// <summary>
        /// 是否属于组织
        /// true:属于组织,false:属于个人
        /// </summary>
        public bool IsBelongOrganize { get; set; }

        /// <summary>
        /// 属于组织/个人Id
        /// </summary>
        public int BelongTo { get; set; }

        /// <summary>
        /// 发布者 组织名/用户名
        /// </summary>
        public string Publisher { get; set; }

        /// <summary>
        /// 选项数
        /// </summary>
        public int Num { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime EndTime { get; set; }
    }

    /// <summary>
    /// 投票选项
    /// </summary>
    public class GetVoteOption
    {
        /// <summary>
        /// 选项Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 选项内容
        /// </summary>
        public string Content { get; set; }
    }
    #endregion

    #region 获取投票记录模型
    /// <summary>
    /// 获取投票记录模型
    /// </summary>
    public class GetWtVoteModel
    {
        /// <summary>
        /// 答案列表
        /// </summary>
        public GetWtVoteOption[] Answers { get; set; }
    }

    /// <summary>
    /// 答案选项
    /// </summary>
    public class GetWtVoteOption
    {
        /// <summary>
        /// 选项Id
        /// </summary>
        public int Id { get; set; }
    }
    #endregion

    #region 获取投票结果模型
    /// <summary>
    /// 查看投票结果模型
    /// </summary>
    public class GetResultVoteModel:GetVoteModel
    {
        ///// <summary>
        ///// 投票整体说明
        ///// </summary>
        //public GetVoteGlobal Global { get; set; }

        ///// <summary>
        ///// 投票选项
        ///// </summary>
        //public GetResultVoteOption[] Options { get; set; }

        /// <summary>
        /// 答案列表 该字段保存为投票结果时为null
        /// 在返回填写记录时将填写记录填写在该字段，
        /// 在返回问卷结果时，将该字段去掉
        /// </summary>
        public GetWtVoteOption[] Answers { get; set; }
    }

    /// <summary>
    /// 获得投票结果模型
    /// </summary>
    public class GetResultVoteOption : GetVoteOption
    {
        /// <summary>
        /// 被选次数
        /// </summary>
        public int Num { get; set; }
    }
    #endregion
}
