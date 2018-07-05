namespace SICAU.QSS.ModelFactory.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Letters",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Content = c.String(),
                        CreateTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Account = c.String(),
                        Email = c.String(),
                        Tel = c.String(),
                        Campus = c.String(),
                        College = c.String(),
                        Type = c.String(),
                        Class = c.String(),
                        Major = c.String(),
                        Grade = c.Int(nullable: false),
                        Department = c.String(),
                        ACode = c.String(),
                        CodeFailTime = c.DateTime(nullable: false),
                        LoSch = c.Int(nullable: false),
                        AddQuesNum = c.Int(nullable: false),
                        LastAddQuesTime = c.DateTime(nullable: false),
                        AddVoteNum = c.Int(nullable: false),
                        LastAddVoteTime = c.DateTime(nullable: false),
                        Role_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Roles", t => t.Role_Id)
                .Index(t => t.Role_Id);
            
            CreateTable(
                "dbo.Organizes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 100),
                        CreateTime = c.DateTime(nullable: false),
                        Type = c.Int(nullable: false),
                        State = c.Int(nullable: false),
                        Reason = c.String(maxLength: 200),
                        DeleteTime = c.DateTime(nullable: false),
                        IsTemp = c.Boolean(nullable: false),
                        Campus = c.String(),
                        College = c.String(),
                        Major = c.String(),
                        Admin_Id = c.Int(),
                        Auditor_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Admin_Id)
                .ForeignKey("dbo.Users", t => t.Auditor_Id)
                .Index(t => t.Admin_Id)
                .Index(t => t.Auditor_Id);
            
            CreateTable(
                "dbo.Questions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 50),
                        Introduct = c.String(),
                        Publisher = c.String(nullable: false),
                        CreateTime = c.DateTime(nullable: false),
                        BeginTime = c.DateTime(nullable: false),
                        EndTime = c.DateTime(nullable: false),
                        IsNotice = c.Boolean(nullable: false),
                        State = c.Int(nullable: false),
                        Reason = c.String(),
                        BelongTo = c.Int(nullable: false),
                        IsBelongOrganize = c.Boolean(nullable: false),
                        JoinNum = c.Int(nullable: false),
                        WaiverNum = c.Int(nullable: false),
                        Content = c.String(),
                        Result = c.String(),
                        Auditor_Id = c.Int(),
                        Creator_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Auditor_Id)
                .ForeignKey("dbo.Users", t => t.Creator_Id)
                .Index(t => t.Auditor_Id)
                .Index(t => t.Creator_Id);
            
            CreateTable(
                "dbo.QuesSubjects",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                        Content = c.String(maxLength: 200),
                        Answer = c.String(),
                        Question_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Questions", t => t.Question_Id)
                .Index(t => t.Question_Id);
            
            CreateTable(
                "dbo.QuesOptions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Content = c.String(maxLength: 50),
                        Num = c.Int(nullable: false),
                        QuesSubject_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.QuesSubjects", t => t.QuesSubject_Id)
                .Index(t => t.QuesSubject_Id);
            
            CreateTable(
                "dbo.Votes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                        MaxNum = c.Int(nullable: false),
                        Title = c.String(nullable: false, maxLength: 50),
                        Introduct = c.String(),
                        Publisher = c.String(nullable: false),
                        CreateTime = c.DateTime(nullable: false),
                        BeginTime = c.DateTime(nullable: false),
                        EndTime = c.DateTime(nullable: false),
                        IsNotice = c.Boolean(nullable: false),
                        State = c.Int(nullable: false),
                        Reason = c.String(),
                        BelongTo = c.Int(nullable: false),
                        IsBelongOrganize = c.Boolean(nullable: false),
                        JoinNum = c.Int(nullable: false),
                        WaiverNum = c.Int(nullable: false),
                        Content = c.String(),
                        Result = c.String(),
                        Auditor_Id = c.Int(),
                        Creator_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Auditor_Id)
                .ForeignKey("dbo.Users", t => t.Creator_Id)
                .Index(t => t.Auditor_Id)
                .Index(t => t.Creator_Id);
            
            CreateTable(
                "dbo.VoteOptions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Content = c.String(),
                        Num = c.Int(nullable: false),
                        Vote_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Votes", t => t.Vote_Id)
                .Index(t => t.Vote_Id);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.WtLogs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                        QuesVoteId = c.Int(nullable: false),
                        WtTime = c.DateTime(nullable: false),
                        Content = c.String(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Logs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Thread = c.String(),
                        Level = c.String(),
                        Logger = c.String(),
                        Date = c.DateTime(nullable: false),
                        Exception = c.String(),
                        Message = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SysNews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(maxLength: 20),
                        Content = c.String(maxLength: 1000),
                        CreateTime = c.DateTime(nullable: false),
                        IsLong = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.WebConfigs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Account = c.String(),
                        Password = c.String(),
                        Email = c.String(),
                        Tel = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.OrganizeQuestions",
                c => new
                    {
                        Organize_Id = c.Int(nullable: false),
                        Question_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Organize_Id, t.Question_Id })
                .ForeignKey("dbo.Organizes", t => t.Organize_Id, cascadeDelete: true)
                .ForeignKey("dbo.Questions", t => t.Question_Id, cascadeDelete: true)
                .Index(t => t.Organize_Id)
                .Index(t => t.Question_Id);
            
            CreateTable(
                "dbo.OrganizeVotes",
                c => new
                    {
                        Organize_Id = c.Int(nullable: false),
                        Vote_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Organize_Id, t.Vote_Id })
                .ForeignKey("dbo.Organizes", t => t.Organize_Id, cascadeDelete: true)
                .ForeignKey("dbo.Votes", t => t.Vote_Id, cascadeDelete: true)
                .Index(t => t.Organize_Id)
                .Index(t => t.Vote_Id);
            
            CreateTable(
                "dbo.OrganizeUsers",
                c => new
                    {
                        Organize_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Organize_Id, t.User_Id })
                .ForeignKey("dbo.Organizes", t => t.Organize_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Organize_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.OrganizeQuestion1",
                c => new
                    {
                        Organize_Id = c.Int(nullable: false),
                        Question_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Organize_Id, t.Question_Id })
                .ForeignKey("dbo.Organizes", t => t.Organize_Id, cascadeDelete: true)
                .ForeignKey("dbo.Questions", t => t.Question_Id, cascadeDelete: true)
                .Index(t => t.Organize_Id)
                .Index(t => t.Question_Id);
            
            CreateTable(
                "dbo.OrganizeVote1",
                c => new
                    {
                        Organize_Id = c.Int(nullable: false),
                        Vote_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Organize_Id, t.Vote_Id })
                .ForeignKey("dbo.Organizes", t => t.Organize_Id, cascadeDelete: true)
                .ForeignKey("dbo.Votes", t => t.Vote_Id, cascadeDelete: true)
                .Index(t => t.Organize_Id)
                .Index(t => t.Vote_Id);
            
            CreateTable(
                "dbo.LetterUsers",
                c => new
                    {
                        Letter_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Letter_Id, t.User_Id })
                .ForeignKey("dbo.Letters", t => t.Letter_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Letter_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.LetterUser1",
                c => new
                    {
                        Letter_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Letter_Id, t.User_Id })
                .ForeignKey("dbo.Letters", t => t.Letter_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Letter_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.LetterUser2",
                c => new
                    {
                        Letter_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Letter_Id, t.User_Id })
                .ForeignKey("dbo.Letters", t => t.Letter_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Letter_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.LetterUser2", "User_Id", "dbo.Users");
            DropForeignKey("dbo.LetterUser2", "Letter_Id", "dbo.Letters");
            DropForeignKey("dbo.LetterUser1", "User_Id", "dbo.Users");
            DropForeignKey("dbo.LetterUser1", "Letter_Id", "dbo.Letters");
            DropForeignKey("dbo.LetterUsers", "User_Id", "dbo.Users");
            DropForeignKey("dbo.LetterUsers", "Letter_Id", "dbo.Letters");
            DropForeignKey("dbo.WtLogs", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Users", "Role_Id", "dbo.Roles");
            DropForeignKey("dbo.OrganizeVote1", "Vote_Id", "dbo.Votes");
            DropForeignKey("dbo.OrganizeVote1", "Organize_Id", "dbo.Organizes");
            DropForeignKey("dbo.OrganizeQuestion1", "Question_Id", "dbo.Questions");
            DropForeignKey("dbo.OrganizeQuestion1", "Organize_Id", "dbo.Organizes");
            DropForeignKey("dbo.OrganizeUsers", "User_Id", "dbo.Users");
            DropForeignKey("dbo.OrganizeUsers", "Organize_Id", "dbo.Organizes");
            DropForeignKey("dbo.OrganizeVotes", "Vote_Id", "dbo.Votes");
            DropForeignKey("dbo.OrganizeVotes", "Organize_Id", "dbo.Organizes");
            DropForeignKey("dbo.VoteOptions", "Vote_Id", "dbo.Votes");
            DropForeignKey("dbo.Votes", "Creator_Id", "dbo.Users");
            DropForeignKey("dbo.Votes", "Auditor_Id", "dbo.Users");
            DropForeignKey("dbo.OrganizeQuestions", "Question_Id", "dbo.Questions");
            DropForeignKey("dbo.OrganizeQuestions", "Organize_Id", "dbo.Organizes");
            DropForeignKey("dbo.QuesSubjects", "Question_Id", "dbo.Questions");
            DropForeignKey("dbo.QuesOptions", "QuesSubject_Id", "dbo.QuesSubjects");
            DropForeignKey("dbo.Questions", "Creator_Id", "dbo.Users");
            DropForeignKey("dbo.Questions", "Auditor_Id", "dbo.Users");
            DropForeignKey("dbo.Organizes", "Auditor_Id", "dbo.Users");
            DropForeignKey("dbo.Organizes", "Admin_Id", "dbo.Users");
            DropIndex("dbo.LetterUser2", new[] { "User_Id" });
            DropIndex("dbo.LetterUser2", new[] { "Letter_Id" });
            DropIndex("dbo.LetterUser1", new[] { "User_Id" });
            DropIndex("dbo.LetterUser1", new[] { "Letter_Id" });
            DropIndex("dbo.LetterUsers", new[] { "User_Id" });
            DropIndex("dbo.LetterUsers", new[] { "Letter_Id" });
            DropIndex("dbo.OrganizeVote1", new[] { "Vote_Id" });
            DropIndex("dbo.OrganizeVote1", new[] { "Organize_Id" });
            DropIndex("dbo.OrganizeQuestion1", new[] { "Question_Id" });
            DropIndex("dbo.OrganizeQuestion1", new[] { "Organize_Id" });
            DropIndex("dbo.OrganizeUsers", new[] { "User_Id" });
            DropIndex("dbo.OrganizeUsers", new[] { "Organize_Id" });
            DropIndex("dbo.OrganizeVotes", new[] { "Vote_Id" });
            DropIndex("dbo.OrganizeVotes", new[] { "Organize_Id" });
            DropIndex("dbo.OrganizeQuestions", new[] { "Question_Id" });
            DropIndex("dbo.OrganizeQuestions", new[] { "Organize_Id" });
            DropIndex("dbo.WtLogs", new[] { "User_Id" });
            DropIndex("dbo.VoteOptions", new[] { "Vote_Id" });
            DropIndex("dbo.Votes", new[] { "Creator_Id" });
            DropIndex("dbo.Votes", new[] { "Auditor_Id" });
            DropIndex("dbo.QuesOptions", new[] { "QuesSubject_Id" });
            DropIndex("dbo.QuesSubjects", new[] { "Question_Id" });
            DropIndex("dbo.Questions", new[] { "Creator_Id" });
            DropIndex("dbo.Questions", new[] { "Auditor_Id" });
            DropIndex("dbo.Organizes", new[] { "Auditor_Id" });
            DropIndex("dbo.Organizes", new[] { "Admin_Id" });
            DropIndex("dbo.Users", new[] { "Role_Id" });
            DropTable("dbo.LetterUser2");
            DropTable("dbo.LetterUser1");
            DropTable("dbo.LetterUsers");
            DropTable("dbo.OrganizeVote1");
            DropTable("dbo.OrganizeQuestion1");
            DropTable("dbo.OrganizeUsers");
            DropTable("dbo.OrganizeVotes");
            DropTable("dbo.OrganizeQuestions");
            DropTable("dbo.WebConfigs");
            DropTable("dbo.SysNews");
            DropTable("dbo.Logs");
            DropTable("dbo.WtLogs");
            DropTable("dbo.Roles");
            DropTable("dbo.VoteOptions");
            DropTable("dbo.Votes");
            DropTable("dbo.QuesOptions");
            DropTable("dbo.QuesSubjects");
            DropTable("dbo.Questions");
            DropTable("dbo.Organizes");
            DropTable("dbo.Users");
            DropTable("dbo.Letters");
        }
    }
}
