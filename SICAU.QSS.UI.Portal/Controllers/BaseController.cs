using SICAU.QSS.Common;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Controllers
{
    public abstract class BaseController : Controller
    {
        /// <summary>
        /// Json通用返回方法
        /// </summary>
        /// <param name="result">处理结果</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="successUrl">成功消息/跳转链接</param>
        /// <returns></returns>
        protected ActionResult QssJsonCommonReturn(QssResult result, string message, string successUrl)
        {
            return Json(
                result == QssResult.Error ? new QssJsonResult() { Type = QssJsonResultType.Danger.ToString(), Message = "/Account/LogOff" } :
                result == QssResult.Fail ? new QssJsonResult() { Type = QssJsonResultType.Fail.ToString(), Message = message } :
                new QssJsonResult() { Type = QssJsonResultType.Success.ToString(), Message = successUrl ?? message }
                );
        }

        /// <summary>
        /// Json通用返回方法
        /// </summary>
        /// <param name="result">处理结果</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        protected ActionResult QssJsonCommonReturn(QssResult result, string message) => QssJsonCommonReturn(result, message, null);
        
        /// <summary>
        /// Content通用返回方法
        /// </summary>
        /// <param name="result">处理结果</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="successUrl">成功消息/跳转链接</param>
        /// <returns></returns>
        protected ActionResult QssContentCommonReturn(QssResult result, string message, string failUrl, string successUrl)
        {
            return Json(
                result == QssResult.Error ? RedirectToAction("LogOff", "Account") as ActionResult :
                result == QssResult.Fail ? Content(QssReturnHepler.QssGetReturnContent(message, failUrl)) :
                Content(QssReturnHepler.QssGetReturnContent(message, successUrl))
                );
        }
    }
}