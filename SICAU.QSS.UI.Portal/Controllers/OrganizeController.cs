using SICAU.QSS.BLLFactory;
using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using SICAU.QSS.UI.Portal.Infrastructure;
using SICAU.QSS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public class OrganizeController : BaseController
    {
        /// <summary>
        /// 用户服务
        /// </summary>
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();
        /// <summary>
        /// 组织服务
        /// </summary>
        private IOrganizeService OrganizeService { get; set; } = StaticBllFactory.GetOrganizeService();

        /// <summary>
        /// 创建组织
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult Create()
        {
            var result = UserService.QssCheckHaveEmail();
            if (result == QssResult.Error)
            {
                return RedirectToAction("LogOff", "Account");
            }
            if (result == QssResult.Fail)
            {
                return Content(QssReturnHepler.QssGetReturnContent("请先绑定邮箱！", Url.Action("RegisterEmail", "Account")));
            }
            return View();
        }

        /// <summary>
        /// 创建组织
        /// </summary>
        /// <param name="content"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public ActionResult Create(CreateOrgModel model)
        {
            // 组织类型
            QssOrganizeType type =
                model.OrgType == QssOrganizeType.Association.ToString() ? QssOrganizeType.Association :
                model.OrgType == QssOrganizeType.Campus.ToString() ? QssOrganizeType.Campus :
                model.OrgType == QssOrganizeType.Class.ToString() ? QssOrganizeType.Class :
                model.OrgType == QssOrganizeType.College.ToString() ? QssOrganizeType.College :
                model.OrgType == QssOrganizeType.Department.ToString() ? QssOrganizeType.Department :
                model.OrgType == QssOrganizeType.Major.ToString() ? QssOrganizeType.Major :
                model.OrgType == QssOrganizeType.School.ToString() ? QssOrganizeType.School :
                QssOrganizeType.Temp;

            if (ModelState.IsValid)
            {
                QssResult result = OrganizeService.QssCreateOrganize(type, model.OrgName, model.Password, model.ComPassword, out string message);
                switch (result)
                {
                    case QssResult.Success:
                        return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/OrganizeList"));
                    case QssResult.Fail:
                        return Content(QssReturnHepler.QssGetReturnContent(message, "/Organize/Create"));
                    case QssResult.Error:
                    default:
                        return RedirectToAction("LogOff", "Account");
                }
            }

            string errmsg = "";
            foreach (var item in ModelState.Values)
            {
                foreach (var _item in item.Errors)
                {
                    errmsg += _item.ErrorMessage;
                }
            }
            return Content(QssReturnHepler.QssGetReturnContent(errmsg, "/Organize/Create"));
        }

        /// <summary>
        /// 修改组织
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult Edit(int id)
        {
            return View(OrganizeService.GetEntity(id));
        }

        /// <summary>
        /// 修改组织
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public ActionResult Edit(int id, string orgName) => QssContentCommonReturn(OrganizeService.QssEditOrganize(id, orgName, out string message), message, "/Organize/Edit/" + id, "/Users");

        /// <summary>
        /// 获取审核组织内容
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns></returns>
        [Authorize(Roles = "SysAdmin")]
        public ActionResult GetAuditOrganize(int id)
        {
            var org = OrganizeService.GetEntity(id);
            return org == null ? Json(new object()) : Json(new GetAuditOrgModel { Id = org.Id, Name = org.Name, Type = org.Type.ToString(), Creator = org.Admin.Name });
        }

        /// <summary>
        /// 标记为正在审核
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditingOrganize(int id) => QssJsonCommonReturn(OrganizeService.QssMarkInAudit(id, out string message), message);

        /// <summary>
        /// 审核通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditPass(int id) => QssJsonCommonReturn(OrganizeService.QssMarkAuditPass(id, out string message), message);

        /// <summary>
        /// 审核不通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <param name="reason">不通过原因</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditNotPass(int id, string reason) => QssJsonCommonReturn(OrganizeService.QssMarkAuditNotPass(id, reason, out string message), message);

        /// <summary>
        /// 获取自己所加入的组织
        /// </summary>
        /// <returns>自己加入的组织</returns>
        [HttpPost]
        [Authorize]
        public ActionResult GetJoinOrganize() => UserService.QssGetUserByAccount(User.Identity.Name, out User user) == QssResult.Success ? Json(user.JoinOrganizes.Select(p => new { p.Id, p.Name, IsTemp = p.Type == QssOrganizeType.Temp }).ToArray()) : Json(new string[] { });

        /// <summary>
        /// 查询组织
        /// </summary>
        /// <param name="type">要查找的类型</param>
        /// <returns>按类型搜索到的组织</returns>
        [HttpPost]
        [Authorize]
        public ActionResult GetOrganize(string type) => Json(OrganizeService.GetEntities(p => p.Type.ToString() == type).Select(p => new { p.Id, p.Name }).ToArray());

        /// <summary>
        /// 根据Id获取组织名
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>查找结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult GetName(int id)
        {
            // 查找组织
            var org = OrganizeService.GetEntity(id);
            // 返回组织
            return org == null ? Json(new QssJsonResult { Message = "获取该组织失败!", Type = QssJsonResultType.Fail.ToString() }) : Json(new QssJsonResult { Message = org.Name, Type = QssJsonResultType.Success.ToString() });
        }

        /// <summary>
        /// 搜索组织
        /// </summary>
        /// <param name="organize">搜索内容</param>
        /// <returns>组织数据</returns>
        [HttpPost]
        [Authorize]
        public ActionResult SearchOrganize(string organize) => View(OrganizeService.GetEntities(p => (p.Name.Contains(organize) || organize.Contains(p.Name)) && p.State == QssOrganizeState.Pass && (p.Type == QssOrganizeType.Association || p.Type == QssOrganizeType.Department || p.Type == QssOrganizeType.Temp)).Take(10).Select(p => new JoinOrgModel { Id = p.Id, Name = p.Name, Type = p.Type, DeleteTime = p.DeleteTime }).ToList());

        /// <summary>
        /// 加入组织
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult JoinOrganize(int id) => QssJsonCommonReturn(OrganizeService.QssJoinOrganize(id, out string message), message, "/Users/OrganizeList");

        /// <summary>
        /// 退出组织
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult QuitOrganize(int id) => QssJsonCommonReturn(OrganizeService.QssQuitOrganize(id, out string message), message);

        /// <summary>
        /// 删除组织
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns></returns>
        [Authorize(Roles ="Administrator")]
        public ActionResult DeleteOrganize(int id) => QssJsonCommonReturn(OrganizeService.QssDelOrganize(id, out string message), message);
    }
}