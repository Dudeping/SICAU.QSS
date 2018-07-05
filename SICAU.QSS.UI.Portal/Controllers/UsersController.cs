using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SICAU.QSS.Model;
using SICAU.QSS.IBLL;
using SICAU.QSS.BLLFactory;
using SICAU.QSS.UI.Portal.Models;
using SICAU.QSS.UI.Portal.Infrastructure;
using PagedList;
using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;

namespace SICAU.QSS.UI.Portal.Controllers
{
    [Authorize]
    public class UsersController : BaseController
    {
        /// <summary>
        /// 用户服务
        /// </summary>
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();
        /// <summary>
        /// 日志服务
        /// </summary>
        private ILogService LogService { get; set; } = StaticBllFactory.GetLogService();
        /// <summary>
        /// 问卷服务
        /// </summary>
        private IQuestionService QuestionService { get; set; } = StaticBllFactory.GetQuestionService();
        /// <summary>
        /// 组织服务
        /// </summary>
        private IOrganizeService OrganizeService { get; set; } = StaticBllFactory.GetOrganizeService();
        /// <summary>
        /// 站内信服务
        /// </summary>
        private ILetterService LetterService { get; set; } = StaticBllFactory.GetLetterService();
        /// <summary>
        /// 公告服务
        /// </summary>
        private ISysNewsService SysNewsService { get; set; } = StaticBllFactory.GetSysNewsService();
        /// <summary>
        /// 投票服务
        /// </summary>
        private IVoteService VoteService { get; set; } = StaticBllFactory.GetVoteService();

        /// <summary>
        /// 用户首页
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return RedirectToActionPermanent("QuesList");
        }

        /// <summary>
        /// 问卷管理
        /// </summary>
        /// <param name="page">页数</param>
        /// <param name="pageSize">每页显示条数</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        public ActionResult QuesList(string strSearch, string type = "all", int page = 1, int pageSize = 6)
        {
            ViewBag.QType = type;

            // 获取问卷列表类型
            QssGetQuesVoteType _type =
                type == QssGetQuesVoteType.all.ToString() ? QssGetQuesVoteType.all :
                type == QssGetQuesVoteType.audit.ToString() ? QssGetQuesVoteType.audit :
                type == QssGetQuesVoteType.create.ToString() ? QssGetQuesVoteType.create :
                QssGetQuesVoteType.write;

            // 和自己相关的所有问卷：创建、审核、填写、查看
            if (QuestionService.GetList(_type, strSearch, out string message, out IEnumerable<QuesAndVoteModel> model) != Common.QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));

