using PagedList;
using SICAU.QSS.BLLFactory;
using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public class VoteController : BaseController
    {
        /// <summary>
        /// 投票服务
        /// </summary>
        private IVoteService VoteService { get; set; } = StaticBllFactory.GetVoteService();
        /// <summary>
        /// 用户服务
        /// </summary>
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();

        /// <summary>
        /// 创建投票页面
        /// </summary>
        /// <returns>创建投票页面</returns>
        [HttpGet]
        [Authorize]
        public ActionResult Create()
        {
            ViewBag.CreateType = "vote";

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
        /// 创建投票
        /// </summary>
        /// <param name="Content">提交数据</param>
        /// <returns>创建结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult Create(string content)
        {
            return QssJsonCommonReturn(VoteService.QssCreateVote(content, out string message), message, "/Users/VoteList");
        }

        /// <summary>
        /// 修改投票
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult Edit(int id)
        {
            // 可填写组织和客查看结果组织需重新选择
            return View();
        }

        /// <summary>
        /// 修改投票
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <param name="content">投票内容</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public ActionResult Edit(int id, string content)
        {
            // 先删除
            QssResult result = VoteService.QssDeleteVote(id, out string message);
            if (result != QssResult.Success) return Json(new QssJsonResult() { Message = message, Type = QssJsonResultType.Fail.ToString() });
            // 再创建
            return QssJsonCommonReturn(VoteService.QssCreateVote(content, out message), "/Users/VoteList");
        }

        /// <summary>
        /// 删除投票
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        [Authorize]
        public ActionResult Delete(int id)
        {
            VoteService.QssDeleteVote(id, out string message);
            return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/VoteList"));
        }

        /// <summary>
        /// 标记投票正在确认中
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult VoteInConfirm(int id) => QssJsonCommonReturn(VoteService.QssMarkInConfirm(id, out string message), message);

        /// <summary>
        /// 确认通过
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult ConfirmPass(int id) => QssJsonCommonReturn(VoteService.QssMarkConfirmPass(id, out string message), message);

        /// <summary>
        /// 确认不通过
        /// </summary>
        /// <param name="id"></param>
        /// <param name="reson"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult ConfirmNotPass(int id, string reason) => QssJsonCommonReturn(VoteService.QssMarkConfirmNotPass(id, reason, out string message), message);

        /// <summary>
        /// 标记为正在审核
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditingVote(int id) => QssJsonCommonReturn(VoteService.QssMarkInAudit(id, out string message), message);

        /// <summary>
        /// 审核通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditPass(int id) => QssJsonCommonReturn(VoteService.QssMarkAuditPass(id, out string message), message, "/Users/AuditManage");

        /// <summary>
        /// 审核不通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <param name="reason">不通过原因</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditNotPass(int id, string reason) => QssJsonCommonReturn(VoteService.QssMarkAuditNotPass(id, reason, out string message), message, "/Users/AuditManage");

        /// <summary>
        /// 显示投票页面
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult WtVote(int id)
        {
            // 检查权限
            if (VoteService.CheckWtAuth(id, out Vote vote, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/VoteList"));
            ViewBag.Id = id;
            ViewBag.ShowType = "wtVote";
            return View("Show");
        }

        /// <summary>
        /// 获得投票
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult GetVote(int id)
        {
            return Content(VoteService.QssGetContent(id));
        }

        /// <summary>
        /// 提交投票
        /// </summary>
        /// <param name="content">提交数据</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public ActionResult SaveVote(string content)
        {
            return QssJsonCommonReturn(VoteService.QssSaveVote(content, out string message), message, "/Users/QuesList");
        }

        /// <summary>
        /// 获得投票记录
        /// </summary>
        /// <param name="id">投票id</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public ActionResult GetWtLog(int id) => Content(VoteService.QssGetWtLog(id));

        /// <summary>
        /// 投票记录页面
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        public ActionResult WtLogDetail(int id)
        {
            // 检查权限
            if (VoteService.CheckWtLogAuth(id, out string log, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/VoteList"));
            ViewBag.Id = id;
            ViewBag.ShowType = "lgVote";
            return View("Show");
        }

        /// <summary>
        /// 获得投票结果
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetResult(int id) => Content(VoteService.QssGetResult(id));

        /// <summary>
        /// 结束投票
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        public ActionResult EndQues(int id)
        {
            var result = VoteService.EndQuesVote(id, out string message);
            return Content(result != QssResult.Success ? QssReturnHepler.QssGetReturnContent(message) : QssReturnHepler.QssGetReturnContent(message, "/Users/VoteList"));
        }

        /// <summary>
        /// 最新投票结果列表页面
        /// </summary>
        /// <param name="page">页码</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        public ActionResult NewVoteList(string strSearch, int page = 1)
        {
            return View(VoteService.GetNewQuesVote(strSearch).OrderByDescending(p => p.Id).ToPagedList(page, 15));
        }

        /// <summary>
        /// 投票结果详情页面
        /// </summary>
        /// <param name="id">投票Id</param>
        /// <returns></returns>
        public ActionResult ResultDetail(int id)
        {
            // 检查权限
            if (VoteService.CheckResultAuth(id, out string rel, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/VoteList"));
            ViewBag.Id = id;
            ViewBag.ShowType = "showVote";
            return View("Show");
        }

        /// <summary>
        /// 检查投票名 已弃用
        /// </summary>
        /// <param name="title">问卷名</param>
        /// <returns>校验结果</returns>
        [HttpPost]
        public ActionResult CheckTitle(string title)
        {
            return Json(new QssJsonResult { Type = QssJsonResultType.Success.ToString() }, JsonRequestBehavior.AllowGet);
        }
    }
}