using Newtonsoft.Json;
using PagedList;
using SICAU.QSS.BLLFactory;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// 角色服务
        /// </summary>
        private IRoleService RoleService { get; set; } = StaticBllFactory.GetRoleService();
        /// <summary>
        /// 公告服务
        /// </summary>
        private ISysNewsService SysNewsService { get; set; } = StaticBllFactory.GetSysNewsService();
        /// <summary>
        /// 用户服务
        /// </summary>
        private IUserService UserService { get; set; } = StaticBllFactory.GetUserService();
        /// <summary>
        /// 问卷服务
        /// </summary>
        private IQuestionService QuestionService { get; set; } = StaticBllFactory.GetQuestionService();
        /// <summary>
        /// 投票服务
        /// </summary>
        private IVoteService VoteService { get; set; } = StaticBllFactory.GetVoteService();

        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            string url = HttpRuntime.AppDomainAppPath.ToString();
            // 检测是否初始化系统
            if (!RoleService.GetEntities(p => true).Any())
            {
                return Content("尚未初始化系统, 请访问 /Home/DefaultSystem 初始化系统.");
            }
            return View();
        }

        /// <summary>
        /// 获取最新公告信息
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetSysNews() => Content(JsonConvert.SerializeObject(SysNewsService.GetNewSysNews().ToArray()));

        /// <summary>
        /// 获取系统管理员联系方式
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetSysAdmin()
        {
            return Json(UserService.GetSysAdmin().ToArray());
        }

        /// <summary>
        /// 获取最新问卷
        /// </summary>
        /// <returns>最新问卷数据</returns>
        [HttpPost]
        public ActionResult GetNewQues()
        {
            return User.IsInRole(QssRoleType.Administrator.ToString()) ? Content("[]") as ActionResult : Content(JsonConvert.SerializeObject(QuestionService.GetNewQuesVote().ToArray()));
        }

        /// <summary>
        /// 获得最新投票
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetNewVote()
        {
            return User.IsInRole(QssRoleType.Administrator.ToString()) ? Content("[]") as ActionResult : Content(JsonConvert.SerializeObject(VoteService.GetNewQuesVote().ToArray()));
        }

        /// <summary>
        /// 公告列表页面
        /// </summary>
        /// <param name="page">页码</param>
        /// <param name="strSearch">搜索词</param>
        /// <param name="type">类型 long:长期</param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public ActionResult SysNewList(string strSearch, string type, int page = 1, int pageSize = 10)
        {
            // 分页返回
            return View(SysNewsService.GetSysNewList(strSearch, type).OrderByDescending(p => p.Id).ToPagedList(page, pageSize));
        }

        /// <summary>
        /// 公告详情页面
        /// </summary>
        /// <param name="id">公告Id</param>
        /// <returns></returns>
        public ActionResult SysNewDetail(int id)
        {
            var model = SysNewsService.GetEntity(id);
            if (model == null)
            {
                // 没有该公告
                QssLogHelper.Log("找不到公告", "请求显示公告: [" + id + "],却找不到该公告!", QssLogType.Error);
                return RedirectToAction("ErrorHandle", new { id = 400});
            }

            // 上一篇
            ViewBag.SysNewsFront = SysNewsService.GetFrontSysNews(id);
            // 下一篇
            ViewBag.SysNewsNext = SysNewsService.GetNextSysNews(id);

            // 返回详情
            return View(model);
        }

        /// <summary>
        /// 错误处理
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult ErrorHandle(int id)
        {
            ViewBag.ErrorCode = id;
            return View();
        }

        /// <summary>
        /// 初始化系统
        /// </summary>
        /// <returns>结果</returns>
        public ActionResult DefaultSystem()
        {
            return Content(UserService.DefaultSystem());
        }
    }
}