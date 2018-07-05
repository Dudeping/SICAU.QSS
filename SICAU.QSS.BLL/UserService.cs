using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.ModelBinding;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// UserBll
    /// 实现IUserBll接口
    /// </summary>
    public class UserService : BaseService<User>, IUserService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.UserDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public UserService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 根据邮箱获取账号
        /// </summary>
        /// <param name="email">邮箱</param>
        /// <param name="account">返回的账号</param>
        /// <returns></returns>
        public QssResult QssGetAccountByEmail(string email, out string account)
        {
            QssResult result = QssGetUserByEmail(email, out User user);
            account = result == QssResult.Success ? user.Account : "";
            return result;
        }

        /// <summary>
        /// 根据教务网账号获取姓名
        /// </summary>
        /// <param name="account"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public QssResult QssGetNameByAccount(string account, out string name)
        {
            QssResult result = QssGetUserByAccount(account, out User user);
            name = result == QssResult.Success ? user.Name : "";
            return result;
        }

        /// <summary>
        /// 获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        public QssResult QssGetUserByEmail(string email, out User user) => DbSession.UserDal.QssGetUserByEmail(email, out user);

        /// <summary>
        /// 根据账号获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        public QssResult QssGetUserByAccount(string account, out User user) => DbSession.UserDal.QssGetUserByAccount(account, out user);

        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="model">用户资料</param>
        /// <returns></returns>
        public QssResult QssUpdateUserInfo(QssSicauLoginHelper login, UserType type, out User user)
        {
            // 判断学生还是教师
            if (type == UserType.S)
            {
                string[] _stuInfo = login.GetStuInfo();
                if (_stuInfo.Length == 0)
                {
                    QssLogHelper.Log("获取学生信息失败", "学生登录时，通过模拟登录教务网获取学生信息，但是并没有获取成功!", QssLogType.Info);
                    user = null;
                    return QssResult.Fail;
                }
                var stuInfo = new UserInfoHandle(_stuInfo);
                return QssUpdateUserInfo(stuInfo, out user);
            }
            else
            {
                string[] _thInfo = login.GetThInfo();
                if (_thInfo.Length == 0)
                {
                    QssLogHelper.Log("获取教师信息失败", "教师登录时，通过模拟登录教务网获取教师信息，但是并没有获取成功!", QssLogType.Info);
                    user = null;
                    return QssResult.Fail;
                }
                var thInfo = new UserInfoHandle(_thInfo);
                return QssUpdateUserInfo(thInfo, out user);
            }
        }

        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="stuInfo">从教务处获取的,经过封装的用户信息</param>
        /// <param name="user">更新成功后的该学生信息</param>
        /// <returns></returns>
        public QssResult QssUpdateUserInfo(UserInfoHandle userInfo, out User user)
        {
            QssResult result = QssGetUserByAccount(userInfo.Account, out user);
            if (result == QssResult.Error)
            {
                // 获取到多个用户
                user = null;
                return QssResult.Fail;
            }
            bool isFirst = false;
            if (result == QssResult.Fail)
            {
                // 第一次登录
                // 获取角色
                result = new RoleService().QssGetRoleByName(QssRoleType.User.ToString(), out Role role);
                if (result != QssResult.Success)
                {
                    user = null;
                    return QssResult.Fail;
                }
                user = new User()
                {
                    Account = userInfo.Account,
                    Role = role
                };
                isFirst = true;
            }

            // 更新信息
            if (userInfo.UserType == UserType.S.ToString())
            {
                // 学生
                user.Type = UserType.S.ToString();
                user.Name = userInfo.Name;
                user.Campus = userInfo.Campus;
                user.College = userInfo.College;
                user.Grade = Convert.ToInt32(userInfo.Grade);
                user.LoSch = Convert.ToInt32(userInfo.LoSch);
                user.Class = userInfo.NewClass; //永远获取新班级
                user.Major = userInfo.NewMajor; //永远获取新专业
            }
            else
            {
                // 教师
                user.Type = UserType.T.ToString();
                user.Name = userInfo.Name;
                user.Campus = userInfo.Campus;
                user.College = userInfo.College;
            }

            try
            {
                // 写入数据库
                if (isFirst)
                    CurrentDal.Add(user);
                else
                    CurrentDal.Update(user);
                DbSession.SaveChanges();
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                // 写入失败
                QssLogHelper.Log("写入用户信息失败", "在写入用户: " + user.Account + " 的用户信息时发生错误! 原因：" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 校验是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <returns></returns>
        public QssResult QssCheckHaveEmail() => DbSession.UserDal.QssCheckHaveEmail();

        /// <summary>
        /// 校验是否绑定邮箱,在创建组织、问卷、投票时调用
        /// Success:已绑定, Fail:未绑定, Error:跳转
        /// </summary>
        /// <returns></returns>
        public QssResult QssCheckHaveEmail(string account) => DbSession.UserDal.QssCheckHaveEmail(account);

        /// <summary>
        /// 获取系统管理员联系方式
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SysAdminContact> GetSysAdmin()
        {
            return CurrentDal.GetEntities(p => p.Role.Name == QssRoleType.SysAdmin.ToString()).Select(p => new SysAdminContact { Name = p.Name, Tel = p.Tel }).ToList();
        }

        /// <summary>
        /// 获取系统管理员
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SysAdminModel> GetSysAdminList()
        {
            return CurrentDal.GetEntities(p => p.Role.Name == QssRoleType.SysAdmin.ToString()).Select(p => new SysAdminModel { Id = p.Id, Name = p.Name, Account = p.Account, Email = p.Email, Tel = p.Tel }).ToList();
        }

        /// <summary>
        /// 初始化系统
        /// </summary>
        /// <returns>结果</returns>
        public string DefaultSystem()
        {
            if (DbSession.RoleDal.GetEntities(p => true).Any())
            {
                // 已经初始化
                return "初始化系统成功!";
            }

            // 初始化角色
            var list = new List<Role>
            {
                new Role {Name = QssRoleType.Administrator.ToString()},
                new Role {Name = QssRoleType.SysAdmin.ToString()},
                new Role {Name = QssRoleType.Admin.ToString()},
                new Role {Name = QssRoleType.User.ToString()}
            };
            DbSession.RoleDal.AddRange(list);

            // 初始化网站配置
            string email = "1617954225@qq.com";
            var webConfig = new WebConfig()
            {
                // 初始化超级管理员
                Account = QssEnvironment.AdministratorAccount,
                Email = email,
                Password = QssMD5Helper.QssGetMd5(QssEnvironment.AdministratorAccount, "123456"),
                Tel = "18227592876"
            };
            DbSession.WebConfigDal.Add(webConfig);

            try
            {
                // 保存配置
                DbSession.SaveChanges();
                // 成功
                QssLogHelper.Log("初始化系统成功", "初始化系统成功!", QssLogType.Info);
                return $"初始化系统成功!<br />超级管理员账号：{QssEnvironment.AdministratorAccount}<br />密码：123456 <br/>邮箱：{email}<br />电话：18227592876<br/>请登录之后尽快修改密码、邮箱和电话.";
            }
            catch (Exception ex)
            {
                // 保存失败
                QssLogHelper.Log("初始化系统失败", "初始化系统失败,失败原因: " + ex.Message, QssLogType.Fatal);
                return "初始化系统失败,失败原因: " + ex.Message;
            }
        }

        /// <summary>
        /// 激活邮箱
        /// </summary>
        /// <param name="jumpUrl"></param>
        /// <returns></returns>
        public string ActivateEmail(string code, out string jumpUrl)
        {
            jumpUrl = "/Account/RegisterEmail";
            // 激活之后
            var user = GetEntities(p => p.ACode == code);
            if (!user.Any())
            {
                jumpUrl = "/Users";
                return "激活链接不存在!你可能已经激活过了.";
            }
            if (user.Count() > 1)
            {
                try
                {
                    foreach (var item in user)
                    {
                        item.Email = "";
                        item.ACode = "";
                        // 清除错误
                        CurrentDal.Update(item);
                        DbSession.SaveChanges();
                    }

                    // 记录清除结果
                    QssLogHelper.Log("激活码重复", "系统出现严重错误!激活码重复,但是系统已清除所有重复的激活码!", QssLogType.Error);
                    return "系统出错！请重新绑定邮箱.";
                }
                catch (Exception exception)
                {
                    // 记录错误
                    QssLogHelper.Log("删除重复激活码失败", "系统出现严重错误!激活链接重复,但是系统在尝试清除所有重复的激活链接时出现错误!错误原因" + exception.Message, QssLogType.Error, exception);
                    return "系统出错！请重新绑定邮箱.";
                }
            }

            var _user = user.FirstOrDefault();
            if (_user.CodeFailTime < DateTime.Now)
            {
                // 链接已过期
                try
                {
                    // 清除邮箱和激活码
                    _user.Email = "";
                    _user.ACode = "";
                    // 保存
                    CurrentDal.Update(_user);
                    DbSession.SaveChanges();
                    return "链接已过期！请重新绑定邮箱.";
                }
                catch (Exception exception)
                {
                    QssLogHelper.Log("清理邮箱失败", "系统保存清理邮箱: " + _user.Email + " 和过期激活码: " + _user.ACode + " 的结果失败!失败原因:" + exception.Message, QssLogType.Error, exception);
                    return "系统出错！请重新绑定邮箱.";
                }
            }

            try
            {
                // 清除激活Code
                _user.ACode = "";
                CurrentDal.Update(_user);
                DbSession.SaveChanges();

                jumpUrl = "/Users";
                return "邮箱绑定成功.";
            }
            catch (Exception exception)
            {
                // 保存失败
                QssLogHelper.Log("清除激活Code失败", $"系统处理激活请求时保存清理激活码: { _user.ACode} 的结果失败!失败原因:{ exception.Message}", QssLogType.Error, exception);
                return "系统出错！请重新绑定邮箱.";
            }
        }

        /// <summary>
        /// 注册邮箱
        /// </summary>
        /// <param name="toEmail">接收者邮件</param>
        /// <param name="activateUrl">激活邮件地址</param>
        /// <param name="_result">处理结果</param>
        /// <returns></returns>
        public QssResult QssRegisterEmail(string toEmail, string activateUrl, string code, out string _result)
        {
            var result = QssGetUserByAccount(HttpContext.Current.User.Identity.Name, out User user);
            if (result != QssResult.Success)
            {
                _result = "出现错误!请重试,多次出现该错误请联系管理员.";
                return QssResult.Fail;
            }
            string body = $"请点击<a href='{activateUrl}'> 此处 </a>来激活你的邮箱,该链接30分钟内有效. 若是链接不能跳转, 请将以下链接复制到浏览器地址栏进行跳转：<br />{activateUrl}";
            if (QssEmailHelper.SendMail(toEmail, "四川农业大学问卷调查与投票系统激活邮件", user.Name, body))
            {
                try
                {
                    // 保存邮箱和激活码
                    user.Email = toEmail;
                    user.ACode = code;
                    user.CodeFailTime = DateTime.Now.AddMinutes(30);
                    Update(user);
                    // 提示并跳转
                    _result = "激活邮件已发送,请查收邮件进行邮箱确认!链接30分钟内有效.";
                    return QssResult.Success;
                }
                catch (Exception exception)
                {
                    // 保存失败
                    QssLogHelper.Log("保存邮箱失败", $"保存用户: {user.Name}({user.Account}) 的邮箱: {toEmail} 失败!失败原因:{exception.Message}", QssLogType.Error, exception);
                    _result = "保存邮箱失败!请重试.";
                    return QssResult.Fail;
                }
            }
            _result = "发送激活邮件失败!请重试.";
            return QssResult.Fail;
        }

        /// <summary>
        /// 添加系统管理员
        /// </summary>
        /// <param name="account">管理员账号</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssAddSysAdmin(string account, out string message)
        {
            // 检查邮箱和电话
            var result = DbSession.UserDal.QssGetUserByAccount(account, out User user);
            if (result != QssResult.Success || (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Tel) || user.ACode != ""))
            {
                message =
                    result != QssResult.Success ? "获取该用户失败!" :
                    string.IsNullOrWhiteSpace(user.Email) ? "该用户未绑定邮箱！" :
                    string.IsNullOrWhiteSpace(user.Tel) ? "该用户未填写电话！" :
                    "该用户未激活邮箱!";
                return QssResult.Fail;
            }

            var roles = DbSession.RoleDal.GetEntities(p => p.Name == QssRoleType.SysAdmin.ToString());
            if (!roles.Any())
            {
                message = "获取角色失败!";
                QssLogHelper.Log("获取角色失败", "在添加系统管理员时，获取系统管理员角色失败!", QssLogType.Error);
                return QssResult.Fail;
            }
            if (roles.Count() > 1)
            {
                message = "获取角色失败!";
                QssLogHelper.Log("获取角色错误", "在添加系统管理员时，获取到多个系统管理员角色!", QssLogType.Error);
                return QssResult.Fail;
            }

            // 添加
            try
            {
                user.Role = roles.FirstOrDefault();
                DbSession.UserDal.Update(user);
                DbSession.SaveChanges();

                message = "添加成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "添加失败!" + exception.Message;
                QssLogHelper.Log("添加系统管理员失败", "添加系统管理员，在保存更改用户角色时出错！原因：" + exception.Message, QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除系统管理员
        /// </summary>
        /// <param name="uid">管理员Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssDelSysAdmin(int uid, out string message)
        {
            var user = CurrentDal.GetEntity(uid);
            if (user == null)
            {
                message = "获取该用户失败!";
                return QssResult.Fail;
            }

            var isOrgAdmin = user.JoinOrganizes.Where(p => p.Admin.Id == user.Id).Any();
            var roleName = (isOrgAdmin ? QssRoleType.Admin.ToString() : QssRoleType.User.ToString());

            var roles = DbSession.RoleDal.GetEntities(p => p.Name == roleName);
            if (!roles.Any())
            {
                message = "获取角色失败!";
                QssLogHelper.Log("获取角色失败", $"在添加系统管理员时，获取{(isOrgAdmin ? "组织管理员" : "普通用户")}角色失败!", QssLogType.Error);
                return QssResult.Fail;
            }
            if (roles.Count() > 1)
            {
                message = "获取角色失败!";
                QssLogHelper.Log("获取角色错误", $"在添加系统管理员时，获取到多个{(isOrgAdmin ? "组织管理员" : "普通用户")}角色!", QssLogType.Error);
                return QssResult.Fail;
            }

            try
            {
                user.Role = roles.FirstOrDefault();
                DbSession.UserDal.Update(user);
                DbSession.SaveChanges();

                message = "删除成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("删除系统管理员失败", "在保存用户角色变更时失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "删除失败!";
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 删除过期用户 在定时任务中调用
        /// </summary>
        public void DeleteExpireUser()
        {
            // 过期用户
            var expUsers = CurrentDal.GetEntities(p => p.Grade + p.LoSch < DateTime.Now.Year);
            if (expUsers.Count() == 0) return;

            // 相关填写记录
            var userIds = expUsers.Select(x => x.Id);
            var wtLogs = DbSession.WtLogDal.GetEntities(p => userIds.Contains(p.User.Id));

            try
            {
                DbSession.WtLogDal.DeleteRange(wtLogs);
                DbSession.SaveChanges();
            }
            catch (Exception exception) { QssLogHelper.Log("批量删除填写记录失败", "在批量删除过期用户时，批量删除填写记录失败! 原因：" + exception.Message, QssLogType.Error, exception); }

            try
            {
                CurrentDal.DeleteRange(expUsers);
                DbSession.SaveChanges();
            }
            catch (Exception exception) { QssLogHelper.Log("批量删除过期用户失败", "在批量删除过期用户时，批量删除用户失败! 原因：" + exception.Message, QssLogType.Error, exception); }
        }
    }
}
