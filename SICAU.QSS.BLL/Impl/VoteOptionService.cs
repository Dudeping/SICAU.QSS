using Newtonsoft.Json.Linq;

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
    /// VoteOptionBll
    /// 实现IVoteOptionBll接口
    /// </summary>
    internal class VoteOptionService : BaseService<VoteOption>, IVoteOptionService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.VoteOptionDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public VoteOptionService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 创建投票选项
        /// </summary>
        /// <param name="voteOption">投票选项</param>
        /// <param name="user">当前用户</param>
        /// <param name="vote">当前投票</param>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult QssCreateVoteOption(JArray options, User user, Vote vote, out string message)
        {
            List<VoteOption> entities = new List<VoteOption>();
            foreach (JObject item in options)
            {
                entities.Add(new VoteOption() { Content = (string)item["Content"], Vote = vote });
            }

            try
            {
                CurrentDal.AddRange(entities);
                DbSession.SaveChanges();

                message = "保存投票选项成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "保存投票选项失败!";
                QssLogHelper.Log("保存投票选项失败", $"在保存投票: {vote.Title} 时失败! 原因：{exception.Message}", QssLogType.Error, exception, $"{user.Account}({user.Name})");
                throw;
            }
        }

        /// <summary>
        /// 保存投票填写记录
        /// </summary>
        /// <param name="options">投票选项</param>
        /// <param name="vote">当前投票</param>
        /// <param name="wtOptions">填写记录</param>
        /// <param name="message"></param>
        /// <returns></returns>
        public QssResult QssSaveVoteWtLog(JArray options, Vote vote, out List<GetWtVoteOption> wtOptions, out string message)
        {
            // 答案选项
            wtOptions = options.Select(x => new GetWtVoteOption { Id = Convert.ToInt32(x["Id"]) }).ToList();

            // 校验数量
            if (vote.MaxNum < wtOptions.Count())
            {
                message = "投票个数超过了指定的个数!";
                wtOptions = null;
                return QssResult.Fail;
            }

            // 保存
            foreach (var item in wtOptions)
            {
                var option = vote.VoteOptions.FirstOrDefault(v => v.Id == item.Id);
                if (option == null)
                {
                    wtOptions = null;
                    message = "获取选项失败！";
                    QssLogHelper.Log("获取选项失败", "在保存填写记录时，获取投票选项失败！", QssLogType.Error);
                    return QssResult.Fail;
                }
                option.Num++;
                CurrentDal.Update(option);
            }

            try
            {
                DbSession.SaveChanges();

                message = "保存填写记录成功!";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "保存填写记录失败!";
                QssLogHelper.Log("保存投票选项失败", "在保存填写记录时，保存投票选项记录失败！", QssLogType.Error, exception);
                return QssResult.Fail;
            }
        }
    }
}
