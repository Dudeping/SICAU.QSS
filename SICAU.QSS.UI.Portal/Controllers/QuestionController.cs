using PagedList;
using SICAU.QSS.BLL;
using SICAU.QSS.Common;

using SICAU.QSS.Models;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public class QuestionController : BaseController
    {
        /// <summary>
        /// 问卷服务
        /// </summary>
        private IQuestionService QuestionService { get; set; } = StaticBllFactory.GetQuestionService();
        /// <summary>
        /// 日志服务
        /// </summary>
        private IWtLogService WtLogService { get; set; } = StaticBllFactory.GetWtLogService();
        /// <summary>
        /// 用户服务
        /// </summary>
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();

        /// <summary>
        /// 显示创建问卷页面
        /// </summary>
        /// <returns>创建页面</returns>
        [HttpGet]
        [Authorize]
        public ActionResult Create()
        {
            ViewBag.CreateType = "ques";

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
        /// 创建问卷
        /// </summary>
        /// <param name="Content">问卷数据</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult Create(string content) => QssJsonCommonReturn(QuestionService.QssCreateQues(content, out string message), message, "/Users/QuesList");

        /// <summary>
        /// 修改问卷
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public ActionResult Edit(int id)
        {
            // 可填写组织和客查看结果组织需重新选择
            return View();
        }

        /// <summary>
        /// 修改问卷
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <param name="content">问卷内容</param>
        /// <returns></returns>
        [Authorize]
        public ActionResult Edit(int id, string content)
        {
            // 先删除
            QssResult result = QuestionService.QssDeleteQues(id, out string message);
            if (result != QssResult.Success) return Json(new QssJsonResult() { Message = message, Type = QssJsonResultType.Fail.ToString() });
            // 再创建
            return QssJsonCommonReturn(QuestionService.QssCreateQues(content, out message), "/Users/QuesList");
        }

        /// <summary>
        /// 删除问卷
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        [Authorize]
        public ActionResult Delete(int id)
        {
            QuestionService.QssDeleteQues(id, out string message);
            return Content(QssReturnHepler.QssGetReturnContent(message, "/Users"));
        }

        /// <summary>
        /// 标记问卷正在确认中
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult QuesInConfirm(int id) => QssJsonCommonReturn(QuestionService.QssMarkInConfirm(id, out string message), message);

        /// <summary>
        /// 确认通过
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult ConfirmPass(int id) => QssJsonCommonReturn(QuestionService.QssMarkConfirmPass(id, out string message), message);

        /// <summary>
        /// 确认不通过
        /// </summary>
        /// <param name="id"></param>
        /// <param name="reson"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Admin,SysAdmin")]
        public ActionResult ConfirmNotPass(int id, string reason) => QssJsonCommonReturn(QuestionService.QssMarkConfirmNotPass(id, reason, out string message), message);

        /// <summary>
        /// 标记为正在审核
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditingQues(int id) => QssJsonCommonReturn(QuestionService.QssMarkInAudit(id, out string message), message);

        /// <summary>
        /// 审核通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditPass(int id) => QssJsonCommonReturn(QuestionService.QssMarkAuditPass(id, out string message), message);

        /// <summary>
        /// 审核不通过
        /// </summary>
        /// <param name="id">组织Id</param>
        /// <param name="reason">不通过原因</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize(Roles = "SysAdmin")]
        public ActionResult AuditNotPass(int id, string reason) => QssJsonCommonReturn(QuestionService.QssMarkAuditNotPass(id, reason, out string message), message);

        /// <summary>
        /// 显示填写问卷页面
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        [Authorize]
        public ActionResult WtQuestion(int id)
        {
            // 检查权限
            if (QuestionService.CheckWtAuth(id, out Question ques, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/QuesList"));
            ViewBag.Id = id;
            ViewBag.ShowType = "wtQues";
            return View("Show");
        }

        /// <summary>
        /// 提交问卷
        /// </summary>
        /// <param name="Content">提交数据</param>
        /// <returns>处理结果</returns>
        [HttpPost]
        [Authorize]
        public ActionResult SaveQuestion(string content) => Json(QuestionService.QssSaveQuestion(content, out string message) == QssResult.Success ? new QssJsonResult() { Type =  QssJsonResultType.Success.ToString(), Message = "/Users/QuesList" }: new QssJsonResult() { Type = QssJsonResultType.Fail.ToString(), Message = message });

        /// <summary>
        /// 填写记录页面
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        public ActionResult WtLogDetail(int id)
        {
            // 检查权限
            if (QuestionService.CheckWtLogAuth(id, out string log, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/QuesList"));
            ViewBag.ShowType = "lgQues";
            ViewBag.Id = id;
            return View("Show");
        }

        /// <summary>
        /// 获取填写记录
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns>填写记录数据</returns>
        [HttpPost]
        [Authorize]
        public ActionResult GetWtLog(int id) => Content(QuestionService.QssGetWtLog(id));

        /// <summary>
        /// 获取问卷信息
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns>问卷数据</returns>
        [HttpPost]
        public ActionResult GetQuestion(int id) => Content(QuestionService.QssGetContent(id));

        /// <summary>
        /// 最新问卷调查结果列表页面
        /// </summary>
        /// <param name="page">页码</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        public ActionResult NewQuesList(string strSearch, int page = 1) => View(QuestionService.GetNewQuesVote(strSearch).ToPagedList(page, 20));

        /// <summary>
        /// 问卷结果详情页面
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        public ActionResult ResultDetail(int id)
        {
            // 检查权限
            if (QuestionService.CheckResultAuth(id, out string rel, out string message) != QssResult.Success) return Content(QssReturnHepler.QssGetReturnContent(message, "/Users/QuesList"));
            ViewBag.ShowType = "showQues";
            ViewBag.Id = id;
            return View("Show");
        }

        /// <summary>
        /// 结束问卷
        /// </summary>
        /// <param name="id">问卷Id</param>
        /// <returns></returns>
        public ActionResult EndQues(int id)
        {
            var result = QuestionService.EndQuesVote(id, out string message);
            return Content(result != QssResult.Success ? QssReturnHepler.QssGetReturnContent(message) : QssReturnHepler.QssGetReturnContent(message, "/Users/QuesList"));
        }

        /// <summary>
        /// 获取问卷结果
        /// </summary>
        /// <param name="id">问卷id</param>
        /// <returns>问卷结果数据</returns>
        [HttpPost]
        public ActionResult GetResult(int id) => Content(QuestionService.QssGetResult(id));

        /// <summary>
        /// 检查问卷名 已弃用
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