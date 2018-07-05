
using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// ISysNewsBll接口
    /// 用于约束SysNewsBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface ISysNewsService : IBaseService<SysNews>
    {
        /// <summary>
        /// 获取最新公告信息
        /// 最多4条
        /// </summary>
        /// <returns></returns>
        IEnumerable<NewSysNewsModel> GetNewSysNews();

        /// <summary>
        /// 获取公告列表
        /// </summary>
        /// <param name="type">公告类型</param>
        /// <param name="strSearch">搜索内容</param>
        /// <returns></returns>
        IQueryable<SysNewsListModel> GetSysNewList(string type, string strSearch = "");

        /// <summary>
        /// 获取公告列表
        /// </summary>
        /// <returns></returns>
        IQueryable<SysNewsListModel> GetSysNewList();

        /// <summary>
        /// 获取前一篇公告
        /// </summary>
        /// <param name="id">当前公告Id</param>
        /// <returns></returns>
        SysNewsFrontNext GetFrontSysNews(int id);

        /// <summary>
        /// 获取后一篇公告
        /// </summary>
        /// <param name="id">当前公告Id</param>
        /// <returns></returns>
        SysNewsFrontNext GetNextSysNews(int id);

        /// <summary>
        /// 添加公告
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="message">处理信息</param>
        /// <returns></returns>
        QssResult CreateSysNews(string title, string content, out string message);
    }
}
