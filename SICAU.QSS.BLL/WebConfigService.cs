using SICAU.QSS.BLLModel;
using SICAU.QSS.Common;
using SICAU.QSS.IBLL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// WebConfigBll
    /// 实现IWebConfigBll接口
    /// </summary>
    public class WebConfigService : BaseService<WebConfig>, IWebConfigService
    {
        /// <summary>
        /// 设置当前Dal
        /// </summary>
        public void SetCurrentDal()
        {
            CurrentDal = DbSession.WebConfigDal;
        }

        /// <summary>
        /// 调用SetCurrentDal
        /// </summary>
        public WebConfigService()
        {
            SetCurrentDal();
        }

        /// <summary>
        /// 获取超级管理员账号
        /// </summary>
        /// <param name="model">超级管理员</param>
        /// <returns>处理结果</returns>
        public QssResult GetAdministrator(out AdministratorModel model)
        {
            var admin = DbSession.WebConfigDal.GetEntities(p => true);
            if (!admin.Any())
            {
                // 账号不存在
                model = null;
                QssLogHelper.Log("管理员账号不存在", "用户以管理员的方式登录,但是账号不存在!账号为:" + model.Account, QssLogType.Error);
                return QssResult.Fail;
            }
            if (admin.Count() > 1)
            {
                string adminId = "";
                foreach (var item in admin)
                {
                    adminId += item.Id + ",";
                }
                // 系统出现严重错误
                QssLogHelper.Log("超级管理员出现多个", "系统出现严重错误,获取到多个管理员信息,Id分别为:" + adminId.TrimEnd(','), QssLogType.Error);
                model = null;
                return QssResult.Error;
            }

            // 正确获取到一个账号且密码正确
            var _admin = admin.FirstOrDefault();
            model = new AdministratorModel()
            {
                Account = _admin.Account,
                Email = _admin.Email,
                Id = _admin.Id,
                Password = _admin.Password,
                Tel = _admin.Tel
            };
            return QssResult.Success;
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="oldPasswd">旧密码</param>
        /// <param name="passwd">新密码</param>
        /// <returns></returns>
        public QssResult ChangePassword(string oldPasswd, string passwd, out string _result)
        {
            QssResult result = GetAdministrator(out AdministratorModel admin);
            // 获取成功
            if (result == QssResult.Success)
            {
                // 旧密码正确
                if (admin.Password == QssMD5Helper.QssGetMd5(admin.Account, oldPasswd))
                {
                    try
                    {
                        var config = DbSession.WebConfigDal.GetEntities(p => true).FirstOrDefault();
                        config.Password = QssMD5Helper.QssGetMd5(admin.Account, passwd);
                        DbSession.WebConfigDal.Update(config);
                        // 保存新密码
                        DbSession.SaveChanges();

                        // 修改密码成功
                        _result = "修改密码成功!";
                        return QssResult.Success;
                    }
                    catch (Exception exception)
                    {
                        // 保存失败
                        QssLogHelper.Log("修改密码错误", "超级管理员在修改密码时保存新密码出现错误!错误原因: " + exception.Message, QssLogType.Error, exception);
                        _result = "修改密码失败!请重试.";
                        return QssResult.Fail;
                    }
                }

                // 旧密码错误
                QssLogHelper.Log("管理员密码错误", "超级管理员在修改密码,但是旧密出现错误! ", QssLogType.Warn);
                _result = "旧密码错误!登录已被注销.";
                return QssResult.Error;
            }

            // 没有正确获取到管理员
            _result = "系统出现严重错误!请查看日志.";
            return QssResult.Error;
        }
    }
}
