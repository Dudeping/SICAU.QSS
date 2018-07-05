using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Common
{
    /// <summary>
    /// MD5帮助类
    /// </summary>
    public class QssMD5Helper
    {
        /// <summary>
        /// MD5加密
        /// </summary>
        /// <param name="account">账号</param>
        /// <param name="password">密码</param>
        /// <returns>Md5值</returns>
        public static string QssGetMd5(string account, string password)
        {
            // 返回MD5值
            return BitConverter.ToString(new MD5CryptoServiceProvider().ComputeHash(Encoding.Default.GetBytes(account + password))).Replace("-", "");
        }
    }
}
