using SICAU.QSS.Common;
using SICAU.QSS.IDAL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现IOrganizeDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    public class OrganizeDal : BaseDal<Organize>, IOrganizeDal
    {
        /// <summary>
        /// 获得学校组织
        /// 结果对学校组织公开,默认该结果公开
        /// </summary>
        /// <returns>查找结果</returns>
        public QssResult QssGetSchool(out Organize _school)
        {
            // 四川农业大学
            var school = Db.Organizes.Where(p => p.Name == QssEnvironment.SchoolName);
            if (!school.Any())
            {
                // 暂时没有该组织
                _school = null;
                return QssResult.Fail;
            }
            else if (school.Count() > 1)
            {
                // 出现同名组织
                // 系统出现严重错误
                QssLogHelper.Log("出现重名组织", "组织：四川农业大学 的个数为" + school.Count(), QssLogType.Error);
                _school = null;
                return QssResult.Error;
            }
            else
            {
                // 返回学校
                _school = school.FirstOrDefault();
                return QssResult.Success;
            }
        }
    }
}
