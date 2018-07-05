using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 获取最新问卷或投票结果模型
    /// </summary>
    public class NewQuesAndVoteModel
    {
        /// <summary>
        /// 问卷或投票Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// 问卷标题
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime BeginTime { get; set; }
        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime EndTime { get; set; }
        /// <summary>
        /// 参加人数
        /// </summary>
        public int JoinNum { get; set; }
        /// <summary>
        /// 弃权人数
        /// </summary>
        public int WaiverNum { get; set; }
    }

    /// <summary>
    /// 获取问卷或投票列表模型
    /// </summary>
    public class QuesAndVoteModel
    {
        /// <summary>
        /// 问卷或投票Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 问卷或投票标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 参与人数
        /// </summary>
        public int JoinNum { get; set; }

        /// <summary>
        /// 问卷或投票状态
        /// </summary>
        public QssQuesAndVoteState State { get; set; }

        /// <summary>
        /// 发布者
        /// </summary>
        public string Publisher { get; set; }

        /// <summary>
        /// 创建者 账号
        /// </summary>
        public string Creator { get; set; }

        /// <summary>
        /// 是否可查看
        /// </summary>
        public bool Readable { get; set; }

        /// <summary>
        /// 是否可填写
        /// </summary>
        public bool Writeable { get; set; }

        /// <summary>
        /// 是否已填写
        /// </summary>
        public bool IsWrite { get; set; }
    }

    /// <summary>
    /// 获取问卷或投票类型
    /// </summary>
    public enum QssGetQuesVoteType
    {
        /// <summary>
        /// 全部
        /// </summary>
        all,
        /// <summary>
        /// 我创建
        /// </summary>
        create,
        /// <summary>
        /// 我审核
        /// </summary>
        audit,
        /// <summary>
        /// 我填写
        /// </summary>
        write
    }
}
