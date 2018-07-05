using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Common
{
    /// <summary>
    /// 系统定义的一些环境变量，只读
    /// </summary>
    public struct QssEnvironment
    {
        /// <summary>
        /// 学校：四川农业大学
        /// </summary>
        public static string SchoolName => "四川农业大学";
        /// <summary>
        /// 校区：雅安校区
        /// </summary>
        public static string CampusYName => "雅安校区";
        /// <summary>
        /// 校区：成都校区
        /// </summary>
        public static string CampusCName => "成都校区";
        /// <summary>
        /// 校区：都江堰校区
        /// </summary>
        public static string CampusDName => "都江堰校区";
        /// <summary>
        /// 超级管理员账号：qss001
        /// </summary>
        public static string AdministratorAccount => "qss0001";
        // TODO:讨论创建学校、校区、学院级组织的部门
        /// <summary>
        /// 允许创建学校组织的部门
        /// </summary>
        public static string AllowToCreateSchoolDepartment => "";
        /// <summary>
        /// 允许创建校区组织的部门
        /// </summary>
        public static string AllowToCreateCampusDepartment => "";
        /// <summary>
        /// 允许创建学院组织的部门
        /// </summary>
        public static string AllowToCreateCollegeDepartment => "行政办公室";
        /// <summary>
        /// 允许创建专业组织的部门
        /// </summary>
        public static string AllowToCreateMajorDepartment => "";
    }

    /// <summary>
    /// 调用系统函数返回类型
    /// </summary>
    public enum QssResult
    {
        /// <summary>
        /// 成功
        /// 一条数据
        /// </summary>
        Success,
        /// <summary>
        /// 失败
        /// 没有数据
        /// </summary>
        Fail,
        /// <summary>
        /// 错误
        /// 多条数据
        /// </summary>
        Error
    }

    /// <summary>
    /// 投票管理和问卷管理提交二级标题
    /// </summary>
    public enum QssManageQusVoteType
    {
        /// <summary>
        /// 全部
        /// </summary>
        all,
        /// <summary>
        /// 我创建
        /// </summary>
        create,
        /// <summary>
        /// 我参与
        /// </summary>
        join,
        /// <summary>
        /// 我审核
        /// </summary>
        audit
    }

    /// <summary>
    /// 系统角色类型
    /// </summary>
    public enum QssRoleType
    {
        /// <summary>
        /// 超级管理员
        /// </summary>
        Administrator,
        /// <summary>
        /// 系统管理员
        /// </summary>
        SysAdmin,
        /// <summary>
        /// 组织管理员
        /// </summary>
        Admin,
        /// <summary>
        /// 普通用户
        /// </summary>
        User
    }

    /// <summary>
    /// 站内信类型
    /// </summary>
    public enum QssLetterType
    {
        /// <summary>
        /// 已读
        /// </summary>
        Read,
        /// <summary>
        /// 未读
        /// </summary>
        UnRead
    }

    /// <summary>
    /// 日志类型
    /// </summary>
    public enum QssLogType
    {
        /// <summary>
        /// 调试
        /// </summary>
        Debug,
        /// <summary>
        /// 信息
        /// </summary>
        Info,
        /// <summary>
        /// 警告
        /// </summary>
        Warn,
        /// <summary>
        /// 错误
        /// </summary>
        Error,
        /// <summary>
        /// 致命错误
        /// </summary>
        Fatal,
        /// <summary>
        /// 全部
        /// </summary>
        All
    }

    /// <summary>
    /// 填写记录类型
    /// </summary>
    public enum QssWtLogType
    {
        /// <summary>
        /// 问卷
        /// </summary>
        Question,
        /// <summary>
        /// 投票
        /// </summary>
        Vote
    }

    /// <summary>
    /// 组织类型
    /// </summary>
    public enum QssOrganizeType
    {
        /// <summary>
        /// 学校
        /// </summary>
        School,
        /// <summary>
        /// 校区
        /// </summary>
        Campus,
        /// <summary>
        /// 学院
        /// </summary>
        College,
        /// <summary>
        /// 专业
        /// </summary>
        Major,
        /// <summary>
        /// 部门
        /// </summary>
        Department,
        /// <summary>
        /// 协会
        /// </summary>
        Association,
        /// <summary>
        /// 班级
        /// </summary>
        Class,
        /// <summary>
        /// 临时
        /// </summary>
        Temp
    }

    /// <summary>
    /// 组织状态
    /// </summary>
    public enum QssOrganizeState
    {
        /// <summary>
        /// 未审核
        /// </summary>
        NoAudited,
        /// <summary>
        /// 审核中
        /// </summary>
        InAudit,
        /// <summary>
        /// 未通过
        /// </summary>
        NotPass,
        /// <summary>
        /// 通过
        /// </summary>
        Pass
    }

    /// <summary>
    /// 投票和问卷状态
    /// </summary>
    public enum QssQuesAndVoteState
    {
        /// <summary>
        /// 未经过组织管理员审核
        /// </summary>
        NoCreate,
        /// <summary>
        /// 确认中
        /// </summary>
        InConfirm,
        /// <summary>
        /// 组织管理员审核未通过
        /// </summary>
        NotConfirm,
        /// <summary>
        /// 未审核
        /// </summary>
        NoAudited,
        /// <summary>
        /// 审核中
        /// </summary>
        InAudit,
        /// <summary>
        /// 未通过
        /// </summary>
        NotPass,
        /// <summary>
        /// 通过
        /// </summary>
        Pass,
        /// <summary>
        /// 填写中
        /// </summary>
        Write,
        /// <summary>
        /// 完成
        /// </summary>
        End
    }

    /// <summary>
    /// 问卷调查题目类型
    /// </summary>
    public enum QssQuesSubType
    {
        /// <summary>
        /// 单选题
        /// </summary>
        Radio,
        /// <summary>
        /// 多选题
        /// </summary>
        Multiselect,
        /// <summary>
        /// 判断题
        /// </summary>
        Judge,
        /// <summary>
        /// 主观题
        /// </summary>
        Subjective
    }

    /// <summary>
    /// 投票类型
    /// </summary>
    public enum QssVoteType
    {
        /// <summary>
        /// 单选题
        /// </summary>
        Radio,
        /// <summary>
        /// 多选题
        /// </summary>
        Multiselect,
    }
}
