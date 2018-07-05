using Newtonsoft.Json.Linq;
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
    /// QuesSubjectBll
    /// 实现IQuesSubjectBll接口
    /// </summary>
    public class QuesSubjectService : BaseService<QuesSubject>, IQuesSubjectService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.QuesSubjectDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public QuesSubjectService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 创建问卷题目
        /// </summary>
        /// <param name="subject">问卷题目</param>
        /// <param name="user"></param>
        /// <param name="message"></param>
        /// <returns></returns>
        public QssResult QssCreateQuesSubject(JArray subjects, User user, Question question, out string message)
        {
            foreach (JObject subject in subjects)
            {
                // 创建题目
                QuesSubject quesSubject = new QuesSubject()
                {
                    Content = (string)subject["Content"],
                    Question = question
                };

                // 题目类型
                string type = (string)subject["Type"];
                quesSubject.Type =
                    // 单选题
                    type == QssQuesSubType.Radio.ToString() ? QssQuesSubType.Radio :
                    // 多选题
                    type == QssQuesSubType.Multiselect.ToString() ? QssQuesSubType.Multiselect :
                    // 主观题
                    type == QssQuesSubType.Subjective.ToString() ? QssQuesSubType.Subjective :
                    // 判断题
                    QssQuesSubType.Judge;

                // 保存题目
                QssResult result = QssSaveSubject(quesSubject, out message);
                if (result != QssResult.Success) return result;

                // 创建选项
                if (quesSubject.Type == QssQuesSubType.Subjective) continue; // 主观题无选项

                result = new QuesOptionService().QssCreateQuesOption((JArray)subject["Options"], user, quesSubject, out message);
                if (result != QssResult.Success) return result;
            }
            message = "创建问卷题目成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 保存题目
        /// </summary>
        /// <param name="quesSubject">要保存的题目</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveSubject(QuesSubject quesSubject, out string message)
        {
            try
            {
                DbSession.QuesSubjectDal.Add(quesSubject);
                DbSession.SaveChanges();
                message = "保存题目成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                message = $"保存题目 {quesSubject.Content} 失败! 失败原因：{exception.Message}";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存问卷题目
        /// </summary>
        /// <param name="question">当前问卷</param>
        /// <param name="subjects">题目列表</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveQuesWtLog(JArray subjects, Question question, out List<GetWtQuesSubject> wtSubjects, out string message)
        {
            // 存放题目和题目列表的临时变量
            var getWtSubjects = new List<GetWtQuesSubject>();

            foreach (JObject subject in subjects)
            {
                // 获取题目Id
                int subjectId = Convert.ToInt32(subject["Id"]);

                // 获取该题目
                var quesSubject = question.QuesSubjects.FirstOrDefault(s => s.Id == subjectId);
                if (quesSubject == null)
                {
                    wtSubjects = null;
                    message = "获取题目失败!";
                    QssLogHelper.Log("获取题目失败", "在保存填写记录时，获取题目Id失败", QssLogType.Error);
                    return QssResult.Fail;
                }

                // 当前题目信息
                var wtQuesSubject = new GetWtQuesSubject
                {
                    Id = quesSubject.Id,
                    Content = quesSubject.Content,
                    Num = quesSubject.QuesOptions.Count(),
                    Type = quesSubject.Type.ToString()
                };

                // 获取题目类型
                string subjectType = (string)subject["Type"];

                if (subjectType == QssQuesSubType.Subjective.ToString())
                {

                    // 获取主观题答案
                    string answer = (string)subject["Content"];
                    if (string.IsNullOrWhiteSpace(quesSubject.Answer))
                    {
                        quesSubject.Answer = answer;
                    }
                    else
                    {
                        quesSubject.Answer += "@@@@@" + answer;
                    }

                    // 保存主观题答案
                    try
                    {
                        DbSession.QuesSubjectDal.Update(quesSubject);
                        DbSession.SaveChanges();

                        // 保存成功
                        wtQuesSubject.SubAnswers = answer;
                        getWtSubjects.Add(wtQuesSubject);
                        continue;
                    }
                    catch (Exception exception)
                    {
                        // 保存失败
                        wtSubjects = null;
                        message = "保存主观题答案失败! 原因：" + exception.Message;
                        QssLogHelper.Log("保存答案失败", "在保存填写记录时，保存主观题答案失败", QssLogType.Error, exception);
                        return QssResult.Fail;
                    }
                }

                // 保存选项答案
                var quesOptionService = new QuesOptionService();
                QssResult result = quesOptionService.QssSaveQuesOption((JArray)subject["Options"], quesSubject, out List<GetWtQuesOption> wtOptions, out message);
                if (result != QssResult.Success)
                {
                    wtSubjects = null;
                    return result;
                }
                wtQuesSubject.ObjAnswers = wtOptions.ToArray();

                // 获取选项列表
                if (quesSubject.Type != QssQuesSubType.Subjective)
                {
                    var wtQuesOptions = new List<GetQuesOption>();
                    foreach (var option in quesSubject.QuesOptions)
                    {
                        wtQuesOptions.Add(new GetQuesOption() { Id = option.Id, Content = option.Content });
                    }
                    wtQuesSubject.Options = wtQuesOptions.OrderByDescending(p => p.Id).ToArray();
                    getWtSubjects.Add(wtQuesSubject);
                }
            }
            
            wtSubjects = getWtSubjects.OrderByDescending(p => p.Id).ToList();
            message = "保存问卷结果成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 统计问卷题目结果
        /// </summary>
        /// <param name="question">当前问卷</param>
        /// <returns></returns>
        public ICollection<GetResultQuesSubject> CountQuesSub(Question ques)
        {
            var getQuesSubs = new List<GetResultQuesSubject>();

            // 生成题目和选项
            foreach (var item in ques.QuesSubjects)
            {
                if (item.Type != QssQuesSubType.Subjective)
                {
                    getQuesSubs.Add(new GetResultQuesSubject { Id = item.Id, Content = item.Content, Num = item.QuesOptions.Count, Options = item.QuesOptions.Select(x => new GetResultQuesOption { Id = x.Id, Content = x.Content, Num = x.Num }).OrderByDescending(p => p.Id).ToArray(), Type = item.Type.ToString() });
                }
                else
                {
                    getQuesSubs.Add(new GetResultQuesSubject { Id = item.Id, Content = item.Content, Type = item.Type.ToString(), SubAnswers = item.Answer });
                }
            }
            
            return getQuesSubs.OrderByDescending(p => p.Id).ToList();
        }
    }
}
