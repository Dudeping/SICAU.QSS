using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// RoleBll
    /// 实现IRoleBll接口
    /// </summary>
    public class RoleService : BaseService<Role>, IRoleService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.RoleDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public RoleService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 根据角色名获取角色
        /// </summary>
        /// <param name="name">角色名</param>
        /// <param name="role">返回的角色</param>
        /// <returns>处理结果</returns>
        public QssResult QssGetRoleByName(string name, out Role role)
        {
            var model = DbSession.RoleDal.GetEntities(p => p.Name == name);
            // 没有
            if (!model.Any())
            {
                role = null;
                QssLogHelper.Log("获取角色失败", "在获取角色: User 时发生错误!没有获取到该角色.", QssLogType.Error);
                return QssResult.Fail;
            }
            // 有多个
            if (model.Count() > 1)
            {
                role = null;
                string roleList = "";
                foreach (var item in model)
                {
                    roleList += item.Id + ",";
                }
                QssLogHelper.Log("获取到多个同名角色", "在获取角色: " + name + " 时发生错误!获取到多个同名角色,角色ID[" + roleList.TrimEnd(',') + "]",
                    QssLogType.Error);
                return QssResult.Error;
            }

            // 正常获得一个
            role = model.FirstOrDefault();
            return QssResult.Success;
        }
    }
}
