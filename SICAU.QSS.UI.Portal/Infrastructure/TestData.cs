using SICAU.QSS.Common;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.UI.Portal.Infrastructure
{
    // 测试用临时数据
    public class TempData
    {
        // 用户
        public User user = new User
        {
            Id = 1,
            Account = "201700101",
            ACode = "",
            Campus = "雅安校区",
            Class = "物联网201703",
            College = "信息工程学院",
            Email = "1617954225@qq.com",
            Grade = 2017,
            LoSch = 4,
            Major = "物联网工程",
            Name = "张小城",
            Type = "S"
        };

        // 获取发起组织名
        public Organize organize = new Organize
        {
            Id = 1,
            Name = "四川农业大学",
            Type = QssOrganizeType.School
        };

        // 我加入的组织
        public List<Organize> joinOrganize = new List<Organize>
        {
            new Organize
            {
                Id = 1, Name = "四川农业大学", Type = QssOrganizeType.School, IsTemp = false
            },
            new Organize
            {
                Id = 2, Name = "雅安校区", Type = QssOrganizeType.Campus, IsTemp = false
            },
            new Organize
            {
                Id = 3, Name = "信息工程学院", Type = QssOrganizeType.College, IsTemp = false
            },
            new Organize
            {
                Id = 4, Name = "物联网工程", Type = QssOrganizeType.Major, IsTemp = false
            },
            new Organize
            {
                Id = 5, Name = "物联网201703", Type = QssOrganizeType.Class, IsTemp = false
            },
            new Organize
            {
                Id = 6, Name = "信息工程学院组织部", Type = QssOrganizeType.Department, IsTemp = false
            }
        };

        // 按类别返回组织
        public List<Organize> typeOrganize = new List<Organize>
        {
            new Organize
            {
                Id = 1, Name = "四川农业大学", Type = QssOrganizeType.School
            },
            new Organize
            {
                Id = 2, Name = "雅安校区", Type = QssOrganizeType.Campus
            },
            new Organize
            {
                Id = 3, Name = "都江堰校区", Type = QssOrganizeType.Campus
            },
            new Organize
            {
                Id = 4, Name = "成都校区", Type = QssOrganizeType.Campus
            },
            new Organize
            {
                Id = 5, Name = "机电学院", Type = QssOrganizeType.College
            },
            new Organize
            {
                Id = 6, Name = "水利水电学院", Type = QssOrganizeType.College
            },
            new Organize
            {
                Id = 7, Name = "信息工程学院", Type = QssOrganizeType.College
            },
            new Organize
            {
                Id = 8, Name = "物联网工程", Type = QssOrganizeType.Major
            },
            new Organize
            {
                Id = 9, Name = "计算机科学与技术", Type = QssOrganizeType.Major
            },
            new Organize
            {
                Id =10, Name = "计算机科学与技术(教育)", Type = QssOrganizeType.Major
            },
            new Organize
            {
                Id = 11, Name = "物联网201703", Type = QssOrganizeType.Class
            },
            new Organize
            {
                Id = 12, Name = "计算机201701", Type = QssOrganizeType.Class
            },
            new Organize
            {
                Id = 13, Name = "计算机201702", Type = QssOrganizeType.Class
            },
            new Organize
            {
                Id = 14, Name = "信息工程学院组织部", Type = QssOrganizeType.Department
            }
        };
    }
}
