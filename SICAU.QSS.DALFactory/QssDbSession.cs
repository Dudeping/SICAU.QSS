using SICAU.QSS.IDAL;
using SICAU.QSS.ModelFactory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DALFactory
{
    /// <summary>
    /// 数据库会话类
    /// 此类中包含Dal层的所有实例和提交一次会话的方法
    /// </summary>
    public class QssDbSession : IQssDbSession
    {
        #region 所有Dal的实例
        /// <summary>
        /// LetterDal
        /// </summary>
        public ILetterDal LetterDal { get; set; } = StaticDalFactory.GetLetterDal();

        /// <summary>
        /// LogDal
        /// </summary>
        public ILogDal LogDal { get; set; } = StaticDalFactory.GetLogDal();

        /// <summary>
        /// OrganizeDal
        /// </summary>
        public IOrganizeDal OrganizeDal { get; set; } = StaticDalFactory.GetOrganizeDal();

        /// <summary>
        /// QuesOptionDal
        /// </summary>
        public IQuesOptionDal QuesOptionDal { get; set; } = StaticDalFactory.GetQuesOptionDal();

        /// <summary>
        /// QuesSubjectDal
        /// </summary>
        public IQuesSubjectDal QuesSubjectDal { get; set; } = StaticDalFactory.GetQuesSubjectDal();

        /// <summary>
        /// QuestionDal
        /// </summary>
        public IQuestionDal QuestionDal { get; set; } = StaticDalFactory.GetQuestionDal();

        /// <summary>
        /// RoleDal
        /// </summary>
        public IRoleDal RoleDal { get; set; } = StaticDalFactory.GetRoleDal();
        /// <summary>
        /// SysNewsDal
        /// </summary>
        public ISysNewsDal SysNewsDal { get; set; } = StaticDalFactory.GetSysNewsDal();

        /// <summary>
        /// UserDal
        /// </summary>
        public IUserDal UserDal { get; set; } = StaticDalFactory.GetUserDal();

        /// <summary>
        /// VoteDal
        /// </summary>
        public IVoteDal VoteDal { get; set; } = StaticDalFactory.GetVoteDal();

        /// <summary>
        /// VoteOptionDal
        /// </summary>
        public IVoteOptionDal VoteOptionDal { get; set; } = StaticDalFactory.GetVoteOptionDal();

        /// <summary>
        /// WebConfigDal
        /// </summary>
        public IWebConfigDal WebConfigDal { get; set; } = StaticDalFactory.GetWebConfigDal();

        /// <summary>
        /// WtLogDal
        /// </summary>
        public IWtLogDal WtLogDal { get; set; } = StaticDalFactory.GetWtLogDal();
        #endregion

        /// <summary>
        /// 完成一次Dal层和Bll层的会话，在Bll中调用
        /// 将Bll层的一个业务作为一次提交，并不是将Dal的一个方法作为一次提交
        /// </summary>
        /// <returns></returns>
        public int SaveChanges()
        {
            return QssDbContextFactory.GetCurrentDbContext().SaveChanges();
        }
    }
}
