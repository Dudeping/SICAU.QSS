
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
    /// IOrganizeBll接口
    /// 用于约束OrganizeBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IOrganizeService : IBaseService<Organize>
    {
        /// <summary>
        /// 获取组织
        /// </summary>
        /// <param name="name">要获取的组织名</param>
        /// <param name="organize">获取到的组织</param>
        /// <returns></returns>
        QssResult QssGetOrganize(string name, out Organize organize);

        /// <summary>
        /// 获取组织列表
        /// </summary>
        /// <param name="type">获取组织类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="orgList">组织列表</param>
        /// <returns></returns>
        QssResult QssGetOrgList(QssGetOrgType type, out string message, out IQueryable<Organize> organizes);

        /// <summary>
        /// 获取组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="users">获取到的用户列表</param>
        /// <param name="organize">当前组织</param>
        /// <returns></returns>
        QssResult GetOrgUserList(int oid, out string message, out IQueryable<ManageUserModel> users, out Organize organize);

        /// <summary>
        /// 获取组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="users">获取到的用户列表</param>
        /// <param name="organize">当前组织</param>
        /// <returns></returns>
        QssResult GetOrgUserList(int oid, out string message, out IEnumerable<ManageUserModel> users, out Organize organize);

        /// <summary>
        /// 自动退出或加入组织
        /// </summary>
        /// <param name="user">当前操作的用户</param>
        /// <returns></returns>
        QssResult QssAutoDealOrg(User user);

        /// <summary>
        /// 获得学校组织
        /// 结果对学校组织公开,默认该结果公开
        /// </summary>
        /// <returns>查找结果</returns>
        QssResult QssGetSchool(out Organize school);

        /// <summary>
        /// 加入组织
        /// Error：跳转
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果</param>
        /// <returns></returns>
        QssResult QssJoinOrganize(int oid, out string message);

        /// <summary>
        /// 退出组织
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果</param>
        /// <returns></returns>
        QssResult QssQuitOrganize(int oid, out string message);

        /// <summary>
        /// 检查组织是否已存在
        /// false:不存在, true:存在
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <returns></returns>
        bool QssCheckOrg(string orgName);

        /// <summary>
        /// 创建组织
        /// Error：跳转
        /// </summary>
        /// <param name="type">组织类型</param>
        /// <param name="orgName">组织名</param>
        /// <param name="password">教务网密码</param>
        /// <param name="password">学习委员密码</param>
        /// <param name="message">处理消息</param>
        /// <returns></returns>
        QssResult QssCreateOrganize(QssOrganizeType type, string orgName, string password, string comPasswd, out string message);

        /// <summary>
        /// 修改组织
        /// </summary>
        /// <param name="oid">要修改的组织Id</param>
        /// <param name="orgName">修改成的组织名</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssEditOrganize(int oid, string orgName, out string message);

        /// <summary>
        /// 移除组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="uid">用户Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult RemoveUser(int oid, int uid, out string message);

        /// <summary>
        /// 更换组织管理员
        /// </summary>
        /// <param name="account">更换到的账号</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult ChangeOrgAdmin(int oid, string account, out string message);

        /// <summary>
        /// 获取审核组织列表
        /// </summary>
        /// <returns></returns>
        IQueryable<AuditManageModel> QssGetAuditOrgList();

        /// <summary>
        /// 标记组织在审核中
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkInAudit(int oid, out string message);

        /// <summary>
        /// 标记组织审核通过
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkAuditPass(int oid, out string message);

        /// <summary>
        /// 标记组织审核不通过
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="reason">不通过原因</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkAuditNotPass(int oid, string reason, out string message);

        /// <summary>
        /// 删除已过期组织
        /// </summary>
        void DeleteExpireOrg();

        /// <summary>
        /// 删除组织
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssDelOrganize(int id, out string message);
    }
}
