using SICAU.QSS.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 获取组织数据模型
    /// </summary>
    public class GetOrganizeModel
    {
        /// <summary>
        /// 组织Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 组织名
        /// </summary>
        public string Name { get; set; }
    }

    /// <summary>
    /// 获取自己加入的组织模型
    /// </summary>
    public class GetJoinOrganize : GetOrganizeModel
    {
        /// <summary>
        /// 是否为临时组织
        /// </summary>
        public bool IsTemp { get; set; }
    }

    /// <summary>
    /// 获取审核组织内容模型
    /// </summary>
    public class GetAuditOrgModel
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
        public string Type { get; set; }

        /// <summary>
        /// 提交者
        /// </summary>
        public string Creator { get; set; }
    }

    /// <summary>
    /// 获取组织类型
    /// </summary>
    public enum QssGetOrgType
    {
        /// <summary>
        ///加入
        /// </summary>
        join,
        /// <summary>
        /// 创建
        /// </summary>
        create
    }
}
