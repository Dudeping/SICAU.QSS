using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// ILogBll接口
    /// 用于约束LogBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface ILogService : IBaseService<Log>
    {
        /// <summary>
        /// 获取日志列表
        /// </summary>
        /// <param name="type">日志类型</param>
        /// <returns></returns>
        IQueryable<Log> GetLogList(string type);
    }
}
