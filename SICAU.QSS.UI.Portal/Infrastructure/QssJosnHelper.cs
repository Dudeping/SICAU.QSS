using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICAU.QSS.UI.Portal.Infrastructure
{
    /// <summary>
    /// 自定义Json返回格式
    /// </summary>
    public class QssJsonResult
    {
        /// <summary>
        /// 结果类型
        /// JsonResultType
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// 消息
        /// </summary>
        public string Message { get; set; }
    }

    /// <summary>
    /// 返回结果类型
    /// </summary>
    public enum QssJsonResultType
    {
        /// <summary>
        /// 成功
        /// </summary>
        Success,
        /// <summary>
        /// 失败
        /// </summary>
        Fail,
        /// <summary>
        /// 危险
        /// </summary>
        Danger
    }
}