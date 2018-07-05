using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 创建组织模型
    /// </summary>
    public class CreateOrgModel
    {
        /// <summary>
        /// 组织类型
        /// </summary>
        [DisplayName("类型")]
        [Required(ErrorMessage = "{0}为必填项！")]
        public string OrgType { get; set; }

        /// <summary>
        /// 组织名
        /// </summary>
        [DisplayName("组织名")]
        [Required(ErrorMessage ="{0}为必填项！")]
        public string OrgName { get; set; }

        /// <summary>
        /// 教务网密码
        /// </summary>
        [DisplayName("教务网密码")]
        [Required(ErrorMessage = "{0}为必填项！")]
        public string Password { get; set; }

        /// <summary>
        /// 学习委员密码
        /// </summary>
        [DisplayName("学习委员密码")]
        public string ComPassword { get; set; }
    }

    /// <summary>
    /// 加入组织模型
    /// </summary>
    public class JoinOrgModel
    {
        /// <summary>
        /// 组织Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 组织名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 组织类型
        /// </summary>
        public QssOrganizeType Type { get; set; }

        /// <summary>
        /// 过期时间
        /// </summary>
        public DateTime DeleteTime { get; set; }
    }
}