
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
    /// IQuestionBll接口
    /// 用于约束QuestionBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IQuestionService : IBaseService<Question>, IQuesVoteBaseService<Question>
    {
        /// <summary>
        /// 获取最新问卷/投票
        /// </summary>
        /// <returns></returns>
        IEnumerable<NewQuesAndVoteModel> GetNewQuesVote();

        /// <summary>
        /// 获取最新问卷/投票
        /// </summary>
        /// <param name="searchStr">搜索词</param>
        /// <returns></returns>
        IQueryable<NewQuesAndVoteModel> GetNewQuesVote(string searchStr);

        /// <summary>
        /// 创建问卷
        /// </summary>
        /// <param name="content">问卷内容</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssCreateQues(string content, out string message);

        /// <summary>
        /// 删除问卷
        /// </summary>
        /// <param name="qid">问卷Id</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        QssResult QssDeleteQues(int qid, out string message);

        /// <summary>
        /// 保存填写填写问卷内容
        /// </summary>
        /// <param name="content">问卷内容</param>
        /// <param name="message">处理后的结果信息</param>
        /// <returns></returns>
        QssResult QssSaveQuestion(string content, out string message);

        /// <summary>
        /// 设置提示文本
        /// </summary>
        void SetQvText();

        /// <summary>
        /// 结束问卷
        /// </summary>
        void EndQues();
    }
}
