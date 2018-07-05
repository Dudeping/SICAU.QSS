using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 登录模型
    /// </summary>
    public class LoginModel
    {
        /// <summary>
        /// 账号
        /// </summary>
        [DisplayName("教务网账号")]
        [StringLength(11, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 6)]
        [Required(ErrorMessage = "{0}为必填项!")]
        public string Account { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        [DisplayName("教务网密码")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "{0}为必填项!")]
        public string Password { get; set; }
    }

    /// <summary>
    /// 注册邮箱数据模型
    /// </summary>
    public class RegisterEmailModel
    {
        /// <summary>
        /// 邮箱
        /// </summary>
        [DisplayName("邮箱")]
        [DataType(DataType.EmailAddress)]
        [Required(ErrorMessage ="{0}为必填项！")]
        [StringLength(255, ErrorMessage = "{0}应该在{2}-{1}字之间！", MinimumLength = 2)]
        public string Email { get; set; }
    }

    /// <summary>
    /// 修改个人信息模型
    /// </summary>
    public class InfoEdit
    {
        /// <summary>
        /// 电话
        /// </summary>
        [DisplayName("电话")]
        [StringLength(11, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 6)]
        public string Tel { get; set; }
    }

    /// <summary>
    /// 更改密码模型
    /// </summary>
    public class ChangePasswordModel
    {
        /// <summary>
        /// 旧密码
        /// </summary>
        [DisplayName("旧密码")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "{0}为必填项!")]
        [StringLength(40, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 6)]
        public string OldPassword { get; set; }

        /// <summary>
        /// 新密码
        /// </summary>
        [DisplayName("新密码")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "{0}为必填项!")]
        [StringLength(40, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 6)]
        public string Password { get; set; }

        /// <summary>
        /// 重复密码
        /// </summary>
        [DisplayName("重复密码")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "{0}为必填项!")]
        [StringLength(40, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 6)]
        [Compare("Password", ErrorMessage = "新密码和重复密码不一样")]
        public string RePassword { get; set; }
    }
}