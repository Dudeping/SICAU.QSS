
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// IUserBll接口
    /// 用于约束UserBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IUserService : IBaseService<User>
    {
        /// <summary>
        /// 根据邮箱获取账号
        /// </summary>
        /// <param name="email">邮箱</param>
        /// <param name="account">返回的账号</param>
        /// <returns></returns>
        QssResult QssGetAccountByEmail(string email, out string account);

        /// <summary>
        /// 根据教务网账号获取姓名
        /// </summary>
        /// <param name="account"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        QssResult QssGetNameByAccount(string account, out string name);

        /// <summary>
        /// 获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        QssResult QssGetUserByEmail(string email, out User user);

        /// <summary>
        /// 根据账号获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        QssResult QssGetUserByAccount(string account, out User user);

        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="model">用户资料</param>
        /// <returns></returns>
        QssResult QssUpdateUserInfo(QssSicauLoginHelper login, UserType type, out User user);

        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="stuInfo">从教务处获取的,经过封装的用户信息</param>
        /// <param name="user">更新成功后的该学生信息</param>
        /// <returns></returns>
        QssResult QssUpdateUserInfo(UserInfoHandle userInfo, out User user);

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
        /// 获取系统管理员联系方式
        /// </summary>
        /// <returns></returns>
        IEnumerable<SysAdminContact> GetSysAdmin();

        /// <summary>
        /// 获取系统管理员
        /// </summary>
        /// <returns></returns>
        IEnumerable<SysAdminModel> GetSysAdminList();

        /// <summary>
        /// 初始化系统
        /// </summary>
        /// <returns>结果</returns>
        string DefaultSystem();

        /// <summary>
        /// 激活邮箱
        /// </summary>
        /// <param name="jumpUrl"></param>
        /// <returns></returns>
        string ActivateEmail(string code, out string jumpUrl);

        /// <summary>
        /// 注册邮箱
        /// </summary>
        /// <param name="toEmail">接收者邮件</param>
        /// <param name="_result">处理结果</param>
        /// <returns></returns>
        QssResult QssRegisterEmail(string toEmail, string activateUrl, string code, out string _result);

        /// <summary>
        /// 添加系统管理员
        /// </summary>
        /// <param name="account">管理员账号</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssAddSysAdmin(string account, out string message);

        /// <summary>
        /// 删除系统管理员
        /// </summary>
        /// <param name="uid">管理员Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssDelSysAdmin(int uid, out string message);

        /// <summary>
        /// 删除过期用户 在定时任务中调用
        /// </summary>
        void DeleteExpireUser();
    }
}
