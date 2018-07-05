using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 约束WtLogDal，保证其实现了Bll层依赖的方法
    /// 并且让Bll层直接依赖于该接口，降低层之间的耦合
    /// </summary>
    public interface IWtLogDal :IBaseDal<WtLog>
    {
    }
}
