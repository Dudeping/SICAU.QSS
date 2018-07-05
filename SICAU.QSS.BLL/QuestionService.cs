using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SICAU.QSS.BLL.Common;
using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// QuestionBll
    /// 实现IQuestionBll接口
    /// </summary>
    public class QuestionService : QuesVoteBaseService<Question>, IQuestionService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.QuestionDal;
        }

        /// <summary>
        /// 设置文本提示
        /// </summary>
        public void SetQvText()
        {
            qvText = "问卷";
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public QuestionService()
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
                            newQuesVote = newQuesVote.Where(p => p.QuesRdOrganizes.Any(x => x.Id == shId) || p.QuesRdOrganizes.Where(x => joinOrganize.Contains(x.Id)).Any()).OrderByDescending(p => p.Id);
                        }
                        // 学校组织不存在或有多个
                        else
                        {
                            // 最新问卷/投票
                            // 条件：已结束，结果对自己加入的组织公开
                            newQuesVote = newQuesVote.Where(p => p.QuesRdOrganizes.Where(x => joinOrganize.Contains(x.Id)).Any()).OrderByDescending(p => p.Id);
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
                    newQuesVote = newQuesVote.Where(p => p.QuesRdOrganizes.Any(x => x.Id == shId)).OrderByDescending(p => p.Id);
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
        /// 创建问卷
        /// Error：跳转
        /// </summary>
        /// <param name="content">问卷内容</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateQues(string content, out string message)
        {
            // 获取当前登录用户
            QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                message = "获取当前用户失败!";
                return QssResult.Error;
            }

            if (!user.QssCheckHaveEmail())
            {
                message = "未绑定邮箱!";
                return QssResult.Fail;
            }

            // 每人每天只能添加3份问卷
            if (user.LastAddQuesTime.AddDays(1) > DateTime.Now && user.AddQuesNum >= 3)
            {
                message = "添加问卷失败,每人每天只能添加3份问卷!";
                return QssResult.Error;
            }

            // 获取问卷内容
            JObject quesRoot = (JObject)JsonConvert.DeserializeObject(content);

            // 全局变量
            JObject quesGlobal = (JObject)quesRoot["Global"];

            // 创建问卷
            result = QssCreateQuesGlobal(quesGlobal, user, out Question question, out message);
            if (result != QssResult.Success) return result;

            // 创建题目
            JArray quesSubject = (JArray)quesRoot["Subjects"];
            result = new QuesSubjectService().QssCreateQuesSubject(quesSubject, user, question, out message);
            if (result != QssResult.Success) return result;

            // 保存问卷内容
            result = QssCreateQuesContent(question, out message);
            if (result != QssResult.Success) return result;

            // 发送站内信和邮件
            return new QssSendQvLetterEmail<Question>(question).Send(out message);
        }

        /// <summary>
        /// 创建问卷
        /// </summary>
        /// <param name="global">问卷全局信息</param>
        /// <param name="message">处理结果信息</param>
        private QssResult QssCreateQuesGlobal(JObject global, User user, out Question ques, out string message)
        {
            // 校验时间
            var beginTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(Convert.ToInt64(global["BeginTime"])).ToLocalTime();
            var endTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(Convert.ToInt64(global["EndTime"])).ToLocalTime();
            if (endTime < DateTime.Now || endTime < beginTime)
            {
                ques = null;
                message = "问卷结束时间不能早于当前时间和开始时间!";
                return QssResult.Fail;
            }

            List<Organize> rdOrgs = new List<Organize>();
            List<Organize> wtOrgs = new List<Organize>();
            Organize organize = null;
            // 问卷状态
            QssQuesAndVoteState state = QssQuesAndVoteState.NoCreate;
            User auditor = null;
            bool isBelongOrganize = Convert.ToBoolean(global["IsBelongOrganize"]);

            // 获取问卷所属组织
            string orgName = "";
            if (isBelongOrganize)
            {
                organize = DbSession.OrganizeDal.GetEntity(Convert.ToInt32(global["BelongTo"]));

                if (organize == null)
                {
                    ques = null;
                    message = "获取问卷所属组织失败!";
                    QssLogHelper.Log("获取问卷所属组织失败!", "创建问卷时，获取问卷所属组织失败!", QssLogType.Error);
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

            // 创建问卷
            Question question = new Question()
            {
                Title = (string)global["Title"],
                Introduct = (string)global["Introduct"],
                IsBelongOrganize = isBelongOrganize,
                BelongTo = Convert.ToInt32(global["BelongTo"]),
                Publisher = isBelongOrganize ? orgName : user.Name,
                CreateTime = DateTime.Now,
                Creator = user,
                Auditor = auditor,
                BeginTime = beginTime,
                EndTime = endTime,
                State = state,
                QuesRdOrganizes = rdOrgs,
                QuesWtOrganizes = wtOrgs,
                IsNotice = false,
            };

            // 更新添加的问卷数量
            user.AddQuesNum = user.LastAddQuesTime.AddDays(1) < DateTime.Now ? 1 : user.AddQuesNum++;

            // 保存问卷
            try
            {
                CurrentDal.Add(question);
                DbSession.SaveChanges();

                // 保存成功
                ques = question;
                message = "创建问卷成功";
                QssLogHelper.Log("创建问卷成功", $"{user.Name}({user.Account}) 创建问卷 {question.Title}({question.Id}) 成功!", QssLogType.Info);
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                ques = null;
                message = $"创建问卷失败！失败原因：{exception}；请重试。";
                QssLogHelper.Log("创建问卷失败", $"{user.Name}({user.Account}) 创建问卷 {question.Title}({question.Id}) 失败!", QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存问卷内容
        /// </summary>
        /// <param name="quesId">问卷Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssCreateQuesContent(Question question, out string message)
        {
            // 存放转换过得题目和题目选项
            var subjects = new List<GetQuesSubject>();

            // 获取所有题目
            foreach (var subject in question.QuesSubjects)
            {
                var getQuesSubject = new GetQuesSubject();
                // 获取该题目的所有选项
                var quesOptions = subject.QuesOptions;
                if (subject.Type != QssQuesSubType.Subjective)
                {
                    // 非主观题选项
                    var options = new List<GetQuesOption>();
                    foreach (var option in quesOptions)
                    {
                        GetQuesOption getQuesOption = new GetQuesOption
                        {
                            Id = option.Id,
                            Content = option.Content
                        };
                        
                        options.Add(getQuesOption);
                    }
                    getQuesSubject.Num = quesOptions.Count();
                    getQuesSubject.Options = options.OrderByDescending(p => p.Id).ToArray();
                }

                // 题目信息
                getQuesSubject.Id = subject.Id;
                getQuesSubject.Type = subject.Type.ToString();
                getQuesSubject.Content = subject.Content;

                subjects.Add(getQuesSubject);
            }

            // 问卷内容
            GetQuestionModel questionModel = new GetQuestionModel
            {
                // 全局信息
                Global = new GetQuesGlobal
                {
                    BeginTime = question.BeginTime,
                    BelongTo = question.BelongTo,
                    EndTime = question.EndTime,
                    Id = question.Id,
                    Introduct = question.Introduct,
                    IsBelongOrganize = question.IsBelongOrganize,
                    Title = question.Title,
                    Num = subjects.Count(),
                    Publisher = question.Publisher
                },
                // 题目
                Subjects = subjects.OrderByDescending(p => p.Id).ToArray()
            };

            // 保存
            try
            {
                question.Content = JsonConvert.SerializeObject(questionModel);
                CurrentDal.Update(question);
                DbSession.SaveChanges();

                // 保存成功
                message = "成功问卷内容成功！";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                message = $"保存问卷内容失败！原因：{exception.Message}";
                QssLogHelper.Log("保存问卷内容失败", $"在创建问卷成功之后，保存问卷内容失败! 原因：{exception.Message}", QssLogType.Error);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除问卷
        /// </summary>
        /// <param name="qid">问卷Id</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        public QssResult QssDeleteQues(int qid, out string message)
        {
            var question = CurrentDal.GetEntity(qid);
            if (question == null)
            {
                message = "没有该问卷";
                QssLogHelper.Log("没有该问卷", $"删除问卷 {qid} 时，找不到该问卷", QssLogType.Error);
                return QssResult.Fail;
            }

            // 获取当前用户
            var rel = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (user == null)
            {
                message = "获取当前用户失败！";
                QssLogHelper.Log("获取用户失败", $"删除问卷 {qid} 时，没有获取到当前用户。", QssLogType.Error);
                return QssResult.Fail;
            }

            // 校验权限
            if (question.Creator.Id != user.Id)
            {
                message = "没有权限！";
                QssLogHelper.Log("权限不够", $"删除问卷 {qid} 时，没有获取到当前用户。", QssLogType.Error);
                return QssResult.Fail;
            }

            // 删除题目和题目选项
            foreach (var subject in question.QuesSubjects)
            {
                // 删除题目选项
                if (subject.Type != QssQuesSubType.Subjective)
                {
                    DbSession.QuesOptionDal.DeleteRange(subject.QuesOptions);
                    QssResult result = QssSaveDeleteQues("问卷题目选项", out message);
                    if (result != QssResult.Success) return result;
                }
            }

            // 删除题目
            DbSession.QuesSubjectDal.DeleteRange(question.QuesSubjects);
            QssResult _result = QssSaveDeleteQues("问卷题目", out message);
            if (_result != QssResult.Success) return _result;

            // 删除问卷相关的记录
            DbSession.WtLogDal.DeleteRange(DbSession.WtLogDal.GetEntities(p => p.Type == QssWtLogType.Question && p.QuesVoteId == question.Id));
            _result = QssSaveDeleteQues("问卷填写记录", out message);
            if (_result != QssResult.Success) return _result;

            // 删除问卷
            CurrentDal.Delete(question);
            _result = QssSaveDeleteQues("问卷", out message);
            if (_result != QssResult.Success) return _result;

            // 调整次数
            user.AddQuesNum = user.AddQuesNum > 0 ? user.AddQuesNum - 1 : 0;
            DbSession.UserDal.Update(user);
            _result = QssSaveDeleteQues("问卷填写次数", out message);
            if (_result != QssResult.Success) return _result;

            message = "删除问卷成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 提交删除问卷
        /// </summary>
        /// <param name="text">提示文本信息</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssSaveDeleteQues(string text, out string message)
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
        /// 保存问卷填写内容
        /// </summary>
        /// <param name="content">问卷内容</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveQuestion(string content, out string message)
        {
            JObject quesRoot = (JObject)JsonConvert.DeserializeObject(content);
            int quesId = Convert.ToInt32(quesRoot["Id"]);

            // 查看填写问卷权限
            if (CheckWtAuth(quesId, out Question question, out message) != QssResult.Success) return QssResult.Fail; 

            // 校验权限
            if (CheckWtAuth(quesId, out question, out message) != QssResult.Success) return QssResult.Fail;

            // 保存题目
            var result = new QuesSubjectService().QssSaveQuesWtLog((JArray)quesRoot["Subjects"], question, out List<GetWtQuesSubject> wtSubjects, out message);
            if (result != QssResult.Success) return result;

            // 保存填写记录
            return new WtLogService().QssSaveQuesWtLog(question, wtSubjects.ToArray(), CurrentUser, out message);
        }

        /// <summary>
        /// 结束问卷
        /// 系统调用
        /// </summary>
        public void EndQues()
        {
            foreach (var item in CurrentDal.GetEntities(p => p.State == QssQuesAndVoteState.Write && p.IsNotice == false && p.EndTime < DateTime.Now).ToList())
            {
                item.State = QssQuesAndVoteState.End;
                item.IsNotice = true;
                // 统计结果
                CountQuesResult(item);
            }
        }

        /// <summary>
        /// 统计问卷结果
        /// 系统调用
        /// </summary>
        /// <param name="ques">当前问卷</param>
        /// <returns></returns>
        private void CountQuesResult(Question ques)
        {
            // 结果
            var result = new GetResultQuesModel
            {
                Global = new GetQuesGlobal
                {
                    BeginTime = ques.BeginTime,
                    EndTime = ques.EndTime,
                    BelongTo = ques.BelongTo,
                    Id = ques.Id,
                    Introduct = ques.Introduct,
                    IsBelongOrganize = ques.IsBelongOrganize,
                    Num = ques.QuesSubjects.Count,
                    Publisher = ques.Publisher,
                    Title = ques.Title
                },
                Subjects = new QuesSubjectService().CountQuesSub(ques).ToArray()
            };

            // TODO:统计弃权人数
            ques.WaiverNum = 0;

            try
            {
                ques.Result = JsonConvert.SerializeObject(result);
                CurrentDal.Update(ques);
                DbSession.SaveChanges();

                // 发送通知邮件
                new QssSendQvLetterEmail<Question>(ques).Send(out string messge);

                return;
            }
            catch (Exception exception) { QssLogHelper.Log("统计问卷结果失败", "统计问卷结果失败!在系统自动结束问卷时，统计问卷结果失败! 原因：" + exception.Message, QssLogType.Error, exception); }
        }
    }
}
