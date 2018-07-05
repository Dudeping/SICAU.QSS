using SICAU.QSS.Common;
using SICAU.QSS.DAL;
using SICAU.QSS.IDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DALFactory
{
    /// <summary>
    /// Dal层的静态工厂
    /// 用于在Bll层获取Dal层的实例
    /// </summary>
    public class StaticDalFactory
    {
        /// <summary>
        /// 获取LetterDal
        /// </summary>
        /// <returns></returns>
        public static ILetterDal GetLetterDal()
        {
            return QssCacheHelper.GetCallContextCache<LetterDal>("LetterDal");
        }

        /// <summary>
        /// 获取LogDal
        /// </summary>
        public static ILogDal GetLogDal()
        {
            return QssCacheHelper.GetCallContextCache<LogDal>("LogDal");
        }

        /// <summary>
        /// 获取OrganizeDal
        /// </summary>
        public static IOrganizeDal GetOrganizeDal()
        {
            return QssCacheHelper.GetCallContextCache<OrganizeDal>("OrganizeDal");
        }

        /// <summary>
        /// 获取QuesOptionDal
        /// </summary>
        public static IQuesOptionDal GetQuesOptionDal()
        {
            return QssCacheHelper.GetCallContextCache<QuesOptionDal>("QuesOptionDal");
        }

        /// <summary>
        /// 获取QuesSubjectDal
        /// </summary>
        public static IQuesSubjectDal GetQuesSubjectDal()
        {
            return QssCacheHelper.GetCallContextCache<QuesSubjectDal>("QuesSubjectDal");
        }

        /// <summary>
        /// 获取QuestionDal
        /// </summary>
        public static IQuestionDal GetQuestionDal()
        {
            return QssCacheHelper.GetCallContextCache<QuestionDal>("QuestionDal");
        }

        /// <summary>
        /// 获取OrganizeDal
        /// </summary>
        public static IRoleDal GetRoleDal()
        {
            return QssCacheHelper.GetCallContextCache<RoleDal>("RoleDal");
        }

        /// <summary>
        /// 获取SysNewsDal
        /// </summary>
        public static ISysNewsDal GetSysNewsDal()
        {
            return QssCacheHelper.GetCallContextCache<SysNewsDal>("SysNewsDal");
        }

        /// <summary>
        /// 获取UserDal
        /// </summary>
        public static IUserDal GetUserDal()
        {
            return QssCacheHelper.GetCallContextCache<UserDal>("UserDal");
        }

        /// <summary>
        /// 获取VoteDal
        /// </summary>
        public static IVoteDal GetVoteDal()
        {
            return QssCacheHelper.GetCallContextCache<VoteDal>("VoteDal");
        }

        /// <summary>
        /// 获取VoteOptionDal
        /// </summary>
        public static IVoteOptionDal GetVoteOptionDal()
        {
            return QssCacheHelper.GetCallContextCache<VoteOptionDal>("VoteOptionDal");
        }

        /// <summary>
        /// 获取WebConfigDal
        /// </summary>
        public static IWebConfigDal GetWebConfigDal()
        {
            return QssCacheHelper.GetCallContextCache<WebConfigDal>("WebConfigDal");
        }

        /// <summary>
        /// 获取WtLogDal
        /// </summary>
        public static IWtLogDal GetWtLogDal()
        {
            return QssCacheHelper.GetCallContextCache<WtLogDal>("WtLogDal");
        }

        /// <summary>
        /// 获取QssDbSession
        /// </summary>
        /// <returns></returns>
        public static IQssDbSession GetCurrentDbSession()
        {
            return QssCacheHelper.GetCallContextCache<QssDbSession>("QssDbSession");
        }
    }
}
