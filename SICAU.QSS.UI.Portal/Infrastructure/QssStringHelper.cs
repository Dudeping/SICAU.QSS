using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace SICAU.QSS.UI.Portal.Infrastructure
{
    /// <summary>
    /// 字符串扩展方法
    /// 用于首页公告信息
    /// </summary>
    public static class StringHelper
    {
        /// <summary>
        /// Qss扩展方法，获取字符串的前num个字符
        /// </summary>
        /// <param name="str"></param>
        /// <param name="num">要获取前多少位</param>
        /// <returns></returns>
        public static string GetFirst(this string str, int num)
        {
            str = Regex.Replace(HttpUtility.HtmlDecode(str.Replace("&nbsp;","")), " <[^>]*>", "");
            return str.Length > num ? str.Substring(0, num) : str;
        }
    }
}