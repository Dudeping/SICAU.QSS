using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL.Common
{
    /// <summary>
    /// User类扩展方法
    /// </summary>
    public static class QssUserHelper
    {
        /// <summary>
        /// 判断用户是否绑定邮箱, 在创建组织、问卷、投票时调用
        /// ture: 已绑定, false: 未绑定
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public static bool QssCheckHaveEmail(this User user) => string.IsNullOrWhiteSpace(user.Email) || user.ACode != "" ? false : true;
    }
}
