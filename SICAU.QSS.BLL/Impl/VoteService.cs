using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


using SICAU.QSS.Common;

using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// VoteBll
    /// 实现IVoteBll接口
    /// </summary>
    internal class VoteService : QuesVoteBaseService<Vote>, IVoteService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.VoteDal;
        }

        /// <summary>
        /// 设置文本提示
        /// </summary>
        public void SetQvText()
        {
            qvText = "投票";
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public VoteService()
        {
            SetCurrentDal();
            SetQvText();
        }

        /// <summary>
        /// 获取最新问卷/投票
        /// </summary>
        /// <returns></returns>
        public IEnumerable<NewQuesAndVoteModel> GetNewQuesVote()
        {
            return GetNewQuesVote(null).Take(4).ToList();
        }

        /// <summary>
        /// 获取最新问卷/投票
        /// </summary>
        /// <param name="searchStr">搜索词</param>
        /// <returns></returns>
        public IQueryable<NewQuesAndVoteModel> GetNewQuesVote(string searchStr)
        {
            // 最新问卷/投票
            var newQuesVote = CurrentDal.GetEntities(p => p.State == QssQuesAndVoteState.End);
            // 是否统计最新问卷/投票
            bool isCount = false;
            // 已登录
            if (HttpContext.Current.Request.IsAuthenticated)
            {
                // 获得已登录用户
                QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
                // 获取用户成功
                if (result == QssResult.Success)
                {
                    // 获得该用户已加入的组织
                    var joinOrganize = user.JoinOrganizes.Select(x => x.Id);
                    // 已加入组织大于0
                    if (joinOrganize.Any())
                    {
                        result = DbSession.OrganizeDal.QssGetSchool(out Organize isPublic);
                        // 学校组织存在
                        if (result == QssResult.Success)
                        {
                            // 最新问卷/投票
                            // 条件：已结束，结果对全校公开或者对自己加入的组织公开
                            int shId = isPublic.Id;
                            newQuesVote = newQuesVote.Where(p => p.VoteRdOrganizes.Any(x => x.Id == shId) || p.VoteRdOrganizes.Where(x => joinOrganize.Contains(x.Id)).Any()).OrderByDescending(p => p.Id);
                        }
                        // 学校组织不存在或有多个
                        else
                        {
                            // 最新问卷/投票
                            // 条件：已结束，结果对自己加入的组织公开
                            newQuesVote = newQuesVote.Where(p => p.VoteRdOrganizes.Where(x => joinOrganize.Contains(x.Id)).Any()).OrderByDescending(p => p.Id);
                        }
                        // 标记为已统计
                        isCount = true;
                    }
                }
            }
            // 未统计最新问卷/投票(未登录或者已登录但是加入的组织数为零)
            if (!isCount)
            {
                QssResult result = DbSession.OrganizeDal.QssGetSchool(out Organize isPublic);
                // 学校组织存在
                if (result == QssResult.Success)
                {
                    // 最新问卷/投票
                    // 条件：已结束, 结果对全校公开
                    int shId = isPublic.Id;
                    newQuesVote = newQuesVote.Where(p => p.VoteRdOrganizes.Any(x => x.Id == shId)).OrderByDescending(p => p.Id);
                }
                // 学校组织不存在或有多个
                else
                {
                    newQuesVote = newQuesVote.Where(p => false);
                }
            }

            // 搜索
            if (!string.IsNullOrWhiteSpace(searchStr))
            {
                newQuesVote = newQuesVote.Where(p => p.Title.Contains(searchStr));
            }

            return newQuesVote.Select(x => new NewQuesAndVoteModel { Id = x.Id, Title = x.Title, BeginTime = x.BeginTime, EndTime = x.EndTime, JoinNum = x.JoinNum, WaiverNum = x.WaiverNum });
        }

        /// <summary>
        /// 创建投票
        /// </summary>
        /// <param name="content">投票内容</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateVote(string content, out string message)
        {
            // 获取当前登录用户
            QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                message = "获取当前用户失败!";
                return QssResult.Error;
            }

            // 校验邮箱
            if (!user.QssCheckHaveEmail())
            {
                message = "未绑定邮箱!";
                return QssResult.Fail;
            }

            // 每人每天只能添加3份投票
            if (user.LastAddVoteTime.AddDays(1) > DateTime.Now && user.AddVoteNum >= 3)
            {
                message = "添加投票失败,每人每天只能添加3份投票!";
                return QssResult.Error;
            }

            // 获取投票内容
            JObject voteRoot = (JObject)JsonConvert.DeserializeObject(content);

            // 全局变量
            JObject voteGlobal = (JObject)voteRoot["Global"];

            // 创建投票
            result = QssCreateVoteGlobal(voteGlobal, user, out Vote vote, out message);
            if (result != QssResult.Success) return result;

            // 创建选项
            JArray voteOption = (JArray)voteRoot["Option"];
            result = new VoteOptionService().QssCreateVoteOption(voteOption, user, vote, out message);
            if (result != QssResult.Success) return result;

            // 保存投票内容
            result = QssCreateVoteContent(vote, out message);
            if (result != QssResult.Success) return result;

            // 发送站内信和邮件
            return new QssSendQvLetterEmail<Vote>(vote).Send(out message);
        }

        /// <summary>
        /// 创建投票
        /// </summary>
        /// <param name=""></param>
        /// <param name=""></param>
        /// <param name="question"></param>
        /// <param name=""></param>
        /// <returns></returns>
        private QssResult QssCreateVoteGlobal(JObject global, User user, out Vote vote, out string message)
        {
            // 校验时间
            var beginTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(Convert.ToInt64(global["BeginTime"])).ToLocalTime();
            var endTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(Convert.ToInt64(global["EndTime"])).ToLocalTime();
            if (endTime < DateTime.Now || endTime < beginTime)
            {
                vote = null;
                message = "投票结束时间不能早于当前时间和开始时间!";
                return QssResult.Fail;
            }

            List<Organize> rdOrgs = new List<Organize>();
            List<Organize> wtOrgs = new List<Organize>();
            Organize organize = null;
            // 投票状态
            QssQuesAndVoteState state = QssQuesAndVoteState.NoCreate;
            User auditor = null;
            bool isBelongOrganize = Convert.ToBoolean(global["IsBelongOrganize"]);

            // 获取投票所属组织
            string orgName = "";
            if (isBelongOrganize)
            {
                organize = DbSession.OrganizeDal.GetEntity(Convert.ToInt32(global["BelongTo"]));

                if (organize == null)
                {
                    vote = null;
                    message = "获取投票所属组织失败!";
                    QssLogHelper.Log("获取投票所属组织失败!", "创建投票时，获取投票所属组织失败!", QssLogType.Error);
                    return QssResult.Fail;
                }

                orgName = organize.Name;
            }

            // 判断组织类型
            if (isBelongOrganize && organize.IsTemp)
            {
                // 临时组织
                rdOrgs.Add(organize);
                wtOrgs.Add(organize);
                state = QssQuesAndVoteState.Pass;
            }
            else
            {
                // 允许查看结果的组织
                List<int> rdIds = new List<int>();
                rdIds.AddRange(((JArray)global["RdOrganize"]).Select(x => Convert.ToInt32(x["Id"])));
                if (isBelongOrganize && !rdIds.Contains(organize.Id)) rdIds.Add(organize.Id); // 可查看组织必须包含所属组织
                rdOrgs.AddRange(DbSession.OrganizeDal.GetEntities(p => rdIds.Contains(p.Id) && p.State == QssOrganizeState.Pass));

                // 允许填写的组织
                List<int> wtIds = new List<int>();
                wtIds.AddRange(((JArray)global["WtOrganize"]).Select(x => Convert.ToInt32(x["Id"])));
                if (isBelongOrganize && !wtIds.Contains(organize.Id)) wtIds.Add(organize.Id); // 可填写组织必须包含所属组织
                wtOrgs.AddRange(DbSession.OrganizeDal.GetEntities(p => wtIds.Contains(p.Id) && p.State == QssOrganizeState.Pass));

                // 以个人名义创建或创建者为所属组织创建者
                if (!isBelongOrganize || (isBelongOrganize && organize.Admin.Id == user.Id)) state = QssQuesAndVoteState.NoAudited;
                // 系统管理员创建的直接通过
                if (user.Role.Name == QssRoleType.SysAdmin.ToString()) { state = QssQuesAndVoteState.Pass; auditor = user; }
            }

            // 创建投票
            Vote entity = new Vote()
            {
                Title = (string)global["Title"],
                Introduct = (string)global["Introduct"],
                Type = (string)global["Type"] == QssVoteType.Multiselect.ToString() ? QssVoteType.Multiselect : QssVoteType.Radio,
                MaxNum = Convert.ToInt32(global["MaxNum"]),
                IsBelongOrganize = isBelongOrganize,
                BelongTo = Convert.ToInt32(global["BelongTo"]),
                Publisher = isBelongOrganize ? orgName : user.Name,
                CreateTime = DateTime.Now,
                Creator = user,
                Auditor = auditor,
                BeginTime = beginTime,
                EndTime = endTime,
                State = state,
                VoteRdOrganizes = rdOrgs,
                VoteWtOrganizes = wtOrgs,
                IsNotice = false,
            };

            // 添加的投票数量
            user.AddQuesNum = user.LastAddQuesTime.AddDays(1) < DateTime.Now ? 1 : user.AddQuesNum++;

            // 保存投票
            try
            {
                CurrentDal.Add(entity);
                DbSession.SaveChanges();

                // 保存成功
                vote = entity;
                message = "创建投票成功";
                QssLogHelper.Log("创建投票成功", $"{user.Name}({user.Account}) 创建投票 {entity.Title}({entity.Id}) 成功!", QssLogType.Info);
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                vote = null;
                message = $"创建投票失败！失败原因：{exception}；请重试。";
                QssLogHelper.Log("创建投票失败", $"{user.Name}({user.Account}) 创建投票 {entity.Title}({entity.Id}) 失败!", QssLogType.Info, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存投票内容
        /// </summary>
        /// <param name="quesId">投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssCreateVoteContent(Vote vote, out string message)
        {
            // 存放转换过的选项
            var options = new List<GetVoteOption>();

            // 获取所有选项
            foreach (var option in vote.VoteOptions)
            {
                options.Add(new GetVoteOption { Id = option.Id, Content = option.Content });
            }

            // 投票内容
            GetVoteModel voteModel = new GetVoteModel
            {
                // 全局信息
                Global = new GetVoteGlobal
                {
                    BeginTime = vote.BeginTime,
                    BelongTo = vote.BelongTo,
                    EndTime = vote.EndTime,
                    Id = vote.Id,
                    Introduct = vote.Introduct,
                    IsBelongOrganize = vote.IsBelongOrganize,
                    Title = vote.Title,
                    Num = options.Count(),
                    MaxNum = vote.MaxNum,
                    Type = vote.Type.ToString(),
                    Publisher = vote.Publisher
                },
                // 选项
                Options = options.OrderByDescending(p => p.Id).ToArray()
            };

            // 序列化
            vote.Content = JsonConvert.SerializeObject(voteModel);

            // 保存
            try
            {
                CurrentDal.Update(vote);
                DbSession.SaveChanges();

                // 保存成功
                message = "保存投票内容成功！";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                message = $"保存投票内容失败！原因：{exception.Message}";
                QssLogHelper.Log("保存投票内容失败", $"在创建投票成功之后，保存投票内容失败! 原因：{exception.Message}", QssLogType.Error);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除投票
        /// </summary>
        /// <param name="vid">投票Id</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        public QssResult QssDeleteVote(int vid, out string message)
        {
            var vote = CurrentDal.GetEntity(vid);
            if (vote == null)
            {
                message = "没有该投票";
                QssLogHelper.Log("没有该投票", $"删除投票 {vid} 时，找不到该投票", QssLogType.Error);
                return QssResult.Fail;
            }

            // 获取当前用户
            var rel = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (user == null)
            {
                message = "获取当前用户失败！";
                QssLogHelper.Log("获取用户失败", $"删除投票 {vid} 时，没有获取到当前用户。", QssLogType.Error);
                return QssResult.Fail;
            }

            // 校验权限
            if (vote.Creator.Id != user.Id)
            {
                message = "没有权限！";
                QssLogHelper.Log("权限不够", $"删除投票 {vid} 时，没有获取到当前用户。", QssLogType.Error);
                return QssResult.Fail;
            }

            // 删除选项
            DbSession.VoteOptionDal.DeleteRange(vote.VoteOptions);
            QssResult _result = QssSaveDeleteVote("题目", out message);
            if (_result != QssResult.Success) return _result;

            // 删除投票相关的记录
            DbSession.WtLogDal.DeleteRange(DbSession.WtLogDal.GetEntities(p => p.Type == QssWtLogType.Vote && p.QuesVoteId == vote.Id));
            QssResult __result = QssSaveDeleteVote("投票填写记录", out message);
            if (__result != QssResult.Success) return __result;

            // 删除投票
            CurrentDal.Delete(vote);
            __result = QssSaveDeleteVote("投票", out message);
            if (__result != QssResult.Success) return __result;

            // 调整次数
            user.AddVoteNum = user.AddVoteNum > 0 ? user.AddVoteNum - 1 : 0;
            DbSession.UserDal.Update(user);
            __result = QssSaveDeleteVote("投票填写次数", out message);
            if (__result != QssResult.Success) return __result;

            message = "删除投票成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 提交删除投票
        /// </summary>
        /// <param name="text">提示文本信息</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssSaveDeleteVote(string text, out string message)
        {
            try
            {
                DbSession.SaveChanges();
                message = "";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = $"删除{text}失败！原因：" + exception.Message;
                QssLogHelper.Log($"删除{text}失败", $"删除{text}时，保存上下文失败！", QssLogType.Error);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存填写投票内容
        /// </summary>
        /// <param name="content">投票内容</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveVote(string content, out string message)
        {
            JObject voteRoot = (JObject)JsonConvert.DeserializeObject(content);
            int voteId = Convert.ToInt32(voteRoot["Id"]);

            // 查看填写问卷权限
            if (CheckWtAuth(voteId, out Vote vote, out message) != QssResult.Success) return QssResult.Fail;

            // 投票状态
            if (vote.State != QssQuesAndVoteState.Write)
            {
                message = "投票已结束，不能填写!";
                return QssResult.Fail;
            }

            // 获取当前用户
            QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                message = "获取当前用户失败!";
                QssLogHelper.Log("没有获取到当前用户", "在保存填写的问卷时，没有获取到当前用户", QssLogType.Warn);
                return QssResult.Error;
            }

            // 校验权限
            if (vote.VoteWtOrganizes.Intersect(user.JoinOrganizes).Count() <= 0)
            {
                message = "权限不够";
                return QssResult.Fail;
            }

            // 保存选项
            result = new VoteOptionService().QssSaveVoteWtLog((JArray)voteRoot["Option"], vote, out List<GetWtVoteOption> wtOptions, out message);
            if (result != QssResult.Success) return result;

            // 保存结果
            result = QssSaveResult(vote, out message);
            if (result != QssResult.Success) return result;

            // 保存填写记录
            return new WtLogService().QssSaveVoteWtLog(vote, wtOptions.ToArray(), user, out message);
        }

        /// <summary>
        /// 保存投票结果
        /// </summary>
        /// <param name="vote">当前投票</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssSaveResult(Vote vote, out string message)
        {
            var options = vote.VoteOptions.Select(p => new GetResultVoteOption { Id = p.Id, Content = p.Content, Num = p.Num }).OrderByDescending(p => p.Id);

            var voteResult = new GetResultVoteModel
            {
                Global = new GetVoteGlobal
                {
                    BeginTime = vote.BeginTime,
                    BelongTo = vote.BelongTo,
                    EndTime = vote.EndTime,
                    Id = vote.Id,
                    Introduct = vote.Introduct,
                    IsBelongOrganize = vote.IsBelongOrganize,
                    MaxNum = vote.MaxNum,
                    Num = options.Count(),
                    Title = vote.Title,
                    Type = vote.Type.ToString(),
                    Publisher = vote.Publisher
                },
                Options = options.ToArray()
            };

            vote.Result = JsonConvert.SerializeObject(voteResult); ;

            try
            {
                CurrentDal.Update(vote);
                DbSession.SaveChanges();

                message = "保存投票结果成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("保存投票结果失败", "保存投票结果失败! 原因：" + exception.Message, QssLogType.Error, exception);
                message = "保存投票结果成功!";
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 获取投票填写记录
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        public new string QssGetWtLog(int id)
        {
            // 获取记录
            var wtLog = base.QssGetWtLog(id);
            if (wtLog == "{}") return "{}";

            // 获取当前投票
            var vote = CurrentDal.GetEntity(id);
            if (vote == null)
            {
                QssLogHelper.Log("获取投票失败", "在获取投票记录时，获取当前投票失败!", QssLogType.Error);
                return "{}";
            }

            // 拼接返回
            return vote.Result.Replace("\"Answers\":null", wtLog.Trim(new char[] { '{', '}' }));
        }

        /// <summary>
        /// 结束投票
        /// </summary>
        public void EndVote()
        {
            foreach (var item in CurrentDal.GetEntities(p => p.State == QssQuesAndVoteState.Write && p.IsNotice == false && p.EndTime < DateTime.Now).ToList())
            {
                item.State = QssQuesAndVoteState.End;
                item.IsNotice = true;
                CurrentDal.Update(item);
                DbSession.SaveChanges();

                // 没有统计过结果的，就统计结果，因为每次保存填写记录都会统计一次问卷结果并保存
                if (item.Result == null) QssSaveResult(item, out string message);
            }
        }
    }
}
