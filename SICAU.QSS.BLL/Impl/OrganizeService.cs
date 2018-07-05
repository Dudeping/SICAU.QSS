using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// OrganizeBll
    /// 实现IOrganizeBll接口
    /// </summary>
    internal class OrganizeService : BaseService<Organize>, IOrganizeService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.OrganizeDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public OrganizeService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 获取组织
        /// </summary>
        /// <param name="name">要获取的组织名</param>
        /// <param name="organize">获取到的组织</param>
        /// <returns></returns>
        public QssResult QssGetOrganize(string name, out Organize organize)
        {
            var ol = CurrentDal.GetEntities(p => p.Name == name).ToList();
            if (ol.Count() <= 0)
            {
                organize = null;
                return QssResult.Fail;
            }
            else if (ol.Count() > 1)
            {
                organize = null;
                QssLogHelper.Log("出现同名组织", $"在获取组织{name}时，出现{ol.Count()}个同名组织！", QssLogType.Error);
                return QssResult.Error;
            }
            else
            {
                organize = ol.First();
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 获取组织列表
        /// </summary>
        /// <param name="type">获取组织类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="organizes">组织列表</param>
        /// <returns></returns>
        public QssResult QssGetOrgList(QssGetOrgType type, out string message, out IQueryable<Organize> organizes)
        {
            if (CurrentUser == null)
            {
                message = "获取当前用户失败";
                organizes = null;
                return QssResult.Fail;
            }

            var joinOrganizes = CurrentUser.JoinOrganizes.Select(x => x.Id);
            organizes =
                type == QssGetOrgType.create ? DbSession.OrganizeDal.GetEntities(p => p.Admin.Id == CurrentUser.Id, "Admin") :
                DbSession.OrganizeDal.GetEntities(p => joinOrganizes.Contains(p.Id) && p.State == QssOrganizeState.Pass, "Admin");
            message = "获取组织列表成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="users">成员</param>
        /// <returns></returns>
        public QssResult GetOrgUserList(int oid, out string message, out IQueryable<ManageUserModel> users, out Organize organize)
        {
            var _organize = GetEntities(p => p.Id == oid, "Admin").FirstOrDefault();
            organize = _organize;
            if (_organize == null)
            {
                users = null;
                message = "获取组织!";
                QssLogHelper.Log("获取组织失败", $"获取组织成员时，根据传过来的组织Id：{oid} 获取组织失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                users = null;
                return QssResult.Fail;
            }

            if (_organize.Admin.Id != CurrentUser.Id)
            {
                users = null;
                message = "获取权限失败!";
                QssLogHelper.Log("获取权限失败", "获取组织成员时，组织的创建者并非当前操作者!", QssLogType.Warn);
            }

            users = DbSession.UserDal.GetEntities(p => _organize.Users.Contains(p)).Select(p => new ManageUserModel { Id = p.Id, Account = p.Account, Name = p.Name });
            message = "获取成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="users">成员</param>
        /// <returns></returns>
        public QssResult GetOrgUserList(int oid, out string message, out IEnumerable<ManageUserModel> users, out Organize organize)
        {
            var _organize = GetEntities(p => p.Id == oid, "Admin").FirstOrDefault();
            organize = _organize;
            if (_organize == null)
            {
                users = null;
                message = "获取组织!";
                QssLogHelper.Log("获取组织失败", $"获取组织成员时，根据传过来的组织Id：{oid} 获取组织失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                users = null;
                return QssResult.Fail;
            }

            if (_organize.Admin.Id != CurrentUser.Id)
            {
                users = null;
                message = "获取权限失败!";
                QssLogHelper.Log("获取权限失败", "获取组织成员时，组织的创建者并非当前操作者!", QssLogType.Warn);
            }

            users = _organize.Users.Select(p => new ManageUserModel { Id = p.Id, Account = p.Account, Name = p.Name });
            message = "获取成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 自动退出组织
        /// </summary>
        /// <param name="letterList">站内信列表</param>
        /// <param name="organizeList">所属组织列表</param>
        /// <param name="type">组织类型</param>
        /// <param name="quitOrgName">要退出的组织名</param>
        /// <param name="text">组织类型名称</param>
        private void QssAutoQuitOrganize(List<string> letterList, List<Organize> organizes, QssOrganizeType type, string quitOrgName, string text)
        {
            Organize organize = organizes.FirstOrDefault(p => p.Type == type);
            if (organize != null && organize.Name != quitOrgName)
            {
                organizes.RemoveAll(p => p.Type == type);
                letterList.Add($"因为已不在该{text}，所以自动退出{text}组织：" + organize.Name);
            }
        }

        /// <summary>
        /// 加入组织
        /// </summary>
        /// <param name="organize">要加入的组织</param>
        /// <param name="type">要加入的组织类型</param>
        /// <param name="userOrgName">用户所在的组织</param>
        /// <param name="text">提示文本</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssJoinOrganize(Organize organize, QssOrganizeType type, string userOrgName, string text, out string message)
        {
            if (organize.Type == type && organize.Name != userOrgName)
            {
                QssLogHelper.Log("加入组织失败", $"处理加入组织请求时, 用户要加入组织级别为{text}，但是用户不在该{text}, 组织Id: {organize.Id}, 组织名：{organize.Name}", QssLogType.Warn);
                message = $"该组织类别为{text}, 不能加入你不在的{text}!";
                return QssResult.Fail;
            }

            message = "OK";
            return QssResult.Success;
        }

        /// <summary>
        /// 自动加入组织
        /// </summary>
        /// <param name="letterList">站内信列表</param>
        /// <param name="organizeList">所属组织列表</param>
        /// <param name="type">组织类型</param>
        /// <param name="joinOrgName">要加入的组织名</param>
        /// <param name="text">组织类型名称</param>
        private void QssAutoJoinOrganize(List<string> letterList, List<Organize> organizeList, QssOrganizeType type, string joinOrgName, string text)
        {
            if (organizeList.Count(p => p.Type == type) <= 0 && QssGetOrganize(joinOrgName, out Organize organize) == QssResult.Success && organize.State == QssOrganizeState.Pass)
            {
                organizeList.Add(organize);
                letterList.Add($"已自动加入{text}组织：" + organize.Name);
            }
        }

        /// <summary>
        /// 自动退出或加入组织
        /// </summary>
        /// <param name="user">当前操作的用户</param>
        /// <returns></returns>
        public QssResult QssAutoDealOrg(User user)
        {
            List<string> letterList = new List<string>();
            List<Organize> organizeList = user.JoinOrganizes.ToList();

            // 退出自己已经不在的组织(校区、学院、专业、班级)
            if (organizeList.Count != 0)
            {
                QssAutoQuitOrganize(letterList, organizeList, QssOrganizeType.Campus, user.Campus, "校区");
                QssAutoQuitOrganize(letterList, organizeList, QssOrganizeType.College, user.College, "学院");
                QssAutoQuitOrganize(letterList, organizeList, QssOrganizeType.Major, user.Major, "专业");
                QssAutoQuitOrganize(letterList, organizeList, QssOrganizeType.Class, user.Class, "班级");
            }

            // 加入自己应该加入的组织(学院、校区、学院、专业、班级)
            QssAutoJoinOrganize(letterList, organizeList, QssOrganizeType.School, QssEnvironment.SchoolName, "学校");
            QssAutoJoinOrganize(letterList, organizeList, QssOrganizeType.Campus, user.Campus, "校区");
            QssAutoJoinOrganize(letterList, organizeList, QssOrganizeType.College, user.College, "学院");
            QssAutoJoinOrganize(letterList, organizeList, QssOrganizeType.Major, user.Major, "专业");
            QssAutoJoinOrganize(letterList, organizeList, QssOrganizeType.Class, user.Class, "班级");

            if (letterList.Count > 0)
            {
                try
                {
                    // 修改所属组织
                    user.JoinOrganizes = organizeList.Distinct().ToList();
                    DbSession.UserDal.Update(user);
                    // 发送站内信
                    DbSession.LetterDal.Add(new Letter() { Title = "系统消息", Content = string.Join("<br />", letterList), CreateTime = DateTime.Now, Receive = new List<User>() { user } });

                    // 更新到数据库
                    DbSession.SaveChanges();
                }
                catch (Exception exception) { QssLogHelper.Log("更新组织失败", $"用户{user.Account}({user.Name})登录时，在保存更新所属组织时失败！原因：{exception.Message}。", QssLogType.Error, exception, $"{user.Account}({user.Name})"); }
            }
            return QssResult.Success;
        }

        /// <summary>
        /// 获得学校组织
        /// 结果对学校组织公开,默认该结果公开
        /// </summary>
        /// <returns>查找结果</returns>
        public QssResult QssGetSchool(out Organize school) => DbSession.OrganizeDal.QssGetSchool(out school);

        /// <summary>
        /// 加入组织
        /// Error：跳转
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果</param>
        /// <returns></returns>
        public QssResult QssJoinOrganize(int oid, out string message)
        {
            // 查找组织
            var organize = GetEntity(oid);
            if (organize == null)
            {
                // 组织不存在
                QssLogHelper.Log("组织不存在", "处理加入组织请求时, 要加入的的组织不存在, 组织Id: " + oid, QssLogType.Warn);
                message = "组织不存在!";
                return QssResult.Fail;
            }

            // 组织状态
            if (organize.State != QssOrganizeState.Pass)
            {
                // 组织不存在
                QssLogHelper.Log("组织未创建", "处理加入组织请求时, 要加入的的组织已创建，但是还未创建成功, 组织Id: " + oid, QssLogType.Warn);
                message = "组织未创建成功!";
                return QssResult.Fail;
            }

            // 查找用户
            QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            // 成功
            if (result != QssResult.Success)
            {
                // 获取用户失败
                message = "/Account/LogOff";
                return QssResult.Error;
            }

            // 验证是否重复加入
            if (user.JoinOrganizes.Contains(organize))
            {
                QssLogHelper.Log("加入组织失败", $"处理加入组织请求时, 用户要加入自己已经加入的组织, 组织Id: {oid}, 组织名：{organize.Name}", QssLogType.Warn);
                message = "你已加入该组织,请勿重复加入!";
                return QssResult.Fail;
            }

            // 是否在该组织(校区、学院、专业、班级)
            if (QssJoinOrganize(organize, QssOrganizeType.Campus, user.Campus, "校区", out message) != QssResult.Success) return QssResult.Fail;
            if (QssJoinOrganize(organize, QssOrganizeType.College, user.College, "学院", out message) != QssResult.Success) return QssResult.Fail;
            if (QssJoinOrganize(organize, QssOrganizeType.Major, user.Major, "专业", out message) != QssResult.Success) return QssResult.Fail;
            if (QssJoinOrganize(organize, QssOrganizeType.Class, user.Class, "班级", out message) != QssResult.Success) return QssResult.Fail;

            // 保存
            try
            {
                user.JoinOrganizes.Add(organize);
                DbSession.UserDal.Update(user);
                DbSession.SaveChanges();

                // 保存成功
                message = "加入组织失败!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 保存失败
                QssLogHelper.Log("加入组织失败", $"保存用户加入组织时出错，报错信息：{exception.Message}", QssLogType.Warn, exception);
                message = "加入组织失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 退出组织
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果</param>
        /// <returns></returns>
        public QssResult QssQuitOrganize(int oid, out string message)
        {
            // 查找组织
            var organize = GetEntity(oid);
            if (organize == null)
            {
                // 组织不存在
                QssLogHelper.Log("组织不存在", "处理退出组织请求时, 要退出的的组织不存在, 组织Id: " + oid, QssLogType.Warn);
                message = "组织不存在!";
                return QssResult.Fail;
            }

            // 查找用户
            QssResult result = DbSession.UserDal.QssGetUserByAccount(User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                // 获取用户失败
                message = "Account/LogOff";
                return QssResult.Error;
            }

            // 校验权限
            if (user.JoinOrganizes.Count(p => p.Id == organize.Id) == 0)
            {
                QssLogHelper.Log("该用户并不在该组织", "处理退出组织请求时, 该用户并不在要退出的的组织, 组织Id: " + oid, QssLogType.Warn);
                message = "组织不存在!";
                return QssResult.Fail;
            }

            // 如果是自己必须加入的官方组织,则不能退出
            if (organize.Type != QssOrganizeType.Association && organize.Type != QssOrganizeType.Department && organize.Type != QssOrganizeType.Temp)
            {
                message = "退出组织失败! 只能手动退出组织类型为部门或协会的组织, 其他组织的退出和加入由系统自行管理,统一在登录时处理.";
                return QssResult.Fail;
            }

            try
            {
                // 退出组织
                user.JoinOrganizes.Remove(organize);
                DbSession.UserDal.Update(user);
                DbSession.SaveChanges();

                // 保存成功
                message = "退出组织成功!";
                return QssResult.Success;
            }
            catch (Exception)
            {
                // 保存失败
                message = "退出组织失败!";
                return QssResult.Fail;
            }
        }

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
        public QssResult QssCreateOrganize(QssOrganizeType type, string orgName, string password, string comPasswd, out string message)
        {
            // 判断创建类型
            // 1.如果是临时组织，直接创建
            // 2.如果是官方组织，判断创建者是否有资格，并给出相应的建议，通过之后提交系统管理员处理
            // 3.如果是社团和部门，提交系统管理员处理

            QssResult result = DbSession.UserDal.QssGetUserByAccount(HttpContext.Current.User.Identity.Name, out User user);

            // 没有获取到当前用户信息
            if (result != QssResult.Success)
            {
                message = "获取当前用户失败!";
                return QssResult.Error;
            }

            // 是否绑定邮箱
            if (!user.QssCheckHaveEmail())
            {
                message = "未绑定邮箱!";
                return QssResult.Fail;
            }

            // TODO: 测试版
            if (type == QssOrganizeType.Campus || type == QssOrganizeType.Major || type == QssOrganizeType.School)
            {
                message = "测试版暂不能创建该级别的组织!";
                return QssResult.Fail;
            }

            return
                // 临时组织
                type == QssOrganizeType.Temp ? QssCreateTempOrg(orgName, user, out message) :
                // 学校
                type == QssOrganizeType.School ? QssCreateSchoolOrg(orgName, user, password, out message) :
                // 校区
                type == QssOrganizeType.Campus ? QssCreateCampusOrg(orgName, user, password, out message) :
                // 学院
                type == QssOrganizeType.College ? QssCreateCollegeOrg(orgName, user, password, out message) :
                // 专业
                type == QssOrganizeType.Major ? QssCreateMajorOrg(orgName, user, password, out message) :
                // 班级
                type == QssOrganizeType.Class ? QssCreateClassOrg(orgName, user, password, comPasswd, out message) :
                // 部门或社团
                QssCreateDepartAndAssOrg(orgName, type, user, out message);
        }

        /// <summary>
        /// 创建临时组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateTempOrg(string orgName, User user, out string message)
        {
            // 创建组织
            Organize org = new Organize()
            {
                Name = orgName,
                Type = QssOrganizeType.Temp,
                Admin = user,
                Campus = user.Campus,
                College = user.College,
                CreateTime = DateTime.Now,
                DeleteTime = DateTime.Now.AddMonths(3),
                IsTemp = true,
                State = QssOrganizeState.Pass,
                Major = user.Major,
                Users = new List<User> { user },
                // 系统代审
                Auditor = null
            };

            try
            {
                // 更改当前用户角色
                if (ChangeUserRole(user, out message) != QssResult.Success) return QssResult.Fail;
                // 保存组织
                CurrentDal.Add(org);
                DbSession.SaveChanges();

                new QssSendOrgLetterEmail(org).Send(out message);
                message = $"创建临时组织{orgName}成功！有效时间为3个月，到期系统自动删除。";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 保存创建的组织 {orgName} 失败!", QssLogType.Error, exception);
                message = $"创建临时组织{orgName}失败！";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 创建部门或社团组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateDepartAndAssOrg(string orgName, QssOrganizeType type, User user, out string message)
        {
            // 创建组织
            Organize org = new Organize()
            {
                Name = orgName,
                Type = type,
                Admin = user,
                Campus = user.Campus,
                College = user.College,
                CreateTime = DateTime.Now,
                DeleteTime = DateTime.Parse("1996/09/06"),
                IsTemp = false,
                State = QssOrganizeState.NoAudited
            };

            // 保存组织
            return QssSaveOrganize(org, user, out message);
        }

        /// <summary>
        /// 创建学校组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateSchoolOrg(string createOrgName, User user, string password, out string message)
        {
            if (QssCheckAuth(user.Account, user.Name, password, createOrgName, QssOrganizeType.School, QssEnvironment.AllowToCreateSchoolDepartment, "学校", out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            // 创建组织
            organize.Admin = user;

            // 保存组织
            return QssSaveOrganize(organize, user, out message);
        }

        /// <summary>
        /// 创建校区组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateCampusOrg(string createOrgName, User user, string password, out string message)
        {
            if (QssCheckAuth(user.Account, user.Name, password, createOrgName, QssOrganizeType.Campus, QssEnvironment.AllowToCreateCampusDepartment, "学院", out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            // 创建组织
            organize.Admin = user;
            organize.Campus = user.Campus;

            // 保存组织
            return QssSaveOrganize(organize, user, out message);
        }

        /// <summary>
        /// 创建学院组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateCollegeOrg(string createOrgName, User user, string password, out string message)
        {
            if (QssCheckAuth(user.Account, user.Name, password, createOrgName, QssOrganizeType.College, QssEnvironment.AllowToCreateCollegeDepartment, "学院", out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            // 创建组织
            organize.Admin = user;
            organize.Campus = user.Campus;
            organize.College = user.College;

            // 保存组织
            return QssSaveOrganize(organize, user, out message);
        }

        /// <summary>
        /// 创建专业组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateMajorOrg(string createOrgName, User user, string password, out string message)
        {
            if (QssCheckAuth(user.Account, user.Name, password, createOrgName, QssOrganizeType.Major, QssEnvironment.AllowToCreateMajorDepartment, "专业", out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            // 创建组织
            organize.Admin = user;
            organize.Campus = user.Campus;
            organize.College = user.College;
            organize.Major = user.Major;

            // 保存组织
            return QssSaveOrganize(organize, user, out message);
        }

        /// <summary>
        /// 创建班级组织
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <param name="type">组织类型</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateClassOrg(string orgName, User user, string password, string comPasswd, out string message)
        {
            // 登录教务网
            var login = new QssSicauLoginHelper();
            try
            {
                if (!login.Login(user.Account, password, UserType.S))
                {
                    message = "教务网密码错误!";
                    QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 创建组织 {orgName} 时, 登录教务网失败!", QssLogType.Error);
                    return QssResult.Fail;
                }
            }
            catch (Exception exception)
            {
                message = "登录教务网失败!" + exception.Message;
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 创建组织 {orgName} 时, 登录教务网失败!" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }

            // 是否已存在
            if (QssCheckOrg(orgName))
            {
                message = "该专业组织已经存在!";
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 创建专业组织 {orgName} 时, 已有该组织", QssLogType.Error);
                return QssResult.Fail;
            }

            // 校验权限
            if (!login.IsCommittee(comPasswd))
            {
                message = "您没有权限创建该班级组织";
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 创建专业组织 {orgName} 时, 并没有达到系统设定的权限!系统设定权限为：学习委员，而该用户在登录学习委员系统时出错。", QssLogType.Error);
                return QssResult.Fail;
            }

            var userInfo = new UserInfoHandle(login.GetStuInfo());

            // 校验组织名
            var _class = userInfo.Class;
            if (_class != orgName)
            {
                message = $"您所在的班级为{_class}，建议将组织名修改为{_class}！";
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 创建班级组织 {orgName} 时, 与自己所在班级不符，建议修改! 该用户所在班级为：{_class}", QssLogType.Error);
                return QssResult.Fail;
            }

            // 创建组织
            Organize org = new Organize()
            {
                Name = orgName,
                Type = QssOrganizeType.Class,
                Admin = user,
                Campus = user.Campus,
                College = user.College,
                Major = user.Major,
                CreateTime = DateTime.Now,
                DeleteTime = DateTime.Parse($"{user.Grade + user.LoSch}/09/06"),
                IsTemp = false,
                State = QssOrganizeState.NoAudited
            };

            // 保存组织
            return QssSaveOrganize(org, user, out message);
        }

        /// <summary>
        /// 检查组织是否已存在
        /// false:不存在, true:存在
        /// </summary>
        /// <param name="orgName">组织名</param>
        /// <returns></returns>
        public bool QssCheckOrg(string orgName) => CurrentDal.GetEntities(p => p.Name == orgName).Any();

        /// <summary>
        /// 校验教师权限
        /// </summary>
        /// <param name="account">账号</param>
        /// <param name="name">教师姓名</param>
        /// <param name="password">教务网密码</param>
        /// <param name="createOrgName">要创建的组织名</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="department">系统设定部门</param>
        /// <param name="text">提示文本信息</param>
        /// <returns></returns>
        private QssResult QssCheckAuth(string account, string name, string password, string createOrgName, QssOrganizeType type, string department, string text, out string message, out Organize organize)
        {
            organize = null;
            // 登录教务网
            var login = new QssSicauLoginHelper();
            try
            {
                if (!login.Login(account, password, UserType.T))
                {
                    message = "教务网密码错误!";
                    QssLogHelper.Log("创建组织失败", $"{account}({name}) 创建组织 {createOrgName} 时, 登录教务网失败!", QssLogType.Error);
                    return QssResult.Fail;
                }
            }
            catch (Exception exception)
            {
                message = "登录教务网失败!" + exception.Message;
                QssLogHelper.Log("创建组织失败", $"{account}({name}) 创建组织 {createOrgName} 时, 登录教务网失败!" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }

            var userInfo = new UserInfoHandle(login.GetThInfo());

            // 是否已存在
            if (QssCheckOrg(createOrgName))
            {
                message = $"该{text}组织已经存在!";
                QssLogHelper.Log("创建组织失败", $"{account}({name}) 创建{text}组织 {createOrgName} 时, 已有该组织", QssLogType.Error);
                return QssResult.Fail;
            }

            // 校验权限
            var _department = userInfo.Department;
            if (_department != department)
            {
                message = $"您没有权限创建该{text}组织";
                QssLogHelper.Log("创建组织失败", $"{account}({name}) 创建{text}组织 {createOrgName} 时, 并没有达到系统设定的权限!系统设定权限为：{department}部门，而该用户在 {_department}部门", QssLogType.Error);
                return QssResult.Fail;
            }

            // 校验组织名
            var userOrgName = type == QssOrganizeType.School ? userInfo.College : type == QssOrganizeType.Campus ? userInfo.Campus : userInfo.College;
            if (type != QssOrganizeType.Major && userOrgName != createOrgName)
            {
                message = $"您所在的{text}为{userOrgName}，建议将组织名修改为{userOrgName}！";
                QssLogHelper.Log("创建组织失败", $"{account}({name}) 创建{text}组织 {createOrgName} 时, 与自己所在{text}不符，建议修改! 该用户所在{text}为：{userOrgName}", QssLogType.Error);
                return QssResult.Fail;
            }

            // 创建组织
            organize = new Organize()
            {
                Name = createOrgName,
                Type = type,
                CreateTime = DateTime.Now,
                DeleteTime = DateTime.Parse("1996/09/06"),
                IsTemp = false,
                State = QssOrganizeState.NoAudited
            };
            message = "校验成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 保存组织
        /// </summary>
        /// <param name="org">要保存的组织</param>
        /// <param name="user">当前用户</param>
        /// <param name="message">处理信息</param>
        /// <returns></returns>
        private QssResult QssSaveOrganize(Organize org, User user, out string message)
        {
            try
            {
                org.Users = new List<User> { user };
                // 更改当前用户角色
                if (ChangeUserRole(user, out message) != QssResult.Success) return QssResult.Fail;
                // 保存组织
                CurrentDal.Add(org);
                DbSession.SaveChanges();

                // 向系统管理员发送邮件和站内信
                return new QssSendOrgLetterEmail(org).Send(out message);
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("创建组织失败", $"{user.Account}({user.Name}) 保存创建的组织 {org.Name} 失败!", QssLogType.Error, exception);
                message = $"创建组织{org.Name}失败！";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 更改用户角色
        /// </summary>
        /// <param name="user">当前操作用户</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult ChangeUserRole(User user, out string message)
        {
            message = "更改用户角色成功!";
            if (user.Role.Name == QssRoleType.User.ToString())
            {
                var result = new RoleService().QssGetRoleByName(QssRoleType.Admin.ToString(), out Role role);
                if (result != QssResult.Success)
                {
                    message = "更改用户角色失败!";
                    return result;
                }
                user.Role = role;
                DbSession.UserDal.Update(user);
            }
            return QssResult.Success;
        }

        /// <summary>
        /// 修改组织
        /// </summary>
        /// <param name="oid">要修改的组织Id</param>
        /// <param name="orgName">修改成的组织名</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssEditOrganize(int oid, string editOrgName, out string message)
        {
            // 获取当前用户
            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                QssLogHelper.Log("获取当前用户失败", "在修改组织时获取当前用户失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            // 获取组织
            var organize = GetEntity(oid);
            if (organize == null)
            {
                message = "没有找到该组织, 请刷新重试!";
                return QssResult.Error;
            }

            // 校验组织状态
            if (organize.State == QssOrganizeState.Pass)
            {
                message = "该组织已通过审核，不能再进行修改!";
                QssLogHelper.Log("组织状态错误", "修改组织名时，组织状态为审核通过，原则上，审核通过的组织不能再进行更改！", QssLogType.Error);
                return QssResult.Error;
            }

            // 校验权限
            if (!CurrentDal.GetEntities(x => x.Id == oid && x.Admin.Id == CurrentUser.Id).Any())
            {
                message = "没有权限!";
                QssLogHelper.Log("获取权限失败", "修改组织名时，当前操作用户并不是组织管理员！", QssLogType.Warn);
                return QssResult.Error;
            }

            // 校验组织名 (学校、校区、学院、专业、班级)
            if (organize.Type == QssOrganizeType.School && CheckOrgName(editOrgName, QssOrganizeType.School, QssEnvironment.SchoolName, $"{CurrentUser.Account}({CurrentUser.Name})", "学校", out message) != QssResult.Success) return QssResult.Fail;
            if (organize.Type == QssOrganizeType.Campus && CheckOrgName(editOrgName, QssOrganizeType.Campus, CurrentUser.Campus, $"{CurrentUser.Account}({CurrentUser.Name})", "校区", out message) != QssResult.Success) return QssResult.Fail;
            if (organize.Type == QssOrganizeType.College && CheckOrgName(editOrgName, QssOrganizeType.College, CurrentUser.College, $"{CurrentUser.Account}({CurrentUser.Name})", "学院", out message) != QssResult.Success) return QssResult.Fail;
            //if (organize.Type == QssOrganizeType.Major && CheckOrgName(editOrgName, QssOrganizeType.Major, CurrentUser.Major, $"{CurrentUser.Account}({CurrentUser.Name})", "专业", out message) != QssResult.Success) return QssResult.Fail; // 专业无法获取
            if (organize.Type == QssOrganizeType.Class && CheckOrgName(editOrgName, QssOrganizeType.Class, CurrentUser.Class, $"{CurrentUser.Account}({CurrentUser.Name})", "班级", out message) != QssResult.Success) return QssResult.Fail;

            organize.Name = editOrgName;

            try
            {
                // 保存组织
                CurrentDal.Update(organize);
                DbSession.SaveChanges();

                // 向系统管理员发送邮件和站内信
                return new QssSendOrgLetterEmail(organize).Send(out message);
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("修改组织失败", $"{CurrentUser.Account}({CurrentUser.Name}) 保存修改的组织 {organize.Name} 失败!", QssLogType.Error, exception);
                message = $"修改组织{organize.Name}失败！";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 修改组织时校验组织名
        /// </summary>
        /// <param name="editOrgName">要修改的组织名</param>
        /// <param name="type">要修改的组织类型</param>
        /// <param name="userOrgName">用户所在组织</param>
        /// <param name="user">用户， 格式：账号(姓名)</param>
        /// <param name="text">提示文本</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult CheckOrgName(string editOrgName, QssOrganizeType type, string userOrgName, string user, string text, out string message)
        {
            if (editOrgName != userOrgName)
            {
                message = $"您所在的{text}为{userOrgName}，建议将组织名修改为{userOrgName}！";
                QssLogHelper.Log("修改组织失败", $"{user}) 修改{text}组织 {editOrgName} 时, 与自己所在{text}不符，建议修改! 该用户所在{text}为：{userOrgName}", QssLogType.Error);
                return QssResult.Fail;
            }

            message = "校验成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核组织列表
        /// </summary>
        /// <returns></returns>
        public IQueryable<AuditManageModel> QssGetAuditOrgList()
        {
            return DbSession.OrganizeDal
                .GetEntities(p => p.State == QssOrganizeState.InAudit || p.State == QssOrganizeState.NoAudited)
                .Select(p => new AuditManageModel { Id = p.Id, SubmitTime = p.CreateTime, SubmitType = QssAuditSubmitType.org, IsInAudit = p.State == QssOrganizeState.InAudit, Auditor = p.Auditor.Account, Author = p.Admin.Name });
        }

        /// <summary>
        /// 标记组织在审核中
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkInAudit(int oid, out string message)
        {
            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                return QssResult.Fail;
            }

            var organize = DbSession.OrganizeDal.GetEntity(oid);
            if (organize == null)
            {
                message = "获取该问卷失败!";
                return QssResult.Fail;
            }

            if (organize.State == QssOrganizeState.Pass || organize.State == QssOrganizeState.NotPass)
            {
                message = "问卷状态错误!";
                return QssResult.Fail;
            }

            if (organize.State == QssOrganizeState.InAudit && !DbSession.OrganizeDal.GetEntities(p => p.Id == oid && p.Auditor.Id == CurrentUser.Id).Any())
            {
                message = "其他管理员正在审核!";
                return QssResult.Fail;
            }

            if (organize.State == QssOrganizeState.InAudit)
            {
                message = "标记成功!";
                return QssResult.Success;
            }

            try
            {
                organize.State = QssOrganizeState.InAudit;
                organize.Auditor = CurrentUser;
                DbSession.OrganizeDal.Update(organize);
                DbSession.SaveChanges();

                message = "标记成功!";
                return new QssSendOrgLetterEmail(organize).Send(out message);
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("组织状态变更失败", "在保存组织状态为正在审核中时失败! 原因：" + exception.Message, QssLogType.Error, exception);
                message = "标记成功!";
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 标记组织审核通过
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkAuditPass(int oid, out string message)
        {
            if (QssCheckAuth(oid, out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            organize.State = QssOrganizeState.Pass;
            return QssSaveOrgState(organize, "审核通过", out message);
        }

        /// <summary>
        /// 标记组织审核不通过
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="reason">不通过原因</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkAuditNotPass(int oid, string reason, out string message)
        {
            if (QssCheckAuth(oid, out message, out Organize organize) != QssResult.Success) return QssResult.Fail;

            organize.State = QssOrganizeState.NotPass;
            organize.Reason = reason;
            return QssSaveOrgState(organize, "审核通过", out message);
        }

        /// <summary>
        /// 校验权限
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="organize">当前组织</param>
        /// <returns></returns>
        private QssResult QssCheckAuth(int oid, out string message, out Organize organize)
        {
            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                organize = null;
                return QssResult.Fail;
            }

            organize = DbSession.OrganizeDal.GetEntity(oid);
            if (organize == null)
            {
                message = "获取该组织失败!";
                return QssResult.Fail;
            }

            if (organize.State != QssOrganizeState.InAudit)
            {
                message = "组织状态错误!";
                return QssResult.Fail;
            }

            if (!DbSession.OrganizeDal.GetEntities(p => p.Id == oid && p.Auditor.Id == CurrentUser.Id).Any())
            {
                message = "其他管理员正在审核!";
                return QssResult.Fail;
            }

            message = "校验成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 保存组织状态
        /// </summary>
        /// <param name="organize">当前组织</param>
        /// <param name="text">提示文本</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult QssSaveOrgState(Organize organize, string text, out string message)
        {
            try
            {
                DbSession.OrganizeDal.Update(organize);
                DbSession.SaveChanges();

                message = "审核成功!";
                return new QssSendOrgLetterEmail(organize).Send(out message);
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("组织状态变更失败", $"在保存组织状态为{text}时失败! 原因：" + exception.Message, QssLogType.Error, exception);
                message = "审核失败!";
                return QssResult.Success;
            }
        }

        /// <summary>
        /// 移除组织成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="uid">用户Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult RemoveUser(int oid, int uid, out string message)
        {
            // 获取组织
            var organize = DbSession.OrganizeDal.GetEntity(oid);
            if (organize == null)
            {
                message = "获取该组织失败!";
                QssLogHelper.Log("获取组织失败", $"在从Id为：{oid} 的组织中织移除Id为：{uid}的成员时，获取该组织失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            // 获取用户
            User user = DbSession.UserDal.GetEntity(uid);
            if (user == null)
            {
                message = "获取该用户失败!";
                QssLogHelper.Log("获取用户失败", $"在从组织：{organize.Name}中移除Id为：{uid}的成员时，获取该成员失败!", QssLogType.Error);
                return QssResult.Fail;
            }

            // 权限
            if (organize.Admin.Account != User.Identity.Name)
            {
                message = "当前用户无该权限!";
                QssLogHelper.Log("无移除组织成员权限", $"在从组织：{organize.Name}中移除Id为：{uid}的成员时，当前操作用户无该权限!", QssLogType.Error);
                return QssResult.Fail;
            }
            if (user.Id == organize.Admin.Id)
            {
                message = "不能移除组织管理员!";
                return QssResult.Fail;
            }

            try
            {
                organize.Users.Remove(user);
                DbSession.OrganizeDal.Update(organize);
                DbSession.SaveChanges();

                message = "移除成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "移除成员失败!";
                QssLogHelper.Log("移除成员失败", $"从组织：{organize.Name}中移除成员{user.Name}({user.Account})失败！原因：{exception.Message}", QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 更换组织管理员
        /// </summary>
        /// <param name="account">更换到的账号</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult ChangeOrgAdmin(int oid, string account, out string message)
        {
            // 获取要更换到的用户
            if (DbSession.UserDal.QssGetUserByAccount(account, out User user) != QssResult.Success)
            {
                message = "获取该用户失败!";
                return QssResult.Error;
            }

            // 获取该组织
            var organize = DbSession.OrganizeDal.GetEntity(oid);
            if (organize == null)
            {
                message = "获取组织失败!";
                return QssResult.Fail;
            }

            // 判断权限
            if (organize.Admin.Account != User.Identity.Name)
            {
                message = "当前用户无该权限!";
                return QssResult.Fail;
            }
            if (!user.JoinOrganizes.Contains(organize))
            {
                message = "该用户不在该组织，不能变更到该用户!";
                return QssResult.Fail;
            }

            // 变更
            try
            {
                organize.Admin = user;
                DbSession.OrganizeDal.Update(organize);
                DbSession.SaveChanges();

                message = "变更成功!";
                QssLogHelper.Log("管理员变更成功", $"组织：{organize.Name} 的管理员变更到{user.Account}({user.Name})成功!", QssLogType.Info);
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "变更失败!";
                QssLogHelper.Log("管理员变更成功", $"组织：{organize.Name} 的管理员变更到{user.Account}({user.Name})失败! 原因：{exception.Message}", QssLogType.Info, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除组织
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssDelOrganize(int id, out string message)
        {
            var organize = CurrentDal.GetEntity(id);
            if (organize == null)
            {
                message = "获取当前组织失败!";
                return QssResult.Fail;
            }

            try
            {
                organize.DeleteTime = DateTime.Now;
                CurrentDal.Update(organize);
                DbSession.SaveChanges();

                message = "标记删除组织成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "删除组织失败!";
                QssLogHelper.Log("删除组织失败", "删除组织失败，标记组织已过期时保存失败！原因：" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除已过期组织
        /// 系统调用
        /// </summary>
        public void DeleteExpireOrg()
        {
            // 过期组织
            DateTime delTime = DateTime.Parse("1996/09/06");
            var expOrgs = CurrentDal.GetEntities(p => p.DeleteTime != delTime && p.DeleteTime < DateTime.Now);
            var expOrgIds = expOrgs.Select(o => o.Id);
            if (expOrgs.Count() == 0) return;

            // 相关问卷
            var questions = DbSession.QuestionDal.GetEntities(p => p.IsBelongOrganize && expOrgIds.Contains(p.BelongTo));
            DeleteQues(questions);

            // 相关投票
            var votes = DbSession.VoteDal.GetEntities(p => p.IsBelongOrganize && expOrgIds.Contains(p.BelongTo));
            DeleteVote(votes);

            CurrentDal.DeleteRange(expOrgs);
            SubmitDeleteRange("过期组织");
        }

        /// <summary>
        /// 删除相关问卷
        /// 系统调用
        /// </summary>
        /// <param name="questions">问卷列表</param>
        private void DeleteQues(IQueryable<Question> questions)
        {
            if (questions.Count() != 0)
            {
                var quesIds = questions.Select(p => p.Id);
                var quesSubjects = DbSession.QuesSubjectDal.GetEntities(p => quesIds.Contains(p.Question.Id));
                var quesSubIds = quesSubjects.Select(p => p.Id);
                var quesOption = DbSession.QuesOptionDal.GetEntities(p => quesSubIds.Contains(p.QuesSubject.Id));
                var quesWtlogs = DbSession.WtLogDal.GetEntities(p => p.Type == QssWtLogType.Question && quesIds.Contains(p.QuesVoteId));

                DbSession.WtLogDal.DeleteRange(quesWtlogs);
                SubmitDeleteRange("问卷填写记录");
                DbSession.QuesOptionDal.DeleteRange(quesOption);
                SubmitDeleteRange("问卷题目选项");
                DbSession.QuesSubjectDal.DeleteRange(quesSubjects);
                SubmitDeleteRange("问卷题目");
                DbSession.QuestionDal.DeleteRange(questions);
                SubmitDeleteRange("问卷");
            }
        }

        /// <summary>
        /// 删除相关投票
        /// 系统调用
        /// </summary>
        /// <param name="questions">投票列表</param>
        private void DeleteVote(IQueryable<Vote> votes)
        {
            if (votes.Count() != 0)
            {
                var voteIds = votes.Select(p => p.Id);
                var voteOptions = DbSession.VoteOptionDal.GetEntities(p => voteIds.Contains(p.Vote.Id));
                var voteWtlogs = DbSession.WtLogDal.GetEntities(p => p.Type == QssWtLogType.Vote && voteIds.Contains(p.QuesVoteId));

                DbSession.WtLogDal.DeleteRange(voteWtlogs);
                SubmitDeleteRange("投票填写记录");
                DbSession.VoteOptionDal.DeleteRange(voteOptions);
                SubmitDeleteRange("投票选项");
                DbSession.VoteDal.DeleteRange(votes);
                SubmitDeleteRange("投票");
            }
        }

        /// <summary>
        /// 提交批量删除操作
        /// 系统调用
        /// </summary>
        /// <param name="text">提示文本</param>
        private void SubmitDeleteRange(string text)
        {
            try
            {
                DbSession.SaveChanges();
            }
            catch (Exception exception) { QssLogHelper.Log($"批量删除{text}失败", $"在删除过期组织时，批量删除{text}失败!原因：" + exception.Message, QssLogType.Error, exception); }
        }
    }
}