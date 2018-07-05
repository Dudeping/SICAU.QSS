using SICAU.QSS.BLL;
using SICAU.QSS.Common;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// Bll层的简单工厂
    /// </summary>
    public class StaticBllFactory
    {
        /// <summary>
        /// 获取LetterBll
        /// </summary>
        /// <returns></returns>
        public static ILetterService GetLetterService()
        {
            return QssCacheHelper.GetCallContextCache<LetterService>("LetterService");
        }

        /// <summary>
        /// 获取LogBll
        /// </summary>
        /// <returns></returns>
        public static ILogService GetLogService()
        {
            return QssCacheHelper.GetCallContextCache<LogService>("LogService");
        }

        /// <summary>
        /// 获取OrganizeBll
        /// </summary>
        /// <returns></returns>
        public static IOrganizeService GetOrganizeService()
        {
            return QssCacheHelper.GetCallContextCache<OrganizeService>("OrganizeService");
        }

        /// <summary>
        /// 获取QuesOptionBll
        /// </summary>
        /// <returns></returns>
        public static IQuesOptionService GetQuesOptionService()
        {
            return QssCacheHelper.GetCallContextCache<QuesOptionService>("QuesOptionService");
        }

        /// <summary>
        /// 获取QuesSubjectBll
        /// </summary>
        /// <returns></returns>
        public static IQuesSubjectService GetQuesSubjectService()
        {
            return QssCacheHelper.GetCallContextCache<QuesSubjectService>("QuesSubjectService");
        }

        /// <summary>
        /// 获取QuestionBll
        /// </summary>
        /// <returns></returns>
        public static IQuestionService GetQuestionService()
        {
            return QssCacheHelper.GetCallContextCache<QuestionService>("QuestionService");
        }

        /// <summary>
        /// 获取RoleBll
        /// </summary>
        /// <returns></returns>
        public static IRoleService GetRoleService()
        {
            return QssCacheHelper.GetCallContextCache<RoleService>("RoleService");
        }

        /// <summary>
        /// 获取SysNewsBll
        /// </summary>
        /// <returns></returns>
        public static ISysNewsService GetSysNewsService()
        {
            return QssCacheHelper.GetCallContextCache<SysNewsService>("SysNewsService");
        }

        /// <summary>
        /// 获取UserBll
        /// </summary>
        /// <returns></returns>
        public static IUserService GetUserService()
        {
            return QssCacheHelper.GetCallContextCache<UserService>("UserService");
        }

        /// <summary>
        /// 获取VoteBll
        /// </summary>
        /// <returns></returns>
        public static IVoteService GetVoteService()
        {
            return QssCacheHelper.GetCallContextCache<VoteService>("VoteService");
        }

        /// <summary>
        /// 获取VoteOptionBll
        /// </summary>
        /// <returns></returns>
        public static IVoteOptionService GetVoteOptionService()
        {
            return QssCacheHelper.GetCallContextCache<VoteOptionService>("VoteOptionService");
        }

        /// <summary>
        /// 获取WebConfigBll
        /// </summary>
        /// <returns></returns>
        public static IWebConfigService GetWebConfigService()
        {
            return QssCacheHelper.GetCallContextCache<WebConfigService>("WebConfigService");
        }

        /// <summary>
        /// 获取WtLogBll
        /// </summary>
        /// <returns></returns>
        public static IWtLogService GetWtLogService()
        {
            return QssCacheHelper.GetCallContextCache<WtLogService>("WtLogService");
        }
    }
}
