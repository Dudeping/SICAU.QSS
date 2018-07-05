using SICAU.QSS.Common;
using SICAU.QSS.DALFactory;
using SICAU.QSS.IDAL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL.Common
{
    /// <summary>
    /// 发送问卷/投票状态更改通知(邮件和站内信)
    /// </summary>
    public class QssSendQvLetterEmail<T> where T : QuesVoteBase
    {
        /// <summary>
        /// 当前上下文对象
        /// </summary>
        private IQssDbSession DbSession { get; set; } = StaticDalFactory.GetCurrentDbSession();
        /// <summary>
        /// 提示文本
        /// </summary>
        private string qvText;
        /// <summary>
        /// 当前问卷/投票
        /// </summary>
        private T currentQv;
        /// <summary>
        /// 当前问卷/投票创建者
        /// </summary>
        private User currentQvCreator;
        /// <summary>
        /// 接收者
        /// </summary>
        private List<User> receives = new List<User>();
        /// <summary>
        /// 其他信息
        /// </summary>
        private string title = "", content = "", creatorTitle = "", creatorContent = "", message = "获取信息成功!";

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="currentQv">问卷/投票</param>
        /// <param name="currentDal">当前Dal</param>
        public QssSendQvLetterEmail(T currentQv)
        {
            qvText = currentQv is Question ? "问卷" : "投票";
            this.currentQv = currentQv;
        }

        /// <summary>
        /// 发送站内信和邮件
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        public QssResult Send(out string message)
        {
            // 获取信息
            if (GetMessage() != QssResult.Success)
            {
                message = this.message;
                return QssResult.Fail;
            }

            // 发送邮件
            List<EmailModel> emailList = new List<EmailModel>();
            foreach (var item in receives)
            {
                emailList.Add(new EmailModel { ToEmail = item.Email, ToName = item.Name, Subject = title, BodyInfo = content });
            }
            if (currentQvCreator != null) emailList.Add(new EmailModel { ToEmail = currentQvCreator.Email, ToName = currentQvCreator.Name, Subject = creatorTitle, BodyInfo = creatorContent });
            QssEmailHelper.EnqueueEamil(emailList);

            // 发送站内信
            try
            {
                if (currentQvCreator != null) DbSession.LetterDal.Add(new Letter { Title = creatorTitle, Content = creatorContent, CreateTime = DateTime.Now, Receive = new List<User> { currentQvCreator } });
                DbSession.LetterDal.Add(new Letter { Title = title, Content = content, CreateTime = DateTime.Now, Receive = receives });
                DbSession.SaveChanges();
                // 发送成功
                message = $"{qvText} {currentQv.Title} 状态更改成功！";
                return QssResult.Success;
            }
            catch (Exception exception)
            {
                message = "发送站内信失败!";
                QssLogHelper.Log("发送站内信失败", $"更改{qvText} {currentQv.Title} 状态后，发送站内信失败！失败原因：{exception}", QssLogType.Error);
                return QssResult.Fail;
            }
        }

        /// <summary>
        /// 获取信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetMessage()
        {
            return
                currentQv.State == QssQuesAndVoteState.Pass ? GetPassMessage() :
                currentQv.State == QssQuesAndVoteState.Write ? GetWriteMessage() :
                currentQv.State == QssQuesAndVoteState.InAudit ? GetInAuditMessage() :
                currentQv.State == QssQuesAndVoteState.NotPass ? GetNotPassMessage() :
                currentQv.State == QssQuesAndVoteState.NoCreate ? GetNoCreateMessage() :
                currentQv.State == QssQuesAndVoteState.NoAudited ? GetNoAuditedMessage() :
                currentQv.State == QssQuesAndVoteState.InConfirm ? GetInConfirmMessage() :
                currentQv.State == QssQuesAndVoteState.NotConfirm ? GetNotConfirmMessage() :
                GetEndMessage();
        }

        /// <summary>
        /// 获取未确认状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetNoCreateMessage()
        {
            // 获取组织管理员
            if (GetOrgAdmin(GetOrgAdminType.orgAdmin) != QssResult.Success) return QssResult.Fail;

            // 确认问卷/投票链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = "/Users/AuditManage", Query = "type=confim" }.ToString();
            title = $"收到一个{qvText}确认任务";
            content = $"您管理的组织提交了一份{qvText}调查，请点击 <a target='_blank' href='{url}'> 此处 </a> 确认！";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取确认中状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetInConfirmMessage()
        {
            // 获取创建者
            if (GetCreator(true) != QssResult.Success) return QssResult.Fail;

            title = $"{qvText}正在确认";
            content = $"您创建的{qvText}: {currentQv.Title}，正在由所属组织的组织管理员确认，请稍后！";

            return QssResult.Success;
        }

        /// <summary>
        /// 获取确认不通过状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetNotConfirmMessage()
        {
            // 获取创建者
            if (GetCreator(true) != QssResult.Success) return QssResult.Fail;

            // 修改问卷/投票链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = $"/{(currentQv is Question ? "Question" : "Vote")}/Edit/" + currentQv.Id }.ToString();
            title = $"{qvText}未通过确认";
            content = $"您创建的{qvText}: {currentQv.Title}，被所属组织管理员驳回，因为：{currentQv.Reason}!<br/>点击 <a target='_blank' href='{url}'> 此处 </a>进行修改。";

            message = "获取信息成功!";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取未审核状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetNoAuditedMessage()
        {
            // 系统管理员
            var sysAdmin = DbSession.UserDal.GetEntities(p => p.Role.Name == QssRoleType.SysAdmin.ToString());
            if (!sysAdmin.Any())
            {
                message = "未添加系统管理员！";
                QssLogHelper.Log("获取系统管理员失败", $"将{qvText} {currentQv.Id} 提交给系统管理员时，未获取到系统管理员，应该尚未添加系统管理员！", QssLogType.Error);
                return QssResult.Fail;
            }
            receives.AddRange(sysAdmin);

            // 系统管理员接收链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = "/Users/AuditManage" }.ToString();
            title = $"收到一个{qvText}审核任务";
            content = $"您收到一个{qvText}审核任务，请点击 <a target='_blank' href='{url}'> 此处 </a> 进行审核！";

            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核中状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetInAuditMessage()
        {
            // 获取创建者
            if (GetCreator(true) != QssResult.Success) return QssResult.Fail;

            title = $"{qvText}正在审核";
            content = $"您创建的{qvText}: {currentQv.Title}，正在由系统管理员审核，请稍后！";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核未通过状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetNotPassMessage()
        {
            // 获取创建者
            if (GetCreator(true) != QssResult.Success) return QssResult.Fail;

            // 修改问卷/投票链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = $"/{(currentQv is Question ? "Question" : "Vote")}/Edit/" + currentQv.Id }.ToString();
            title = $"{qvText}审核未通过";
            content = $"您创建的{qvText}: {currentQv.Title}，审核未通过！因为：{currentQv.Reason}!<br/>点击 <a target='_blank' href='{url}'> 此处 </a>进行查看。";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取审核通过状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetPassMessage()
        {
            // 获取创建者
            if (GetCreator(true) != QssResult.Success) return QssResult.Fail;
            
            title = $"{qvText}通过审核";
            content = $"您创建的{qvText}: {currentQv.Title}，已通过审核，系统将在{qvText}开始后发送邮件和站内信通知所有可以填写的用户！";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取开始填写状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetWriteMessage()
        {
            // 获取创建者
            if (GetCreator(false) != QssResult.Success) return QssResult.Fail;

            // 填写问卷/投票链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = $"/{(currentQv is Question ? "Question/WtQuestion" : "Vote/WtVote")}/" + currentQv.Id }.ToString();
            creatorTitle = $"{qvText}已开始填写";
            creatorContent = $"您创建的{qvText}：{currentQv.Title}, 已经开始填写，请将以下链接发送给可以填写的用户进行填写。<br/> <a target='_blank' href='{url}'> {url} </a>";
            // 可填写的组织管理员
            if (GetOrgAdmin(GetOrgAdminType.wtOrgAdmin) != QssResult.Success) return QssResult.Fail;

            title = $"有一份您管理的组织可以填写的{qvText}";
            content = $"{qvText}: {currentQv.Title}，已开始填写，截止时间为：{currentQv.EndTime}！此{qvText}你管理的组织有权限填写，请将以下链接通过QQ群等发送给该组织内成员进行填写<br><a target='_blank' href='{url}'> {url} </a>。";
            return QssResult.Success;
        }

        /// <summary>
        /// 获取结束状态下的信息
        /// </summary>
        /// <param name="message">处理结果信息</param>
        /// <returns></returns>
        private QssResult GetEndMessage()
        {
            // 获取创建者
            if (GetCreator(false) != QssResult.Success) return QssResult.Fail;

            // 问卷/投票结果链接
            var url = new UriBuilder(ConfigurationManager.AppSettings["SendEmailUrl"]) { Path = $"/{(currentQv is Question ? "Question/ResultDetail" : "Vote/ResultDetail")}/" + currentQv.Id }.ToString();
            creatorTitle = $"{qvText}已结束";
            creatorContent = $"您创建的{qvText}：{currentQv.Title}, 已结束，结果已经生成，请点击 <a target='_blank' href='{url}'> 此处 </a> 进行查看。";
            // 可查看的组织管理员
            if (GetOrgAdmin(GetOrgAdminType.rdOrgAdmin) != QssResult.Success) return QssResult.Fail;

            title = $"有一份您管理的组织可以查看结果的{qvText}";
            content = $"{qvText}: {currentQv.Title}，发送结果！此{qvText}结果你管理的组织有权限查看，请将以下链接通过QQ群等发送给该组织内成员进行查看<br><a target='_blank' href='{url}'> {url} </a>。";

            return QssResult.Success;
        }

        /// <summary>
        /// 获取问卷/投票创建者
        /// </summary>
        /// <param name="isReceive">创建者是否为接收者</param>
        /// <returns></returns>
        private QssResult GetCreator(bool isReceive)
        {
            // 创建者
            User creator = currentQv.Creator;
            if (creator == null)
            {
                message = $"获取{qvText}创建者失败！";
                QssLogHelper.Log($"获取{qvText}创建者失败", $"在发送站内信和邮件时，获取{qvText}的创建者失败！{qvText}：{currentQv.Id} ", QssLogType.Error);
                return QssResult.Fail;
            }

            if (isReceive) receives.Add(creator);
            else currentQvCreator = creator;
            return QssResult.Success;
        }

        /// <summary>
        /// 获取组织管理员
        /// </summary>
        /// <param name="type">管理员类型</param>
        /// <returns></returns>
        private QssResult GetOrgAdmin(GetOrgAdminType type)
        {
            List<Organize> orgList = new List<Organize>();
            if (type == GetOrgAdminType.orgAdmin)
            {
                var org = DbSession.OrganizeDal.GetEntities(p => p.Id == currentQv.BelongTo, "Admin").FirstOrDefault();
                if (org != null) orgList.Add(org);
            }
            else
            {
                // 获取可填写组织和可查看组织
                if (type== GetOrgAdminType.rdOrgAdmin)
                    orgList.AddRange(currentQv is Question ? DbSession.QuestionDal.GetRdOrg(currentQv as Question) : DbSession.VoteDal.GetRdOrg(currentQv as Vote));
                else
                    orgList.AddRange(currentQv is Question ? DbSession.QuestionDal.GetWtOrg(currentQv as Question) : DbSession.VoteDal.GetWtOrg(currentQv as Vote));
            }

            if (!orgList.Any())
            {
                message = "获取组织失败！";
                QssLogHelper.Log("获取组织失败", $"在发送站内信和邮件时，获取组织失败！{qvText}：{currentQv.Id} ", QssLogType.Error);
                return QssResult.Fail;
            }

            var orgAIds = orgList.Select(x => x.Admin.Id);
            var orgAdmin = DbSession.UserDal.GetEntities(p => orgAIds.Contains(p.Id));
            if (!orgAdmin.Any())
            {
                message = "获取组织管理员失败！";
                QssLogHelper.Log("获取组织管理员失败", $"在发送站内信和邮件时，获取组织成功，但是获取组织管理员却失败了！{qvText}：{currentQv.Id} ", QssLogType.Error);
                return QssResult.Fail;
            }
            receives.AddRange(orgAdmin);
            return QssResult.Success;
        }

        /// <summary>
        /// 获取组织管理员类别
        /// </summary>
        private enum GetOrgAdminType
        {
            /// <summary>
            /// 组织管理员
            /// </summary>
            orgAdmin,
            /// <summary>
            /// 可查看组织管理员
            /// </summary>
            rdOrgAdmin,
            /// <summary>
            /// 可填写组织管理员
            /// </summary>
            wtOrgAdmin
        }
    }
}