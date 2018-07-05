using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 约束OrganizeDal，保证其实现了Bll层依赖的方法
    /// 并且让Bll层直接依赖于该接口，降低层之间的耦合
    /// </summary>
    public interface IOrganizeDal :IBaseDal<Organize>
    {
        /// <summary>
        /// 获得学校组织
        /// 结果对学校组织公开,默认该结果公开
        /// </summary>
        /// <returns>查找结果</returns>
        QssResult QssGetSchool(out Organize school);
    }
}
