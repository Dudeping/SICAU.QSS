using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    public class QssDbContextFactory
    {
        /// <summary>
        /// 获取当前上下文
        /// 保证一次请求共用一个上下文
        /// </summary>
        /// <returns></returns>
        public static QssDbContext GetCurrentDbContext()
        {
            // 保证同一线程共用一个数据库上下文
            return QssCacheHelper.GetCallContextCache<QssDbContext>("QssDbContext");
        }
    }
}