            // 分页返回
            return View(model.OrderByDescending(p => p.Id).ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 投票管理
        /// </summary>
        /// <param name="page">页数</param>
        /// <param name="pageNum">每页显示条数</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        public ActionResult VoteList(string strSearch, string type = "all", int page = 1, int pageSize = 6)
        {
            ViewBag.VType = type;

            // 获取投票列表类型
            QssGetQuesVoteType _type =
                type == QssGetQuesVoteType.all.ToString() ? QssGetQuesVoteType.all :
                type == QssGetQuesVoteType.audit.ToString() ? QssGetQuesVoteType.audit :
                type == QssGetQuesVoteType.create.ToString() ? QssGetQuesVoteType.create :
                QssGetQuesVoteType.write;

            // 和自己相关的所有投票：创建、审核、填写、查看
            if (VoteService.GetList(_type, strSearch, out string message, out IEnumerable<QuesAndVoteModel> model) != Common.QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));

            // 分页返回
            return View(model.OrderByDescending(p => p.Id).ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 个人信息页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Info()
        {
            if (UserService.QssGetUserByAccount(User.Identity.Name, out User user) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent("获取当前用户失败!", "/Account/LogOff"));
            return View(user);
        }

        /// <summary>
        /// 修改个人信息
        /// </summary>
        /// <param name="tel">电话号码</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult InfoEdit(string tel)
        {
            if (UserService.QssGetUserByAccount(User.Identity.Name, out User user) != QssResult.Success) return QssJsonCommonReturn(QssResult.Fail, "获取当前用户失败!");
            user.Tel = tel;
            UserService.Update(user);

            return QssJsonCommonReturn(QssResult.Success, "更新个人信息成功!", "/Users/Info");
        }

        /// <summary>
        /// 组织管理
        /// </summary>
        /// <param name="page">页数</param>
        /// <param name="pageNum">每页显示条数</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        public ActionResult OrganizeList(int page = 1, int pageSize = 15, string strSearch = "", string isCreate = "false")
        {
            ViewBag.IsCreate = isCreate;

            if (OrganizeService.QssGetOrgList(isCreate == "true" ? QssGetOrgType.create : QssGetOrgType.join, out string message, out IQueryable<Organize> model) != QssResult.Success)
                return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));
            return View(model.OrderBy(p => p.Id).ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 管理组织
        /// </summary>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [Authorize(Roles = "Administrator")]
        public ActionResult ManageOrganize(int page = 1, int pageSize = 15)
        {
            return View(OrganizeService.GetEntities(p => p.Type != QssOrganizeType.Class && p.Type != QssOrganizeType.Temp).OrderBy(p => p.Id).ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 成员管理
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns></returns>
        [Authorize(Roles = "Admin, SysAdmin")]
        public ActionResult ManageUser(int id, int page = 1, int pageSize = 50)
        {
            if (OrganizeService.GetOrgUserList(id, out string message, out IEnumerable<ManageUserModel> model, out Organize organize) != QssResult.Success)
                return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));
            ViewBag.CurrentOrg = organize;
            return View(model.ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 移除成员
        /// </summary>
        /// <param name="oid">组织Id</param>
        /// <param name="uid">成员Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "Admin, SysAdmin")]
        public ActionResult RemoveUser(int oid, int uid) => QssJsonCommonReturn(OrganizeService.RemoveUser(oid, uid, out string message), message);

        /// <summary>
        /// 组织管理员更换
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ChangeAdmin(int oid)
        {
            return View();
        }

        /// <summary>
        /// 组织管理员变更
        /// </summary>
        /// <param name="account">变更到的账号</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        public ActionResult ChangeAdmin(int oid, string account)
        {
            // 校验是否绑定邮箱
            var result = UserService.QssCheckHaveEmail(account);
            if (result != QssResult.Success) return QssJsonCommonReturn(result, "该用户未绑定邮箱!");
            // 变更
            return QssJsonCommonReturn(OrganizeService.ChangeOrgAdmin(oid, account, out string message), message, "变更成功!");
        }

        /// <summary>
        /// 审核管理
        /// </summary>
        /// <param name="type">审核类型 audit、confirm</param>
        /// <returns></returns>
        public ActionResult AuditManage(string type = "audit", int page = 1)
        {
            if (type == "audit")
            {
                // 系统管理员审核 组织、问卷、投票
                return View(OrganizeService.QssGetAuditOrgList().Concat(QuestionService.QssGetAuditList()).Concat(VoteService.QssGetAuditList()).OrderBy(p => p.Id).ToPagedList(page, 10));
            }
            else
            {
                // 组织管理员确认 问卷、投票
                var relQues = QuestionService.QssGetConfirmList(out string msgQues, out IQueryable<ConfirmManageModel> questions);
                var relVote = VoteService.QssGetConfirmList(out string msgVote, out IQueryable<ConfirmManageModel> votes);

                return
                    relQues == QssResult.Success && relVote == QssResult.Success ? View("ConfirmManage", questions.Concat(votes).OrderBy(p => p.Id).ToPagedList(page, 10)) :
                    relQues == QssResult.Success && relVote != QssResult.Success ? View("ConfirmManage", questions.OrderBy(p => p.Id).ToPagedList(page, 10)) :
                    relQues != QssResult.Success && relVote == QssResult.Success ? View("ConfirmManage", votes.OrderBy(p => p.Id).ToPagedList(page, 10)) :
                    Content(QssReturnHepler.QssGetReturnContent(msgQues + msgVote, "/Users/AuditManage")) as ActionResult;
            }
        }

        /// <summary>
        /// 站内信
        /// </summary>
        /// <param name="type">站内信类型 Read:已读, UnRead:未读</param>
        /// <returns></returns>
        [Authorize]
        public ActionResult Letter(string type="unRead", int page = 1)
        {
            ViewBag.LType = type;
            var result = LetterService.QssGetLetterList(type == QssGetLetterType.Read.ToString().ToLower() ? QssGetLetterType.Read : QssGetLetterType.UnRead, out string message, out IQueryable<Letter> letters);
            if (result == QssResult.Error) return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));
            if (result == QssResult.Fail) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users"));
            return View(letters.OrderByDescending(p => p.Id).ToPagedList(page, 25));
        }

        /// <summary>
        /// 标记已读
        /// </summary>
        /// <param name="id">消息Id</param>
        /// <returns>处理结果</returns>
        [Authorize]
        public ActionResult TabRead(int id)
        {
            var result = LetterService.QssMarkLetter(QssMarkLetterType.Read, id, out string message);
            if (result == QssResult.Error) return Json(new QssJsonResult() { Type = QssJsonResultType.Danger.ToString(), Message = "/Account/LogOff" });
            return Json(new QssJsonResult() { Type = result == QssResult.Fail ? QssJsonResultType.Fail.ToString() : QssJsonResultType.Success.ToString(), Message = message });
        }

        /// <summary>
        /// 删除消息
        /// </summary>
        /// <param name="id">消息Id</param>
        /// <returns>处理结果</returns>
        [Authorize]
        public ActionResult DeleteLetter(int id) => QssJsonCommonReturn(LetterService.QssMarkLetter(QssMarkLetterType.Delete, id, out string message), message);

        /// <summary>
        /// 公告管理
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Administrator")]
        public ActionResult ManageSysNews(int page = 1) => View(SysNewsService.GetSysNewList().OrderByDescending(p => p.Id).ToPagedList(page, 25));

        /// <summary>
        /// 添加公告
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public ActionResult AddSysNew(CreateSysNewModel model)
        {
            if (ModelState.IsValid)
            {
                if (SysNewsService.CreateSysNews(model.Title, model.Content, out string message) == QssResult.Error) return Content(QssReturnHepler.QssGetReturnContent(message, "/Account/LogOff"));
                else return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/ManageSysNews"));
            }

            string errmsg = "";
            foreach (var item in ModelState.Values)
            {
                foreach (var _item in item.Errors)
                {
                    errmsg += _item.ErrorMessage;
                }
            }
            return Content(QssReturnHepler.QssGetReturnContent(errmsg, "/Users/ManageSysNews"));
        }

        /// <summary>
        /// 删除公告
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Administrator")]
        public ActionResult DelSysNew(int id)
        {
            SysNewsService.Delete(id);
            return RedirectToAction("ManageSysNews");
        }

        /// <summary>
        /// 管理系统管理员
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Administrator")]
        public ActionResult ManageSysAdmin()
        {
            return View(UserService.GetSysAdminList());
        }

        /// <summary>
        /// 添加系统管理员
        /// </summary>
        /// <param name="account">用户账号</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public ActionResult AddSysAdmin(string account)
        {
            if (string.IsNullOrWhiteSpace(account)) return Content(QssReturnHepler.QssGetReturnContent("账号不能为空!", "/Users/ManageSysAdmin"));
            var result = UserService.QssAddSysAdmin(account, out string message);
            return Content(QssReturnHepler.QssGetReturnContent(message, result == QssResult.Error ? "/Account/LogOff" : "/Users/ManageSysAdmin"));
        }

        /// <summary>
        /// 删除系统管理员
        /// </summary>
        /// <param name="id">用户Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public ActionResult DeleteSysAdmin(int id) => QssJsonCommonReturn(UserService.QssDelSysAdmin(id, out string message), message, "/Users/ManageSysNews");

        /// <summary>
        /// 显示日志
        /// </summary>
        /// <param name="page">页数</param>
        /// <param name="type">类型 LogType</param>
        /// <returns></returns>
        [Authorize(Roles ="Administrator")]
        public ActionResult Logs(int page = 1, int pageSize = 100, string type = "all")
        {
            return View(LogService.GetLogList(type).OrderByDescending(p => p.Id).ToPagedList(page, pageSize));
        }
    }
}
