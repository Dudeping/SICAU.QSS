using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 约束QuestionDal，保证其实现了Bll层依赖的方法
    /// 并且让Bll层直接依赖于该接口，降低层之间的耦合
    /// </summary>
    public interface IQuestionDal : IBaseDal<Question>, IQuesVoteBaseDal
    {
        /// <summary>
        /// 获取可填写组织
        /// </summary>
        /// <param name="question">问卷</param>
        /// <returns></returns>
        ICollection<Organize> GetWtOrg(Question question);

        /// <summary>
        /// 获取可查看组织
        /// </summary>
        /// <param name="question">问卷</param>
        /// <returns></returns>
        ICollection<Organize> GetRdOrg(Question question);
    }
}
