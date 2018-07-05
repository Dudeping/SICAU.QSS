using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    /// <summary>
    /// 获取最新公告模型
    /// </summary>
    public class NewSysNewsModel
    {
        public int Id { get; set; }
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// 内容摘要
        /// </summary>
        public string Content { get; set; }
        /// <summary>
        /// 发布时间
        /// </summary>
        public DateTime CreateTime { get; set; }
    }

    /// <summary>
    /// 获取公告列表模型
    /// </summary>
    public class SysNewsListModel: NewSysNewsModel
    {
        /// <summary>
        /// 作者
        /// </summary>
        public string Author { get; set; }
    }

    /// <summary>
    /// 系统公告上一篇下一篇数据模型
    /// </summary>
    public class SysNewsFrontNext
    {
        /// <summary>
        /// 系统公告Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }
    }

    /// <summary>
    /// 创建公告模型
    /// </summary>
    public class CreateSysNewModel
    {
        /// <summary>
        /// 公告标题
        /// </summary>
        [DisplayName("公告标题")]
        [StringLength(20, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 2)]
        public string Title { get; set; }

        /// <summary>
        /// 公告内容
        /// </summary>
        [DisplayName("公告内容")]
        [StringLength(1000, ErrorMessage = "{0}应该在{2}-{1}字之间!", MinimumLength = 2)]
        public string Content { get; set; }
    }

    /// <summary>
    /// 获取消息公告
    /// </summary>
    public enum QssGetLetterType
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
    /// 标记站内信类型
    /// </summary>
    public enum QssMarkLetterType
    {
        /// <summary>
        /// 查看
        /// </summary>
        Read,
        /// <summary>
        /// 删除
        /// </summary>
        Delete
    }
}
