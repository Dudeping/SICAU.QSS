using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// IQuesOptionBll接口
    /// 用于约束QuesOptionBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IQuesOptionService : IBaseService<QuesOption>
    {
    }
}
