namespace SICAU.QSS.ModelFactory
{
    using SICAU.QSS.Model;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class QssDbContext : DbContext
    {
        //您的上下文已配置为从您的应用程序的配置文件(App.config 或 Web.config)使用“QssDbContext”连接字符串。默认情况下，此连接字符串针对您的 LocalDb 实例上的“SICAU.QSS.Database”数据库。
        //如果您想要针对其他数据库和/或数据库提供程序，请在应用程序配置文件中修改“QssDbContext”连接字符串。
        public QssDbContext()
            : base("name=QssDbContext")
        {
        }

        //为您要在模型中包含的每种实体类型都添加 DbSet。有关配置和使用 Code First 模型的详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=390109。
        
        /// <summary>
        /// 用户
        /// </summary>
        public virtual DbSet<User> Users { get; set; }
        /// <summary>
        /// 角色
        /// </summary>
        public virtual DbSet<Role> Roles { get; set; }
        /// <summary>
        /// 组织
        /// </summary>
        public virtual DbSet<Organize> Organizes { get; set; }
        /// <summary>
        /// 问卷
        /// </summary>
        public virtual DbSet<Question> Questions { get; set; }
        /// <summary>
        /// 问卷题目
        /// </summary>
        public virtual DbSet<QuesSubject> QuesSubjects { get; set; }
        /// <summary>
        /// 问卷题目选项
        /// </summary>
        public virtual DbSet<QuesOption> QuesOptions { get; set; }
        /// <summary>
        /// 投票
        /// </summary>
        public virtual DbSet<Vote> Votes { get; set; }
        /// <summary>
        /// 投票选项
        /// </summary>
        public virtual DbSet<VoteOption> VoteOptions { get; set; }
        /// <summary>
        /// 系统公告
        /// </summary>
        public virtual DbSet<SysNews> SysNewses { get; set; }
        /// <summary>
        /// 系统日志
        /// </summary>
        public virtual DbSet<Log> Logs { get; set; }
        /// <summary>
        /// 填写记录
        /// </summary>
        public virtual DbSet<WtLog> WtLogs { get; set; }
        /// <summary>
        /// 站内信
        /// </summary>
        public virtual DbSet<Letter> Letters { get; set; }
        /// <summary>
        /// 网站配置信息
        /// </summary>
        public virtual DbSet<WebConfig> WebConfigs { get; set; }
    }
}