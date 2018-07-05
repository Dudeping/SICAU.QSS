using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IDAL
{
    /// <summary>
    /// 约束QssDbSession，保证其包含了Dal层的所有实例，和一个提交会话的方法
    /// </summary>
    public interface IQssDbSession
    {
        #region 所有Dal的实例
        /// <summary>
        /// LetterDal
        /// </summary>
        ILetterDal LetterDal { get; }

        /// <summary>
        /// LogDal
        /// </summary>
        ILogDal LogDal { get; }

        /// <summary>
        /// OrganizeDal
        /// </summary>
        IOrganizeDal OrganizeDal { get; }

        /// <summary>
        /// QuesOptionDal
        /// </summary>
        IQuesOptionDal QuesOptionDal { get; }

        /// <summary>
        /// QuesSubjectDal
        /// </summary>
        IQuesSubjectDal QuesSubjectDal { get; }

        /// <summary>
        /// QuestionDal
        /// </summary>
        IQuestionDal QuestionDal { get; }

        /// <summary>
        /// RoleDal
        /// </summary>
        IRoleDal RoleDal { get; }
        /// <summary>
        /// SysNewsDal
        /// </summary>
        ISysNewsDal SysNewsDal { get; }

        /// <summary>
        /// UserDal
        /// </summary>
        IUserDal UserDal { get; }

        /// <summary>
        /// VoteDal
        /// </summary>
        IVoteDal VoteDal { get; }

        /// <summary>
        /// VoteOptionDal
        /// </summary>
        IVoteOptionDal VoteOptionDal { get; }

        /// <summary>
        /// WebConfigDal
        /// </summary>
        IWebConfigDal WebConfigDal { get; }

        /// <summary>
        /// WtLogDal
        /// </summary>
        IWtLogDal WtLogDal { get; }
        #endregion

        int SaveChanges();
    }
}
