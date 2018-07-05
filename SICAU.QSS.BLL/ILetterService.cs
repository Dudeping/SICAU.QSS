
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
    /// ILetterBll接口
    /// 用于约束LetterBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface ILetterService:IBaseService<Letter>
    {
        /// <summary>
        /// 获取系统消息
        /// </summary>
        /// <param name="type"></param>
        /// <param name="message"></param>
        /// <returns></returns>
        QssResult QssGetLetterList(QssGetLetterType type, out string message, out IQueryable<Letter> letters);

        /// <summary>
        /// 标记已读
        /// </summary>
        /// <param name="type">标记状态类型</param>
        /// <param name="id">站内信Id</param>
        /// <param name="message"></param>
        /// <returns></returns>
        QssResult QssMarkLetter(QssMarkLetterType type, int id, out string message);
    }
}
