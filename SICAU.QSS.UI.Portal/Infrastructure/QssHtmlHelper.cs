
using SICAU.QSS.BLL;
using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace SICAU.QSS.UI.Portal.Infrastructure
{
    public static class QHtmlHelper
    {
        /// <summary>
        /// Html扩展方法
        /// 通过账号获取姓名
        /// </summary>
        /// <param name="html"></param>
        /// <param name="account">账号</param>
        /// <returns></returns>
        public static string GetUserName(this HtmlHelper html)
        {
            // 如果已经登录并且不是超级管理员，则返回登录时存入Cookie中的用户姓名，如果是超级管理员则返回超级管理员
            return HttpContext.Current.Request.IsAuthenticated && !HttpContext.Current.User.IsInRole(QssRoleType.Administrator.ToString())
                ? FormsAuthentication.Decrypt(HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName].Value).UserData.Split('|')[1] :
                HttpContext.Current.Request.IsAuthenticated && HttpContext.Current.User.IsInRole(QssRoleType.Administrator.ToString())
                ? "超级管理员" : "";
        }

        /// <summary>
        /// Html扩展方法
        /// 获取已登录用户Id
        /// </summary>
        /// <param name="html"></param>
        /// <returns></returns>
        public static string GetUserId(this HtmlHelper html)
        {
            // 如果已经登录并且不是超级管理员，则返回登录时存入Cookie中的用户Id
            return HttpContext.Current.Request.IsAuthenticated && !HttpContext.Current.User.IsInRole(QssRoleType.Administrator.ToString()) ? FormsAuthentication.Decrypt(HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName].Value).UserData.Split('|')[2] : "";
        }

        /// <summary>
        /// Html扩展方法
        /// 获取未读消息条数
        /// </summary>
        /// <param name="html"></param>
        /// <returns></returns>
        public static MvcHtmlString GetSysNewNum(this HtmlHelper html)
        {
            int sysNewNum = 0;
            if (StaticBllFactory.GetLetterService().QssGetLetterList(QssGetLetterType.UnRead, out string message, out IQueryable<Letter> letters) == QssResult.Success) sysNewNum = letters.Count();
            return new MvcHtmlString(sysNewNum > 0 ? $"{sysNewNum}" : "");

        }

        /// <summary>
        /// Html扩展方法
        /// 显示当前问卷/投票状态
        /// </summary>
        /// <param name="html"></param>
        /// <param name="state">状态</param>
        public static MvcHtmlString GetQuesVoteStat(this HtmlHelper html, QssQuesAndVoteState state)
        {
            return new MvcHtmlString(
                state == QssQuesAndVoteState.Pass ? "审核通过" :
                state == QssQuesAndVoteState.InAudit ? "审核中" :
                state == QssQuesAndVoteState.NoCreate ? "未确认" :
                state == QssQuesAndVoteState.InConfirm ? "确认中" :
                state == QssQuesAndVoteState.NoAudited ? "未审核" :
                state == QssQuesAndVoteState.NotPass ? "审核未通过" :
                state == QssQuesAndVoteState.NotConfirm ? "确认未通过" :
                state == QssQuesAndVoteState.Write ? "发布中" : "已完成");
        }

        /// <summary>
        /// Html扩展方法
        /// 显示当前问卷/投票状态
        /// </summary>
        /// <param name="html"></param>
        /// <param name="state">状态</param>
        public static MvcHtmlString GetQuesVoteStatCss(this HtmlHelper html, QssQuesAndVoteState state)
        {
            return new MvcHtmlString(
                state == QssQuesAndVoteState.Pass ? "collecting" :
                state == QssQuesAndVoteState.InAudit ? "collecting" :
                state == QssQuesAndVoteState.NoCreate ? "" :
                state == QssQuesAndVoteState.InConfirm ? "collecting" :
                state == QssQuesAndVoteState.NoAudited ? "" :
                state == QssQuesAndVoteState.NotPass ? "end" :
                state == QssQuesAndVoteState.NotConfirm ? "end" :
                state == QssQuesAndVoteState.Write ? "collecting" : "collecting");
        }

        /// <summary>
        /// Html扩展方法
        /// 显示组织类型
        /// </summary>
        /// <param name="html"></param>
        /// <param name="state">状态</param>
        public static MvcHtmlString GetOrgType(this HtmlHelper html, QssOrganizeType type)
        {
            return new MvcHtmlString(
                type == QssOrganizeType.Class ? "班级" :
                type == QssOrganizeType.Major ? "专业" :
                type == QssOrganizeType.Campus ? "校区" :
                type == QssOrganizeType.College ? "学院" :
                type == QssOrganizeType.Department ? "部门" :
                type == QssOrganizeType.Association ? "协会" :
                type == QssOrganizeType.School ? "学校" : "临时");
        }

        /// <summary>
        /// Html扩展方法
        /// 显示组织状态
        /// </summary>
        /// <param name="html"></param>
        /// <param name="state">状态</param>
        public static MvcHtmlString GetOrgState(this HtmlHelper html, QssOrganizeState state)
        {
            return new MvcHtmlString(
                state == QssOrganizeState.InAudit ? "审核中" :
                state == QssOrganizeState.NoAudited ? "未审核" :
                state == QssOrganizeState.NotPass ? "审核未通过" : "通过");
        }
    }
}