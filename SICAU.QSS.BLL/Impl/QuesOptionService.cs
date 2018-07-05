using Newtonsoft.Json.Linq;

using SICAU.QSS.Common;

using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// QuesOptionBll
    /// 实现IQuesOptionBll接口
    /// </summary>
    internal class QuesOptionService : BaseService<QuesOption>, IQuesOptionService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.QuesOptionDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public QuesOptionService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 创建问卷题目选项
        /// </summary>
        /// <param name="options">题目选项列表</param>
        /// <param name="user">当前用户</param>
        /// <param name="subjectId">题目Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateQuesOption(JArray options, User user, QuesSubject subject, out string message)
        {
            // 创建题目选项
            foreach (JObject option in options)
            {
                var quesOption = new QuesOption()
                {
                    Content = (string)option["Content"],
                    QuesSubject = subject
                };

                DbSession.QuesOptionDal.Add(quesOption);
            }

            // 保存题目选项
            try
            {
                DbSession.SaveChanges();

                // 保存成功
                message = "创建题目选项成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                message = "保存题目选项失败! 失败原因：" + exception.Message;
                QssLogHelper.Log("保存题目选项失败", $"保存题目 {subject.Content} 的选项失败!", QssLogType.Info);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 保存问卷题目选项
        /// </summary>
        /// <param name="options">题目选项列表</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssSaveQuesOption(JArray options, QuesSubject quesSubject, out List<GetWtQuesOption> wtOptions, out string message)
        {
            // 存放选项列表和选项的临时变量
            var getWtOptions = new List<GetWtQuesOption>();

            // 保存变量
            foreach (JObject option in options)
            {
                int optionId = Convert.ToInt32(option["Id"]);
                var quesOption = quesSubject.QuesOptions.FirstOrDefault(o => o.Id == optionId);
                if (quesOption == null)
                {
                    wtOptions = null;
                    message = "获取选项失败！";
                    QssLogHelper.Log("获取选项失败", "在保存填写记录时，获取题目选项失败！", QssLogType.Error);
                    return QssResult.Fail;
                }

                quesOption.Num++;
                DbSession.QuesOptionDal.Update(quesOption);
                getWtOptions.Add(new GetWtQuesOption() { Id = quesOption.Id });
            }

            // 保存
            try
            {
                DbSession.SaveChanges();

                // 保存成功
                wtOptions = getWtOptions;
                message = "保存问卷结果成功!";
                return QssResult.Success;

            }
            catch (Exception exception)
            {
                // 保存失败
                wtOptions = null;
                message = "保存问卷结果失败! 失败原因：" + exception;
                QssLogHelper.Log("保存问卷结果失败", "在填写记录时，保存问卷结果失败！", QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }
    }
}
