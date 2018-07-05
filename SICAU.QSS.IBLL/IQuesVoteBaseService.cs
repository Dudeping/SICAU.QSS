using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IBLL
{
    /// <summary>
    /// IVoteBll接口, 用于约束VoteBll
    /// </summary>
    public interface IQuesVoteBaseService<T>
    {
        /// <summary>
        /// 获取问卷/投票列表
        /// </summary>
        /// <param name="type">获取类型</param>
        /// <param name="message">处理结果信息</param>
        /// <param name="quesList">获取到的问卷/投票列表</param>
        /// <returns></returns>
        QssResult GetList(QssGetQuesVoteType type, string searchStr, out string message, out IEnumerable<QuesAndVoteModel> qvList);

        /// <summary>
        /// 获取问卷/投票
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <returns></returns>
        string QssGetContent(int qvid);

        /// <summary>
        /// 获取填写记录
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <returns></returns>
        string QssGetWtLog(int qvid);

        /// <summary>
        /// 获取问卷/投票结果
        /// </summary>
        /// <param name="qvid">填写记录Id</param>
        /// <returns></returns>
        string QssGetResult(int qvid);

        /// <summary>
        /// 获取问卷/投票确认列表
        /// Error：跳转
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <param name="orgList">处理结果</param>
        /// <returns></returns>
        QssResult QssGetConfirmList(out string message, out IQueryable<ConfirmManageModel> qvList);

        /// <summary>
        /// 标记问卷/投票正在确认中
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message"></param>
        /// <returns></returns>
        QssResult QssMarkInConfirm(int qvid, out string message);

        /// <summary>
        /// 确认通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkConfirmPass(int qvid, out string message);

        /// <summary>
        /// 确认不通过
        /// </summary>
        /// <param name="qvid"></param>
        /// <param name="reason"></param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkConfirmNotPass(int qvid, string reason, out string message);

        /// <summary>
        /// 获取审核的问卷/投票列表
        /// </summary>
        /// <returns></returns>
        IQueryable<AuditManageModel> QssGetAuditList();

        /// <summary>
        /// 标记问卷/投票正在审核
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkInAudit(int qvid, out string message);

        /// <summary>
        /// 审核通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkAuditPass(int qvid, out string message);

        /// <summary>
        /// 审核不通过
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="reason">不通过原因</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult QssMarkAuditNotPass(int qvid, string reason, out string message);

        /// <summary>
        /// 结束问卷/投票
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult EndQuesVote(int qvid, out string message);

        /// <summary>
        /// 开始问卷/投票
        /// </summary>
        void StartQuesVote();

        /// <summary>
        /// 检查填写问卷/投票权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult CheckWtAuth(int qvid, out T qv, out string message);

        /// <summary>
        /// 检查查看问卷/投票记录权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult CheckWtLogAuth(int qvid, out string qvlog, out string message);

        /// <summary>
        /// 检查查看问卷/投票结果权限
        /// </summary>
        /// <param name="qvid">问卷/投票Id</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        QssResult CheckResultAuth(int qvid, out string qvrel, out string message);
    }
}
