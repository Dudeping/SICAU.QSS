
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
    /// LetterBll
    /// 实现ILetterBll接口
    /// </summary>
    internal class LetterService : BaseService<Letter>, ILetterService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.LetterDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public LetterService()
        {
            CurrentDal = DbSession.LetterDal;
        }

        /// <summary>
        /// 获取系统消息
        /// </summary>
        /// <param name="type">获取站内信类型</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssGetLetterList(QssGetLetterType type, out string message, out IQueryable<Letter> letters)
        {
            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                letters = null;
                return QssResult.Fail;
            }

            message = "获取成功!";
            letters = DbSession.LetterDal.GetEntities(p => p.Receive.Where(u => u.Id == CurrentUser.Id).Any() && (type == QssGetLetterType.Read ? (p.IsRead.Where(u => u.Id == CurrentUser.Id).Any() && !p.IsDelete.Where(u => u.Id == CurrentUser.Id).Any()) : !p.IsRead.Where(u => u.Id == CurrentUser.Id).Any()));
            return QssResult.Success;
        }

        /// <summary>
        /// 标记已读
        /// </summary>
        /// <param name="id">站内信Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssMarkLetter(QssMarkLetterType type, int id, out string message)
        {
            var letter = DbSession.LetterDal.GetEntities(p => p.Id == id, type == QssMarkLetterType.Read ? "IsRead" : "IsDelete").FirstOrDefault();
            if (letter == null)
            {
                message = "获取该站内信失败!";
                return QssResult.Fail;
            }

            if (CurrentUser == null)
            {
                message = "获取当前用户失败!";
                return QssResult.Fail;
            }

            try
            {
                if (type == QssMarkLetterType.Read) letter.IsRead.Add(CurrentUser);
                else letter.IsDelete.Add(CurrentUser);
                DbSession.LetterDal.Update(letter);
                DbSession.SaveChanges();

                message = "标记成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                QssLogHelper.Log("标记站内信失败", $"将站内信：{letter.Title} 标记为{(type == QssMarkLetterType.Read ? "已读" : "已删除")}时失败! 原因：{exception.Message}", QssLogType.Error, exception);
                message = "标记失败!";
                return QssResult.Success;
            }
        }
    }
}
