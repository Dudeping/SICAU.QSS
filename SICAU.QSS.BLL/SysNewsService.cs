using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// SysNewsBll
    /// 实现ISysNewsBll接口
    /// </summary>
    public class SysNewsService : BaseService<SysNews>, ISysNewsService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.SysNewsDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public SysNewsService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 获取最新公告信息
        /// 最多4条
        /// </summary>
        /// <returns></returns>
        public IEnumerable<NewSysNewsModel> GetNewSysNews()
        {
            // 最新公告 4条
            return CurrentDal.GetEntities(p => true).OrderByDescending(p => p.Id).Take(4).ToList().Select(p => new NewSysNewsModel { Id = p.Id, Title = p.Title, Content = p.Content.GetFirst(22), CreateTime = p.CreateTime });
        }

        /// <summary>
        /// 获取公告列表
        /// </summary>
        /// <param name="strSearch">搜索</param>
        /// <param name="type">类型，long：长期公告</param>
        /// <returns></returns>
        public IQueryable<SysNewsListModel> GetSysNewList(string type, string strSearch = "")
        {
            // 获取所有公告
            var model = from x in CurrentDal.GetEntities(p => true)
                        select x;

            // 获得长期公告
            if (!String.IsNullOrWhiteSpace(type) && type == "long")
            {
                model = model.Where(p => p.IsLong);
            }

            // 搜索
            if (!string.IsNullOrWhiteSpace(strSearch))
            {
                model = model.Where(p => p.Title.Contains(strSearch) || strSearch.Contains(p.Title));
            }

            // 投影Id,Title,CreateTime,Author
            return model.Select(p => new SysNewsListModel { Id = p.Id, Title = p.Title, CreateTime = p.CreateTime, Content = p.Content });
        }

        /// <summary>
        /// 获取公告列表
        /// </summary>
        /// <returns></returns>
        public IQueryable<SysNewsListModel> GetSysNewList()
        {
            return GetSysNewList(null);
        }

        /// <summary>
        /// 获取前一篇公告
        /// </summary>
        /// <param name="id">当前公告Id</param>
        /// <returns></returns>
        public SysNewsFrontNext GetFrontSysNews(int id)
        {
            var sysNews = CurrentDal.GetEntities(p => p.Id > id).FirstOrDefault();
            if (sysNews == null)
            {
                return null;
            }
            return new SysNewsFrontNext { Id = sysNews.Id, Title = sysNews.Title };
        }

        /// <summary>
        /// 获取后一篇公告
        /// </summary>
        /// <param name="id">当前公告Id</param>
        /// <returns></returns>
        public SysNewsFrontNext GetNextSysNews(int id)
        {
            var sysNew = CurrentDal.GetEntities(p => p.Id < id).OrderByDescending(p => p.Id).FirstOrDefault();
            if (sysNew == null)
            {
                return null;
            }
            return new SysNewsFrontNext { Id = sysNew.Id, Title = sysNew.Title };
        }

        /// <summary>
        /// 添加公告
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="message">处理信息</param>
        /// <returns></returns>
        public QssResult CreateSysNews(string title, string content, out string message)
        {
            try
            {
                DbSession.SysNewsDal.Add(new SysNews { Title = title, Content = content, CreateTime = DateTime.Now });
                DbSession.SaveChanges();

                message = "添加成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("添加公告失败", "添加系统公告失败!原因：" + exception.Message, QssLogType.Error, exception);
                message = "添加失败!";
                return QssResult.Fail;
            }
        }
    }

    /// <summary>
    /// 字符串扩展方法
    /// 用于首页公告信息
    /// </summary>
    public static class StringHelper
    {
        /// <summary>
        /// Qss扩展方法，获取字符串的前num个字符
        /// </summary>
        /// <param name="str"></param>
        /// <param name="num">要获取前多少位</param>
        /// <returns></returns>
        public static string GetFirst(this string str, int num)
        {
            str = Regex.Replace(HttpUtility.HtmlDecode(str.Replace("&nbsp;", "")), " <[^>]*>", "");
            return str.Length > num ? str.Substring(0, num) : str;
        }
    }
}
