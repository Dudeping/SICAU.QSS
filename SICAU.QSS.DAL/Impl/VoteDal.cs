
using SICAU.QSS.Common;

using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现IVoteDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    internal class VoteDal : BaseDal<Vote>, IVoteDal
    {
        /// <summary>
        /// 获取问卷/投票列表
        /// </summary>
        /// <param name="type">获取类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="uid">当前用户Id</param>
        /// <param name="quesList">获取到的问卷/投票列表</param>
        /// <returns></returns>
        public QssResult GetList(QssGetQuesVoteType type, string searchStr, out string message, out int uid, out IQueryable<QuesAndVoteModel> quesList)
        {
            // 获取当前用户
            var result = QssGetUserByAccount(User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                message = "获取当前用户失败!";
                quesList = null;
                uid = 0;
                return result;
            }
            
            // 选择 我创建、我审核、我填写、我查看
            IQueryable<Vote> queryable =
                type == QssGetQuesVoteType.all ? Db.Set<Vote>().Where(p => Db.Users.Where(u => u.Id == user.Id && (u.Id == p.Auditor.Id || u.Id == p.Creator.Id || (u.JoinOrganizes.Intersect(p.VoteRdOrganizes).Any() && p.State == QssQuesAndVoteState.End) || (u.JoinOrganizes.Intersect(p.VoteWtOrganizes).Any() && (p.State == QssQuesAndVoteState.End || p.State == QssQuesAndVoteState.Write)))).Any()) :
                type == QssGetQuesVoteType.audit ? Db.Set<Vote>().Where(p => p.Auditor.Id == user.Id) :
                type == QssGetQuesVoteType.create ? Db.Set<Vote>().Where(p => p.Creator.Id == user.Id) :
                Db.Set<Vote>().Where(p => Db.Users.Where(u => u.Id == user.Id && u.JoinOrganizes.Intersect(p.VoteWtOrganizes).Any()).Any() && (p.State == QssQuesAndVoteState.End || p.State == QssQuesAndVoteState.Write) && Db.WtLogs.Where(l => l.QuesVoteId == p.Id && l.Type == QssWtLogType.Vote && l.User.Account == User.Identity.Name).Count() == 1);

            // 搜索
            if (!string.IsNullOrWhiteSpace(searchStr))
            {
                queryable.Where(p => p.Title.Contains(searchStr));
            }

            var joinOrgnizes = user.JoinOrganizes.Select(x => x.Id);
            // 投影
            quesList = queryable
                .Select(p => new QuesAndVoteModel { Id = p.Id, State = p.State, Title = p.Title, BeginTime = p.BeginTime, Creator = p.Creator.Account, Publisher = p.Publisher, JoinNum = p.JoinNum, Readable = p.VoteRdOrganizes.Where(x => joinOrgnizes.Contains(x.Id)).Any(), Writeable = p.VoteRdOrganizes.Where(x => joinOrgnizes.Contains(x.Id)).Any() });
            message = $"获取投票列表成功!";

            uid = user.Id;
            return QssResult.Success;
        }

        /// <summary>
        /// 获取可填写组织
        /// </summary>
        /// <param name="id">投票</param>
        /// <returns></returns>
        public ICollection<Organize> GetWtOrg(Vote vote)
        {
            return vote.VoteWtOrganizes;
        }

        /// <summary>
        /// 获取可查看组织
        /// </summary>
        /// <param name="id">投票</param>
        /// <returns></returns>
        public ICollection<Organize> GetRdOrg(Vote vote)
        {
            return vote.VoteRdOrganizes;
        }
    }
}
