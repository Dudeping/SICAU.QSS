using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Model
{
    /// <summary>
    /// 网站配置
    /// </summary>
    public class WebConfig
    {
        // TODO:我们是否需要将网站的配置项保存在数据库中
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 网站名字
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 系统管理员账号
        /// </summary>
        public string Account { get; set; }

        /// <summary>
        /// 系统管理员密码
        /// </summary>
        [DataType(DataType.Password)]
        public string Password { get; set; }

        /// <summary>
        /// 系统管理员邮箱
        /// </summary>
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        /// <summary>
        /// 系统管理员电话
        /// </summary>
        public string Tel { get; set; }
    }
}
