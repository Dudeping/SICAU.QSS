using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.Common
{
    /// <summary>
    /// 缓存帮助类
    /// </summary>
    public class QssCacheHelper
    {
        /// <summary>
        /// 获取缓存在线程上下文中的数据
        /// 使用该方法为同一线程共用一个数据
        /// </summary>
        /// <typeparam name="T">数据的类型</typeparam>
        /// <param name="key">数据的key</param>
        /// <returns></returns>
        public static T GetCallContextCache<T>(string key) where T : class, new()
        {
            // 获取缓存数据
            var t = CallContext.GetData(key) as T;
            if (t == null)
            {
                // 没有时新建
                t = new T();
                // 并缓存
                CallContext.SetData(key, t);
            }
            return t;
        }
    }
}
