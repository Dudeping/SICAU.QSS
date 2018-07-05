using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IDAL
{
    /// <summary>
    /// 约束RoleDal，保证其实现了Bll层依赖的方法
    /// 并且让Bll层直接依赖于该接口，降低层之间的耦合
    /// </summary>
    public interface IRoleDal :IBaseDal<Role>
    {
    }
}
