
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SICAU.QSS.Common;
using System.Web;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现IUserDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    internal class UserDal : BaseDal<User>, IUserDal
    {
        /// <summary>
        /// 获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        public QssResult QssGetUserByEmail(string email, out User _user)
        {
            // 获得用户
            var user = Db.Users.Where(p => p.Email == email);

            Db.Questions.Where(p => Db.Users.Where(u => u.Id == p.Auditor.Id || u.Id == p.Creator.Id).Any());

            // 用户不存在
            if (!user.Any())
            {
                // 记录错误
                QssLogHelper.Log("找不到用户", "用户" + HttpContext.Current.User.Identity.Name + "已登录,却没有在数据库中找到该用户,可能是该用户修改了邮箱,但是并未注销登录!", QssLogType.Error);
                _user = null;
                return QssResult.Fail;
            }

            // 有多个用户共用一个邮箱
            if (user.Count() > 1)
            {
                // 获取共用该邮箱的所有用户
                string strUser = "";
                foreach (var u in user)
                {
                    strUser += $"{u.Account}({u.Name}),";
                }
                // 记录错误
                QssLogHelper.Log("多个用户共用一个邮箱", "邮箱：" + HttpContext.Current.User.Identity.Name + "被多个用户[" + strUser.TrimEnd(',') + "]所共用!", QssLogType.Error);
                _user = null;
                return QssResult.Error;
            }

            _user = user.FirstOrDefault();
            return QssResult.Success;
        }

        /// <summary>
        /// 根据账号获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        public new QssResult QssGetUserByAccount(string account, out User _user)
        {
            return base.QssGetUserByAccount(account, out _user);
        }

        /// <summary>
        /// 获取当前登录用户
        /// </summary>
        /// <returns></returns>
        public User GetCurrentUser()
        {
            if (HttpContext.Current.Request.IsAuthenticated && QssGetUserByAccount(HttpContext.Current.User.Identity.Name, out User user) == QssResult.Success) return user;
            else return null;
        }

        /// <summary>
        /// 校验是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <returns></returns>
        public QssResult QssCheckHaveEmail(string account)
        {
            // 获取当前登录用户
            var result = QssGetUserByAccount(account ?? HttpContext.Current.User.Identity.Name, out User user);
            if (result != QssResult.Success) return QssResult.Error;
            // 检查是否填写邮箱
            return (user.Email == "" || String.IsNullOrWhiteSpace(user.Email) || user.ACode != "") ? QssResult.Fail : QssResult.Success;
        }
        
        /// <summary>
        /// 校验是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <returns></returns>
        public QssResult QssCheckHaveEmail()
        {
            return QssCheckHaveEmail(null);
        }

        /// <summary>
        /// 获取组织管理员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <returns></returns>
        public User GetOrgAdmin(int oid)
        {
            return Db.Users.Where(u => Db.Organizes.Where(o => o.Id == oid && o.Admin.Id == u.Id).Any()).FirstOrDefault();
        }
    }
}
