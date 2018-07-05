using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IDAL
{
    public interface IQuesVoteBaseDal
    {
        /// <summary>
        /// 获取问卷/投票列表
        /// </summary>
        /// <param name="type">获取类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="uid">当前用户Id</param>
        /// <param name="quesList">获取到的问卷/投票列表</param>
        /// <returns></returns>
        QssResult GetList(QssGetQuesVoteType type, string searchStr, out string message, out int uid, out IQueryable<QuesAndVoteModel> quesList);
    }
}
