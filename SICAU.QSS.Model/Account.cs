using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Model
{
    /// <summary>
    /// 角色
    /// </summary>
    public class Role
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 角色名
        /// </summary>
        [DisplayName("角色名")]
        public string Name { get; set; }

        /// <summary>
        /// 用户
        /// </summary>
        public virtual ICollection<User> Users { get; set; }
    }

    /// <summary>
    /// 用户
    /// </summary>
    public class User
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        [DisplayName("姓名")]
        public string Name { get; set; }

        /// <summary>
        /// 账号
        /// </summary>
        [DisplayName("账号")]
        public string Account { get; set; }

        /// <summary>
        /// 邮箱
        /// </summary>
        [DisplayName("邮箱")]
        public string Email { get; set; }

        /// <summary>
        /// 电话
        /// </summary>
        [DisplayName("电话")]
        public string Tel { get; set; }

        /// <summary>
        /// 校区
        /// </summary>
        [DisplayName("校区")]
        public string Campus { get; set; }

        /// <summary>
        /// 学院
        /// </summary>
        [DisplayName("学院")]
        public string College { get; set; }

        /// <summary>
        /// 类型
        /// S:学生
        /// T:教师
        /// </summary>
        [DisplayName("类型")]
        public string Type { get; set; }

        /// <summary>
        /// 班级
        /// </summary>
        [DisplayName("班级")]
        public string Class { get; set; }

        /// <summary>
        /// 专业
        /// </summary>
        [DisplayName("专业")]
        public string Major { get; set; }

        /// <summary>
        /// 年级
        /// </summary>
        [DisplayName("年级")]
        public int Grade { get; set; }

        /// <summary>
        /// 部门(教师有作为创建组织的参考)
        /// </summary>
        [DisplayName("部门")]
        public string Department { get; private set; }

        /// <summary>
        /// 激活Code
        /// Code != ""证明未激活
        /// </summary>
        [DisplayName("激活Code")]
        public string ACode { get; set; }

        /// <summary>
        /// Code过期时间
        /// </summary>
        [DisplayName("Code过期时间")]
        public DateTime CodeFailTime { get; set; } = DateTime.Now;

        /// <summary>
        /// 学制
        /// </summary>
        [DisplayName("学制")]
        public int LoSch { get; set; }

        /// <summary>
        /// 加入的组织
        /// 延迟加载
        /// </summary>
        [DisplayName("加入的组织")]
        public virtual ICollection<Organize> JoinOrganizes { get; set; }

        /// <summary>
        /// 填写记录
        /// 延迟加载
        /// </summary>
        [DisplayName("填写记录")]
        public virtual ICollection<WtLog> WtLogs { get; set; }

        /// <summary>
        /// 角色
        /// 延迟加载
        /// </summary>
        [DisplayName("角色")]
        public virtual Role Role { get; set; }

        /// <summary>
        /// 一天添加的问卷数量
        /// </summary>
        public int AddQuesNum { get; set; }

        /// <summary>
        /// 上一次添加问卷的时间
        /// </summary>
        public DateTime LastAddQuesTime { get; set; } = DateTime.Now;

        /// <summary>
        /// 一天添加的投票数量
        /// </summary>
        public int AddVoteNum { get; set; }

        /// <summary>
        /// 上一次添加投票的时间
        /// </summary>
        public DateTime LastAddVoteTime { get; set; } = DateTime.Now;

        /// <summary>
        /// 接收到的信件
        /// </summary>
        [DisplayName("已接收信件")]
        public ICollection<Letter> ReceiveLetters { get; set; }

        /// <summary>
        /// 已查看的信件
        /// </summary>
        [DisplayName("已查看信件")]
        public ICollection<Letter> ReadLetters { get; set; }

        /// <summary>
        /// 已删除的信件
        /// </summary>
        [DisplayName("已删除信件")]
        public ICollection<Letter> DeleteLetters { get; set; }
    }
}
