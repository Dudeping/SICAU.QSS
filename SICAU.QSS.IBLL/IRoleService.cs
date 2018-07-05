using SICAU.QSS.Common;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IBLL
{
    /// <summary>
    /// IRoleBll接口
    /// 用于约束RoleBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IRoleService : IBaseService<Role>
    {
        /// <summary>
        /// 根据角色名获取角色
        /// </summary>
        /// <param name="name">角色名</param>
        /// <param name="role">返回的角色</param>
        /// <returns>处理结果</returns>
        QssResult QssGetRoleByName(string name, out Role role);
    }
}
