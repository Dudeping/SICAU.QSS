using Newtonsoft.Json;
using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// WtLogBll
    /// 实现IWtLogBll接口
    /// </summary>
    public class WtLogService : BaseService<WtLog>, IWtLogService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.WtLogDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public WtLogService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 保存问卷填写记录
        /// </summary>
        /// <param name="question">当前填写的问卷</param>
        /// <param name="wtQuesSubjects">问卷的答案和内容</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveQuesWtLog(Question question, GetWtQuesSubject[] wtQuesSubjects, User user, out string message)
        {
            // 填写记录
            var wtQues = new GetWtQuesModel
            {
                Global = new GetQuesGlobal
                {
                    Id = question.Id,
                    Title = question.Title,
                    IsBelongOrganize = question.IsBelongOrganize,
                    BelongTo = question.BelongTo,
                    Num = wtQuesSubjects.Count(),
                    BeginTime = question.BeginTime,
                    EndTime = question.EndTime,
                    Introduct = question.Introduct,
                    Publisher = question.Publisher
                },
                Subjects = wtQuesSubjects
            };

            var wtlog = new WtLog()
            {
                QuesVoteId = question.Id,
                Type = QssWtLogType.Question,
                Content = JsonConvert.SerializeObject(wtQues),
                User = user,
                WtTime = DateTime.Now
            };

            // 参与人数统计
            question.JoinNum++;

            try
            {
                DbSession.QuestionDal.Update(question);
                DbSession.WtLogDal.Add(wtlog);
                DbSession.SaveChanges();

                message = "保存填写记录成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "保存填写记录失败! 原因" + exception.Message;
                QssLogHelper.Log("保存填写记录失败", "在保存填写记录到记录表中时失败，原因：" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存投票记录
        /// </summary>
        /// <param name="vote">当前投票</param>
        /// <param name="wtVoteOption">投票记录</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveVoteWtLog(Vote vote, GetWtVoteOption[] wtVoteOption, User user, out string message)
        {
            // 填写记录
            var wtlog = new WtLog()
            {
                QuesVoteId = vote.Id,
                Type = QssWtLogType.Vote,
                Content = JsonConvert.SerializeObject(new GetWtVoteModel { Answers = wtVoteOption }),
                User = user,
                WtTime = DateTime.Now
            };

            // 参与人数统计
            vote.JoinNum++;

            try
            {
                DbSession.VoteDal.Update(vote);
                DbSession.WtLogDal.Add(wtlog);
                DbSession.SaveChanges();

                message = "保存填写记录成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "保存填写记录失败! 原因" + exception.Message;
                QssLogHelper.Log("保存填写记录失败", "在保存填写记录到记录表中时失败，原因：" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }
    }
}
