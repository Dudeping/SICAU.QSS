using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SICAU.QSS.BLL;
using SICAU.QSS.Common;
using SICAU.QSS.Models;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public class AccountController : Controller
    {
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();
        private IWebConfigService WebConfigService { get; set; } = StaticBllFactory.GetWebConfigService();
        private IOrganizeService OrganizeService { get; set; } = StaticBllFactory.GetOrganizeService();

        /// <summary>
        /// 登录页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        /// <summary>
        /// 登录处理
        /// </summary>
        /// <param name="model">登录数据</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model, string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            if (ModelState.IsValid)
            {
                // 若是超级管理员
                // 因为超级管理员的账号不是教务网账号,是单独设置的,所以需要单独处理
                if (model.Account == QssEnvironment.AdministratorAccount)
                {
                    QssResult result = AdministratorLogin(model.Password, out string _result);
                    if (result != QssResult.Success)
                    {
                        ModelState.AddModelError("", _result);
                        return View();
                    }
                    return Redirect(_result);
                }

                // 模拟登陆确认用户合法
                var login = new QssSicauLoginHelper();
                var userType = model.Account.Length >= 8 ? UserType.S : UserType.T;
                try
                {
                    if (login.Login(model.Account, model.Password, userType))
                    {
                        // 账号密码正确
                        // 开始更新用户信息
                        var result = UserService.QssUpdateUserInfo(login, userType, out User user);
                        if (result != QssResult.Success)
                        {
                            QssLogHelper.Log("更新用户信息失败", "用户登录时，更新用户信息失败!用户：" + model.Account, QssLogType.Error, $"{model.Account}({user.Name})");
                            ModelState.AddModelError("", "更新用户信息失败！请重试.");
                            return View(model);
                        }

                        // 更新用户信息成功
                        // 开始处理登录请求
                        LoginHandle(user.Account, user.Role.Name + "|" + user.Name + "|" + user.Id);
                        QssLogHelper.Log("登录成功", "登录成功!", QssLogType.Info, $"{model.Account}({user.Name})");
                        // 跳转到AutoDealOrg进行自动加入或退出组织处理
                        return RedirectToAction("AutoDealOrg", "Account", new { returnUrl = returnUrl });
                    }
                }
                catch (Exception exception)
                {
                    ModelState.AddModelError("", "登录教务网失败!" + exception.Message);
                    QssLogHelper.Log("更新用户信息失败", "用户登录教务网失败!用户：" + model.Account, QssLogType.Error, exception);
                    return View(model);
                }

                // 账号密码错误
                ModelState.AddModelError("", "登录失败,账号密码错误！或是教务网未评教，请评教后请重试.");
                return View(model);
            }
            return View(model);
        }

        /// <summary>
        /// 处理登录
        /// </summary>
        /// <param name="account">账号</param>
        /// <param name="userData">用户数据</param>
        private void LoginHandle(string account, string userData)
        {
            FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket(
                1,
                account,
                DateTime.Now,
                DateTime.Now.AddDays(30),
                true,
                userData
            );
            string encryptedTicket = FormsAuthentication.Encrypt(authTicket);
            HttpCookie authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket)
            {
                Expires = DateTime.Now.AddDays(30)
            };
            System.Web.HttpContext.Current.Response.Cookies.Add(authCookie);
        }

        /// <summary>
        /// 超级管理员登录
        /// </summary>
        /// <param name="account"></param>
        /// <param name="passWord"></param>
        /// <param name="_result"></param>
        /// <returns></returns>
        private QssResult AdministratorLogin(string password, out string _result)
        {
            var result = WebConfigService.GetAdministrator(out AdministratorModel admin);

            if (result == QssResult.Fail)
            {
                // 账号不存在
                _result = "账号或密码错误!";
                return QssResult.Fail;
            }
            if (result == QssResult.Error)
            {
                _result = "系统出现严重错误,请查看系统日志记录!";
                return QssResult.Error;
            }

            // 正确获取到一个账号且密码正确
            if (admin.Password == QssMD5Helper.QssGetMd5(admin.Account, password))
            {
                // 处理登录请求
                LoginHandle(QssEnvironment.AdministratorAccount, QssRoleType.Administrator.ToString());

                QssLogHelper.Log("登录成功", "管理员登录成功!", QssLogType.Info);
                // 跳转到管理员页面
                _result = "/Users/ManageSysNews";
                return QssResult.Success;
            }

            // 密码错误
            QssLogHelper.Log("管理员密码错误", "用户以管理员的方式登录,账号正确,但是密码错误! 错误密码为:" + password, QssLogType.Warn);
            _result = "账号或密码错误!";
            return QssResult.Fail;
        }

        /// <summary>
        /// 填写邮箱页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult RegisterEmail()
        {
            return View();
        }

        /// <summary>
        /// 提交邮箱
        /// </summary>
        /// <param name="model">提交数据</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult RegisterEmail(RegisterEmailModel model)
        {
            if (ModelState.IsValid)
            {
                string code = Guid.NewGuid().ToString().Replace("-", "");
                string url = new UriBuilder(Request.Url)
                {
                    Path = Url.Action("ActivateEmail", "Account", new { id = code }),
                    Query = ""
                }.ToString();
                QssResult result = UserService.QssRegisterEmail(model.Email, url, code, out string _result);
                if (result == QssResult.Success)
                {
                    return Content(QssReturnHepler.QssGetReturnContent(_result, "/Users"));
                }

                ModelState.AddModelError("", _result);
                return View(model);
            }
            return View(model);
        }

        /// <summary>
        /// 校验邮箱
        /// </summary>
        /// <param name="email">要校验的邮箱</param>
        /// <returns>校验结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult CheckEmail(string email) => Json(UserService.QssGetUserByEmail(email, out User user) == QssResult.Fail);

        /// <summary>
        /// 激活邮箱
        /// </summary>
        /// <param name="id">激活code</param>
        /// <returns></returns>
        public ActionResult ActivateEmail(string id)
        {
            string result = UserService.ActivateEmail(id, out string jumpUrl);
            return Content(QssReturnHepler.QssGetReturnContent(result, jumpUrl));
        }

        /// <summary>
        /// 自动退出或加入组织提示页面
        /// </summary>
        /// <returns></returns>
        [Authorize]
        public ActionResult AutoDealOrg(string returnUrl)
        {
            // 退出与自己身份不符合的官方组织(校区、学院、专业、班级)
            var users = UserService.GetEntities(p => p.Account == User.Identity.Name, "JoinOrganizes");
            if (users.Count() != 1)
            {
                // 没有获取到用户
                return RedirectToAction("LogOff");
            }

            // 此方法返回值永远为 成功
            OrganizeService.QssAutoDealOrg(users.FirstOrDefault());
            return !string.IsNullOrWhiteSpace(returnUrl) && Url.IsLocalUrl(returnUrl) ? Redirect(returnUrl) : Redirect("/Users");
        }

        /// <summary>
        /// 注销登录
        /// </summary>
        /// <returns></returns>
        //[HttpPost]
        //[Authorize]
        //[ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
            return Redirect("/");
        }

        /// <summary>
        /// 更改密码
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public ActionResult ChangePassword()
        {
            return View();
        }

        /// <summary>
        /// 更改密码
        /// </summary>
        /// <param name="model">提交数据</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Administrator")]
        public ActionResult ChangePassword(ChangePasswordModel model)
        {
            if (!ModelState.IsValid) return View();

            QssResult result = WebConfigService.ChangePassword(model.OldPassword, model.Password, out string _result);

            switch (result)
            {
                case QssResult.Success:
                    return Content(QssReturnHepler.QssGetReturnContent(_result, "/Account/ChangePassword"));
                case QssResult.Error:
                    return Content(QssReturnHepler.QssGetReturnContent(_result, "/Account/LogOff"));
                case QssResult.Fail:
                default:
                    ModelState.AddModelError("", _result);
                    return View(model);
            }
        }

        /// <summary>
        /// 根据Id获取姓名
        /// </summary>
        /// <param name="id">用户Id</param>
        /// <returns>查找结果</returns>
        [HttpPost]
        public ActionResult GetNameById(int id)
        {
            // 获取用户
            var user = UserService.GetEntity(id);
            if (user == null)
            {
                // 获取失败
                QssLogHelper.Log("获取用户失败", "在根据传过来的Id获取用户时失败!用户Id: " + id, QssLogType.Error);
            }
            // 返回获取到的姓名
            return Json(new QssJsonResult { Message = user.Name, Type = QssJsonResultType.Success.ToString() });
        }

        /// <summary>
        /// 根据账号获取用户姓名
        /// </summary>
        /// <param name="account">用户账号</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetNameByAccount(string account)
        {
            // 获取用户
            switch (UserService.QssGetNameByAccount(account, out string userName))
            {
                case QssResult.Fail:
                    // 获取失败
                    QssLogHelper.Log("获取用户失败", "在根据传过来的账号获取用户时失败!用户Account: " + account, QssLogType.Error);
                    return Json(new QssJsonResult { Message = "没有该用户", Type = QssJsonResultType.Fail.ToString() });
                case QssResult.Error:
                    // 多条数据
                    return Json(new QssJsonResult { Message = "系统出现严重错误!同一个学号查询到多个数据.", Type = QssJsonResultType.Fail.ToString() });
                case QssResult.Success:
                default:
                    // 返回获取到的姓名
                    return Json(new QssJsonResult { Message = userName, Type = QssJsonResultType.Success.ToString() });
            }
        }
    }
}