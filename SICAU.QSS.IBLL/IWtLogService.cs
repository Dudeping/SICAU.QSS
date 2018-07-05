using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IBLL
{
    /// <summary>
    /// IWtLogBll接口
    /// 用于约束WtLogBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IWtLogService : IBaseService<WtLog>
    {
    }
}
