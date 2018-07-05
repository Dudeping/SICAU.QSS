
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// LogBll
    /// 实现ILogBll接口
    /// </summary>
    internal class LogService : BaseService<Log>, ILogService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.LogDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public LogService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 获取日志列表
        /// </summary>
        /// <param name="type">日志类型</param>
        /// <returns></returns>
        public IQueryable<Log> GetLogList(string type)
        {
            var model = CurrentDal.GetEntities(p => true);

            // 如果有查询类型
            if (!string.IsNullOrWhiteSpace(type) && type.ToLower() != "all")
            {
                type = type.ToUpper();
                model = model.Where(p => p.Level == type);
            }

            return model;
        }
    }
}
