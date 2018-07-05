using SICAU.QSS.Common;
using SICAU.QSS.UI.Portal.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SICAU.QSS.UI.Portal.Infrastructure
{
    /// <summary>
    /// 返回信息帮助类
    /// </summary>
    public class QssReturnHepler
    {
        /// <summary>
        /// 获取提示信息
        /// </summary>
        /// <param name="text">提示文本</param>
        /// <param name="url">跳转链接</param>
        /// <returns></returns>
        public static string QssGetReturnContent(string text, string url)
        {
            string content = $"alert('{text}')";
            if (!string.IsNullOrWhiteSpace(url))
            {
                content += $";location.href='{url}';";
            }
            return $"<script>{content}</script>";
        }

        /// <summary>
        /// 获取提示信息
        /// </summary>
        /// <param name="text">提示文本</param>
        /// <returns></returns>
        public static string QssGetReturnContent(string text)
        {
            return QssGetReturnContent(text, null);
        }
    }
}