using SICAU.QSS.Common;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IDAL
{
    /// <summary>
    /// 约束UserDal，保证其实现了Bll层依赖的方法
    /// 并且让Bll层直接依赖于该接口，降低层之间的耦合
    /// </summary>
    public interface IUserDal : IBaseDal<User>
    {
        /// <summary>
        /// 通过邮箱获取用户
        /// </summary>
        /// <param name="email">邮箱</param>
        /// <param name="user">用户</param>
        /// <returns></returns>
        QssResult QssGetUserByEmail(string email, out User user);

        /// <summary>
        /// 根据账号获取用户
        /// </summary>
        /// <param name="account">账号</param>
        /// <param name="user">用户</param>
        /// <returns></returns>
        QssResult QssGetUserByAccount(string account, out User user);

        /// <summary>
        /// 获取当前登录用户
        /// </summary>
        /// <returns></returns>
        User GetCurrentUser();

        /// <summary>
        /// 校验是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <returns></returns>
        QssResult QssCheckHaveEmail();

        /// <summary>
        /// 根据账号校验该用户是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <param name="account">用户账号</param>
        /// <returns></returns>
        QssResult QssCheckHaveEmail(string account);

        /// <summary>
        /// 获取组织管理员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <returns></returns>
        User GetOrgAdmin(int oid);
    }
}
