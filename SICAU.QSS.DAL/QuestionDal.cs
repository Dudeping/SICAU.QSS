using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IDAL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现IQuestionDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    public class QuestionDal : BaseDal<Question>, IQuestionDal
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
            IQueryable<Question> queryable =
                type == QssGetQuesVoteType.all ? Db.Set<Question>().Where(p => Db.Users.Where(u => u.Id == user.Id && (u.Id == p.Auditor.Id || u.Id == p.Creator.Id || (u.JoinOrganizes.Intersect(p.QuesRdOrganizes).Any() && p.State == QssQuesAndVoteState.End) || (u.JoinOrganizes.Intersect(p.QuesWtOrganizes).Any() && (p.State == QssQuesAndVoteState.End || p.State == QssQuesAndVoteState.Write)))).Any()) :
                type == QssGetQuesVoteType.audit ? Db.Set<Question>().Where(p => p.Auditor.Id == user.Id) :
                type == QssGetQuesVoteType.create ? Db.Set<Question>().Where(p => p.Creator.Id == user.Id) :
                Db.Set<Question>().Where(p => Db.Users.Where(u => u.Id == user.Id && u.JoinOrganizes.Intersect(p.QuesWtOrganizes).Any()).Any() && (p.State == QssQuesAndVoteState.End || p.State == QssQuesAndVoteState.Write) && Db.WtLogs.Where(l => l.QuesVoteId == p.Id && l.Type == QssWtLogType.Question && l.User.Account == User.Identity.Name).Count() == 1);

            // 搜索
            if (!string.IsNullOrWhiteSpace(searchStr))
            {
                queryable.Where(p => p.Title.Contains(searchStr));
            }
            
            var joinOrgnizes = user.JoinOrganizes.Select(x => x.Id);
            // 投影
            quesList = queryable
                .Select(p => new QuesAndVoteModel { Id = p.Id, State = p.State, Title = p.Title, BeginTime = p.BeginTime, Creator = p.Creator.Account, Publisher = p.Publisher, JoinNum = p.JoinNum, Readable = p.QuesRdOrganizes.Where(x => joinOrgnizes.Contains(x.Id)).Any(), Writeable = p.QuesRdOrganizes.Where(x => joinOrgnizes.Contains(x.Id)).Any() });
            message = $"获取问卷列表成功!";

            uid = user.Id;
            return QssResult.Success;
        }

        /// <summary>
        /// 获取可填写组织
        /// </summary>
        /// <param name="question">问卷</param>
        /// <returns></returns>
        public ICollection<Organize> GetWtOrg(Question question)
        {
            return question.QuesWtOrganizes;
        }

        /// <summary>
        /// 获取可查看组织
        /// </summary>
        /// <param name="question">问卷</param>
        /// <returns></returns>
        public ICollection<Organize> GetRdOrg(Question question)
        {
            return question.QuesRdOrganizes;
        }
    }
}
