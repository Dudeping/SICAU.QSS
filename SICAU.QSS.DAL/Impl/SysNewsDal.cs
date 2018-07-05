
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现ISysNewsDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    internal class SysNewsDal : BaseDal<SysNews>, ISysNewsDal
    {
    }
}
