
using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// IWebConfigBll接口
    /// 用于约束WebConfigBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IWebConfigService : IBaseService<WebConfig>
    {
        /// <summary>
        /// 获取超级管理员账号
        /// </summary>
        /// <param name="model">超级管理员</param>
        /// <returns>处理结果</returns>
        QssResult GetAdministrator(out AdministratorModel model);

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="oldPasswd">旧密码</param>
        /// <param name="passwd">新密码</param>
        /// <returns></returns>
        QssResult ChangePassword(string oldPasswd, string passwd, out string _result);
    }
}
