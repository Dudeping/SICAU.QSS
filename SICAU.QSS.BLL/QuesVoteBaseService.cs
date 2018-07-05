using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SICAU.QSS.BLLModel;
using System.Web;
using SICAU.QSS.BLL.Common;
using SICAU.QSS.IDAL;
using System.Configuration;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// 问卷/投票服务和投票服务基类
    /// 实现IQuesVoteBaseService接口
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class QuesVoteBaseService<T> : BaseService<T>, IQuesVoteBaseService<T> where T : QuesVoteBase
    {
        /// <summary>
        /// 提示文本 在构造函数中设置
        /// </summary>
        protected string qvText;

        /// <summary>
        /// 获取问卷/投票列表
        /// </summary>
        /// <param name="type">获取类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="quesList">获取到的问卷/投票列表</param>
        /// <returns></returns>
        public QssResult GetList(QssGetQuesVoteType type, string searchStr, out string message, out IEnumerable<QuesAndVoteModel> qvs)
        {
            var result = qvText == "问卷" ? DbSession.QuestionDal.GetList(type, searchStr, out message, out int uid, out IQueryable<QuesAndVoteModel> _qvs) : DbSession.VoteDal.GetList(type, searchStr, out message, out uid, out _qvs);
            if (result != QssResult.Success)
            {
                qvs = null;
                return result;
            }

            qvs = _qvs.ToList().Select(p => new QuesAndVoteModel { Id = p.Id, JoinNum = p.JoinNum, State = p.State, Title = p.Title, BeginTime = p.BeginTime, Creator = p.Creator, Readable = p.Readable, Writeable = p.Writeable, Publisher = p.Publisher, IsWrite = DbSession.WtLogDal.GetEntities(q => q.Type == (qvText == "问卷" ? QssWtLogType.Question : QssWtLogType.Vote) && q.User.Id == uid && q.QuesVoteId == p.Id).Any() });
            return QssResult.Success;
        }

        /// <summary>
        /// 获取问卷/投票
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <returns></returns>
        public string QssGetContent(int qvid)
        {
            var qv = GetEntity(qvid);
            if (qv == null)
            {
                QssLogHelper.Log($"获取{qvText}失败", $"找不到Id：{qvid} 的{qvText}！", QssLogType.Info);
                return "{}";
            }

            return qv.Content;
        }

        /// <summary>
        /// 获取填写记录
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <returns></returns>
        public string QssGetWtLog(int qvid) => CheckWtLogAuth(qvid, out string qvlog, out string message) == QssResult.Success ? qvlog : "{}";

        /// <summary>
        /// 获取问卷/投票结果
        /// </summary>
        /// <param name="qvid">填写记录Id</param>
        /// <returns></returns>
        public string QssGetResult(int qvid) => CheckResultAuth(qvid, out string qvrel, out string message) == QssResult.Success ? qvrel : "{}";

        /// <summary>
        /// 获取问卷/投票确认列表
        /// Error：跳转
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <param name="orgList">处理结果</param>
        /// <returns></returns>
        public QssResult QssGetConfirmList(out string message, out IQueryable<ConfirmManageModel> qvs)
        {
            // 获取当前用户
            if (DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user) != QssResult.Success)
            {
                message = "获取当前用户失败!";
                qvs = null;
                return QssResult.Error;
            }

            // 自己管理的组织的Id列表
            var quesList = user.JoinOrganizes.Where(p => p.Admin == user).Select(p => p.Id);

            // 获取自己管理的组织内的为确认的或者确认中的问卷/投票
            var type = CurrentDal is IBaseDal<Question> ? QssConfirmSubmitType.ques : QssConfirmSubmitType.vote;
            qvs = CurrentDal.GetEntities(p => (p.State == QssQuesAndVoteState.NoCreate || p.State == QssQuesAndVoteState.InConfirm) && (p.IsBelongOrganize && quesList.Contains(p.BelongTo))).Select(p => new ConfirmManageModel { Id = p.Id, Author = p.Creator.Name, SubmitTime = p.CreateTime, SubmitType = type });
            message = "获取成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 标记问卷/投票正在确认中
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message"></param>
        /// <returns></returns>
        public QssResult QssMarkInConfirm(int qvid, out string message)
        {
            // 获取组织和当前用户
            var result = GetQvAndUser(qvid, out message, out T qv, out User user);
            if (result != QssResult.Success) return result;

            // 确认中
            if (qv.State == QssQuesAndVoteState.InConfirm)
            {
                message = "标记成功!";
                return QssResult.Success;
            }

            // 保存
            try
            {
                qv.State = QssQuesAndVoteState.InConfirm;
                Update(qv);
                // 标记成功
                message = "标记成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 标记失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为正在确认状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "标记失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 确认通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkConfirmPass(int qvid, out string message)
        {
            // 校验权限
            var result = CheckAuth(qvid, QssQuesAndVoteState.InConfirm, out T qv, out User user, out message);
            if (result != QssResult.Success) return result;

            // 保存
            try
            {
                // 组织管理员确认 提交给系统管理员
                qv.State = QssQuesAndVoteState.NoAudited;
                Update(qv);

                // 确认成功
                message = "确认成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 确认失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为确认通过状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "确认失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 确认不通过
        /// </summary>
        /// <param name="qvid"></param>
        /// <param name="reason"></param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkConfirmNotPass(int qvid, string reason, out string message)
        {
            // 校验权限
            var result = CheckAuth(qvid, QssQuesAndVoteState.InConfirm, out T qv, out User user, out message);
            if (result != QssResult.Success) return result;

            // 保存
            try
            {
                // 组织管理员确认 提交给系统管理员
                qv.State = QssQuesAndVoteState.NotConfirm;
                qv.Reason = reason;
                Update(qv);

                // 确认成功
                message = "确认成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 确认失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为确认不通过状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "确认失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 获取审核的问卷/投票列表
        /// </summary>
        /// <returns></returns>
        public IQueryable<AuditManageModel> QssGetAuditList()
        {
            var type = CurrentDal is IBaseDal<Question> ? QssAuditSubmitType.ques : QssAuditSubmitType.vote;
            return CurrentDal
                    .GetEntities(p => p.State == QssQuesAndVoteState.NoAudited || p.State == QssQuesAndVoteState.InAudit)
                    .Select(p => new AuditManageModel { Id = p.Id, SubmitTime = p.CreateTime, SubmitType = type, IsInAudit = p.State == QssQuesAndVoteState.InAudit, Auditor = p.Auditor.Account, Author = p.Publisher });
        }

        /// <summary>
        /// 标记问卷/投票正在审核
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkInAudit(int qvid, out string message)
        {
            // 校验权限
            var result = GetQvAndUser(qvid, out message, out T qv, out User user);
            if (result != QssResult.Success) return result;

            if (qv.State != QssQuesAndVoteState.NoAudited && qv.State != QssQuesAndVoteState.InAudit)
            {
                message = $"{qvText}状态错误!";
                return QssResult.Fail;
            }

            int uid = user.Id;
            if (qv.State == QssQuesAndVoteState.InAudit && !CurrentDal.GetEntities(p => p.Id == qvid && p.Auditor.Id == uid).Any())
            {
                // 别的系统管理员正在审核中
                message = "别的系统管理员正在审核中!";
                return QssResult.Fail;
            }

            // 自己在审核
            if (qv.State == QssQuesAndVoteState.InAudit)
            {
                message = "标记成功!";
                return QssResult.Success;
            }

            // 保存
            try
            {
                qv.State = QssQuesAndVoteState.InAudit;
                qv.Auditor = user;
                Update(qv);

                // 标记成功
                message = "标记成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 标记失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为正在审核状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "标记成功!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 审核通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkAuditPass(int qvid, out string message)
        {
            // 校验权限
            var result = CheckAuth(qvid, QssQuesAndVoteState.InAudit, out T qv, out message);
            if (result != QssResult.Success) return result;

            // 保存
            try
            {
                qv.State = QssQuesAndVoteState.Pass;
                Update(qv);

                // 审核成功
                // 系统管理员审核通过 
                message = "审核成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 审核失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为审核通过状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "审核失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 审核不通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="reason">不通过原因</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkAuditNotPass(int qvid, string reason, out string message)
        {
            // 校验权限
            var result = CheckAuth(qvid, QssQuesAndVoteState.InAudit, out T qv, out message);
            if (result != QssResult.Success) return result;

            // 保存
            try
            {
                qv.State = QssQuesAndVoteState.NotPass;
                qv.Reason = reason;

                // 审核成功
                // 系统管理员审核通过 
                message = "审核成功!";
                return new QssSendQvLetterEmail<T>(qv).Send(out message);
            }
            catch (Exception exception)
            {
                // 审核失败
                QssLogHelper.Log($"更新{qvText}失败", $"标记{qvText}为审核未通过状态时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "审核失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 获取问卷/投票和当前用户
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetQvAndUser(int qvid, out string message, out T qv, out User user)
        {
            // 获取问卷/投票
            qv = CurrentDal.GetEntity(qvid);
            if (qv == null)
            {
                QssLogHelper.Log($"获取{qvText}失败", $"在更改{qvText}状态过程中，获取Id为 { qvid } 的{qvText}失败！", QssLogType.Error);
                message = $"没有该{qvText}!";
                user = null;
                return QssResult.Fail;
            }

            // 获取当前用户
            if (DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out user) != QssResult.Success)
            {
                message = "获取当前用户失败";
                return QssResult.Error;
            }

            message = "获取成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 校验权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="state">问卷/投票状态</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="qv">问卷/投票</param>
        /// <returns></returns>
        private QssResult CheckAuth(int qvid, QssQuesAndVoteState state, out T qv, out string message) => CheckAuth(qvid, state, out qv, out User user, out message);

        /// <summary>
        /// 校验权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="state">问卷/投票状态</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="qv">问卷/投票</param>
        /// <param name="user">用户</param>
        /// <returns></returns>
        private QssResult CheckAuth(int qvid, QssQuesAndVoteState state, out T qv, out User user, out string message)
        {
            var result = GetQvAndUser(qvid, out message, out qv, out user);
            if (result != QssResult.Success) return result;

            if (qv.State != state)
            {
                message = $"{qvText}状态错误!";
                return QssResult.Fail;
            }

            int uid = user.Id;
            if (state == QssQuesAndVoteState.InAudit && !CurrentDal.GetEntities(p => p.Id == qvid && p.Auditor.Id == uid).Any())
            {
                // 别的系统管理员正在审核中
                message = "别的系统管理员正在审核中!";
                return QssResult.Fail;
            }

            message = "校验成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 结束问卷/投票
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult EndQuesVote(int qvid, out string message)
        {
            var qv = CurrentDal.GetEntity(qvid);
            if (qv == null)
            {
                message = $"没有该{qvText}";
                QssLogHelper.Log($"获取{qvText}失败", $"结束{qvText}Id：{qvid}时，获取{qvText}失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            if (CurrentDal == null)
            {
                message = "获取当前用户失败!";
                QssLogHelper.Log("获取当前用户失败", $"结束{qvText}时，获取当前用户失败!", QssLogType.Error);
                return QssResult.Error;
            }

            if (qv.Creator.Id != CurrentUser.Id)
            {
                message = $"当前操作用户并不是{qvText}创建者!";
                return QssResult.Fail;
            }

            try
            {
                qv.EndTime = DateTime.Now;
                Update(qv);
                message = $"标记{qvText}结束成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = $"标记{qvText}结束失败!" + exception.Message;
                QssLogHelper.Log($"结束{qvText}失败", $"保存结束{qvText}时失败!", QssLogType.Error, exception);
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 开始问卷/投票
        /// 系统调用
        /// </summary>
        public void StartQuesVote()
        {
            foreach (var item in CurrentDal.GetEntities(p => p.State == QssQuesAndVoteState.Pass && p.BeginTime < DateTime.Now).ToList())
            {
                try
                {
                    item.State = QssQuesAndVoteState.Write;
                    CurrentDal.Update(item);
                    DbSession.SaveChanges();

                    if (new QssSendQvLetterEmail<T>(item).Send(out string message) != QssResult.Success) QssLogHelper.Log($"开始{qvText}失败", $"系统自动开始{qvText}时，开始Id为：{item.Id} 的{qvText}：{item.Title} 失败! 原因：{message}", QssLogType.Error);

                    try
                    {
                        // 给成员发送站内信
                        List<Organize> organizes = new List<Organize>();
                        if (CurrentDal is IBaseDal<Question>)
                        {
                            var qv = item as Question;
                            organizes = qv.QuesWtOrganizes.ToList();
                        }
                        else
                        {
                            var vote = item as Vote;
                            organizes = vote.VoteWtOrganizes.ToList();
                        }
                        ICollection<User> users = new List<User>();
                        foreach (var organize in organizes)
                        {
                            users = users.Concat(organize.Users).ToList();
                        }
                        users = users.Distinct().ToList();

                        // 问卷/投票填写URL
                        var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = $"/{(CurrentDal is IBaseDal<Question> ? "Question/WtQuestion" : "Vote/WtVote")}/" + item.Id }.ToString();
                        DbSession.LetterDal.Add(new Letter { Title = $"收到一个{qvText}填写任务", Content = $"收到一个{qvText}填写任务，点击 <a href='{url}'> 此处 </a>进行填写!", CreateTime = DateTime.Now, Receive = users });
                        DbSession.SaveChanges();
                    }
                    catch (Exception exception) { QssLogHelper.Log("发送站内信失败", $"开始{qvText}时，给成员发送站内信失败! 原因：{exception.Message}", QssLogType.Error, exception); }
                }
                catch (Exception exception)
                {
                    QssLogHelper.Log($"开始{qvText}失败", $"开始{qvText}时失败! 原因：{exception.Message}", QssLogType.Error, exception);
                }
            }
        }

        /// <summary>
        /// 检查填写问卷/投票权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult CheckWtAuth(int qvid, out T qv, out string message)
        {
            qv = CurrentDal.GetEntity(qvid);
            if (qv == null)
            {
                message = $"没有该{qvText}!";
                QssLogHelper.Log($"获取{qvText}失败", $"当检查填写{qvText}：{qvid}权限时，获取该{qvText}失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            // 问卷状态
            if (qv.State != QssQuesAndVoteState.Write)
            {
                message = $"{qvText}已结束，不能填写!";
                return QssResult.Fail;
            }

            // 获取当前用户
            if (CurrentDal == null)
            {
                message = "获取当前用户失败!";
                QssLogHelper.Log("获取当前用户失败", $"当检查填写{qvText}：{qvid}权限时，获取当前用户失败!", QssLogType.Error);
                return QssResult.Error;
            }

            // 校验权限
            var wtOrg = qvText == "问卷" ? DbSession.QuestionDal.GetWtOrg(qv as Question) : DbSession.VoteDal.GetWtOrg(qv as Vote);
            if (!wtOrg.Intersect(CurrentUser.JoinOrganizes).Any())
            {
                message = "权限不够";
                return QssResult.Fail;
            }

            // 是否已填写
            QssWtLogType type = (CurrentDal is IBaseDal<Question> ? QssWtLogType.Question : QssWtLogType.Vote);
            if (DbSession.WtLogDal.GetEntities(p => p.QuesVoteId == qvid && p.Type == type && p.User.Account == User.Identity.Name).Any())
            {
                message = "已填写，不能重复填写!";
                return QssResult.Fail;
            }

            message = "权限校验成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 检查查看问卷/投票记录权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult CheckWtLogAuth(int qvid, out string qvlog, out string message)
        {
            // 获取记录 类型 + 问卷/投票Id + 填写者
            QssWtLogType type = (CurrentDal is IBaseDal<Question> ? QssWtLogType.Question : QssWtLogType.Vote);
            var wtLog = DbSession.WtLogDal.GetEntities(p => p.QuesVoteId == qvid && p.Type == type && p.User.Account == User.Identity.Name).ToList();

            if (wtLog.Count() == 1)
            {
                message = "校验权限成功!";
                qvlog = wtLog.FirstOrDefault().Content;
                return QssResult.Success;
            }

            qvlog = "{}";
            if (wtLog.Count() > 1)
            {
                message = "系统错误!";
                QssLogHelper.Log("获取到多个记录", $"在获取{qvText}记录时，获取到同一个用户针对同一个{qvText}的多份填写记录", QssLogType.Error);
                return QssResult.Fail;
            }

            message = "没有记录!";
            return QssResult.Fail;
        }

        /// <summary>
        /// 检查查看问卷/投票结果权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult CheckResultAuth(int qvid, out string qvrel, out string message)
        {
            // 该投票是否对学校公开，或是可查看组织有该用户加入的
            var result = DbSession.OrganizeDal.QssGetSchool(out Organize isPublic);
            var qv = CurrentDal.GetEntity(qvid);
            if (qv == null)
            {
                qvrel = "{}";
                message = $"获取该{qvText}失败!";
                return QssResult.Fail;
            }
            var rdOrg = qvText == "问卷" ? DbSession.QuestionDal.GetRdOrg(qv as Question) : DbSession.VoteDal.GetRdOrg(qv as Vote);
            if ((result == QssResult.Success && rdOrg.Contains(isPublic)) || (CurrentUser != null && rdOrg.Intersect(CurrentUser.JoinOrganizes).Any()))
            {
                qvrel = qv.Result;
                message = "校验成功!";
                return QssResult.Success;
            }

            qvrel = "{}";
            message = "没有查看权限!";
            return QssResult.Fail;
        }
    }
}
