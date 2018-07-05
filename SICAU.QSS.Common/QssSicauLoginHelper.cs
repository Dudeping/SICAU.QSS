using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.Common
{
    public class QssSicauLoginHelper
    {
        // 全局Cookie
        private CookieCollection sicauCookie = new CookieCollection();

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="user">账号</param>
        /// <param name="passwd">密码</param>
        /// <param name="type">用户类别 UserType</param>
        /// <returns></returns>
        public bool Login(string user, string passwd, UserType type)
        {
            string code = Regex.Match(GetHtml("http://jiaowu.sicau.edu.cn/web/web/web/index.asp", ""), "dcode2=(\\d*)").Groups[1].Value;
            string html = GetHtml("http://jiaowu.sicau.edu.cn/jiaoshi/bangong/check.asp", "http://jiaowu.sicau.edu.cn/web/web/web/index.asp", $"user={user}&pwd={GetPasswd(code, passwd)}&lb={type.ToString()}&submit=");
            if ((type == UserType.S && Regex.IsMatch(html, "<td\\s*width=\"99\"\\s*align=\"left\">(\\d{8,})</td>")) || (type == UserType.T && Regex.IsMatch(html, "<td\\s*align=\"left\">(\\d{5,})</td>")))
                return true;
            return false;
        }

        /// <summary>
        /// 获得用户信息
        /// 学号,姓名,性别,系别,年级,学制,专业,班级,新专业,新班级,校区
        /// </summary>
        /// <returns></returns>
        public string[] GetStuInfo()
        {
            try
            {
                // 个人信息
                Regex rg = new Regex("<A\\s+class=g_body\\s+href=[^>]*>([^<]*)</a>");
                MatchCollection mc = rg.Matches(GetHtml("http://jiaowu.sicau.edu.cn/xuesheng/dangan/banji/bjiben.asp", "http://jiaowu.sicau.edu.cn/xuesheng/bangong/main/index1.asp"));
                return new string[]
                {
                mc[1].Groups[1].Value,
                mc[2].Groups[1].Value,
                mc[3].Groups[1].Value,
                mc[4].Groups[1].Value,
                mc[8].Groups[1].Value,
                mc[6].Groups[1].Value,
                mc[5].Groups[1].Value,
                mc[9].Groups[1].Value,
                mc[10].Groups[1].Value,
                mc[11].Groups[1].Value,
                // 校区
                Regex.Matches(GetHtml("http://jiaowu.sicau.edu.cn/xuesheng/bangong/main/index1.asp","http://jiaowu.sicau.edu.cn/xuesheng/dangan/banji/bjiben.asp"), "<td\\s*align=\"left\">([^<]{2,3})</td>")[1].Groups[1].Value
                };
            }
            catch (Exception) { return new string[] { }; }
        }

        /// <summary>
        /// 判断是否为学习委员
        /// </summary>
        /// <param name="passwd"></param>
        /// <returns></returns>
        public bool IsCommittee(string passwd)
        {
            try { return GetHtml("http://jiaowu.sicau.edu.cn/xuesheng/xw/kao/mima1.asp", "http://jiaowu.sicau.edu.cn/xuesheng/xw/kao/mima.asp", "mima=" + passwd).Length > 100 ? true : false; }
            catch (Exception) { return false; }
        }

        /// <summary>
        /// 获取教师信息
        /// 校区,姓名,性别,工号,部门,系室
        /// </summary>
        /// <returns></returns>
        public string[] GetThInfo()
        {
            try
            {
                MatchCollection mc = Regex.Matches(GetHtml("http://jiaowu.sicau.edu.cn/jiaoshi/shizi/shizi_js/jiaoshige.asp", "http://jiaowu.sicau.edu.cn/jiaoshi/bangong/main/index1.asp"), "<td\\s*class=g_body\\s*align=left\\s*width=\\d*>([^<]*)</td>");

                return mc.Count > 0
                    ? new string[] { mc[0].Groups[1].Value, mc[1].Groups[1].Value, mc[2].Groups[1].Value, mc[4].Groups[1].Value, mc[5].Groups[1].Value, mc[7].Groups[1].Value }
                    : new string[] { };
            }
            catch (Exception) { return new string[] { }; }

        }

        // 获得加密密码
        private string GetPasswd(string code, string passwd)
        {
            code = (Int64.Parse(code) * 137).ToString();
            string result = "";
            for (int i = 1; i <= passwd.Length; i++)
            {
                string tmpstr = passwd.Substring(i - 1, 1);
                result += ((char)(tmpstr[0] - i - Int32.Parse(code.Substring(i - 1, 1)))).ToString();
            }
            return HttpUtility.UrlEncode(result);
        }

        // 获取页面
        private string GetHtml(string url, string referer, string parameter = null)
        {
            // 创建请求对象
            HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
            // 跳转页面，教务网会判断是否跨页面请求
            request.Referer = referer;
            // 接收类型
            request.Accept = "*/*";
            // 是否允许跳转
            request.AllowAutoRedirect = true;
            // 支持的压缩编码
            request.Headers["Accept-Encoding"] = "gzip, deflate";
            // 使用的压缩类型，和上面参数配合使用
            request.AutomaticDecompression = DecompressionMethods.GZip;
            // 请求的语言
            request.Headers["Accept-Language"] = "zh-CN,zh;q=0.8";
            // 客户端信息
            request.UserAgent = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)";
            // 实例化Cookie容器，若是要接收Cookie，必须实例化
            request.CookieContainer = new CookieContainer();
            if (sicauCookie.Count > 0)
            {
                // 默认一个域长度为20，可能不够
                request.CookieContainer.PerDomainCapacity = sicauCookie.Count;
                request.CookieContainer.Add(sicauCookie);
            }
            // 判断方法
            if (string.IsNullOrWhiteSpace(parameter))
            {
                request.Method = "GET";
            }
            else
            {
                request.Method = "POST";
                request.ContentType = "application/x-www-form-urlencoded";
                using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
                {
                    writer.Write(parameter);
                }
            }

            // 获取响应
            HttpWebResponse response = request.GetResponse() as HttpWebResponse;
            // 更新Cookie
            foreach (Cookie item in response.Cookies)
            {
                sicauCookie.Add(item);
            }
            // 获取返回
            using (StreamReader wr = new StreamReader(response.GetResponseStream(), Encoding.GetEncoding("gb2312")))
            {
                return wr.ReadToEnd();
            }
        }
    }

    /// <summary>
    /// 用户信息处理
    /// 封装模拟登录返回的数据
    /// </summary>
    public class UserInfoHandle
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="userInfo">用户数据</param>
        public UserInfoHandle(string[] userInfo)
        {
            if (userInfo.Length > 6)
            {
                UserType = "S";
                Account = userInfo[0];
                Name = userInfo[1];
                Sex = userInfo[2];
                College = userInfo[3];
                Grade = userInfo[4];
                LoSch = userInfo[5];
                Major = userInfo[6];
                Class = userInfo[7];
                NewMajor = userInfo[8];
                NewClass = userInfo[9];
                Campus = QssEnvironment.SchoolName + userInfo[10] + "校区"; // 统一校区名
            }
            else
            {
                UserType = "T";
                Campus = QssEnvironment.SchoolName + userInfo[0] + "校区"; // 统一校区名
                Name = userInfo[1];
                Sex = userInfo[2];
                Account = userInfo[3];
                College = userInfo[4];
                Department = userInfo[5];
            }
        }

        //教师：校区,姓名,性别,工号,部门,系室
        //学生：学号,姓名,性别,系别,年级,学制,专业,班级,新专业,新班级,校区
        /// <summary>
        /// 用户类型
        /// </summary>
        public string UserType { get; set; }

        /// <summary>
        /// 学号
        /// </summary>
        public string Account { get; private set; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// 性别
        /// </summary>
        public string Sex { get; private set; }

        /// <summary>
        /// 学院/部门
        /// </summary>
        public string College { get; private set; }

        /// <summary>
        /// 系室 作为教师创建组织的参考
        /// </summary>
        public string Department { get; private set; }

        /// <summary>
        /// 年级
        /// </summary>
        public string Grade { get; private set; }

        /// <summary>
        /// 学制
        /// </summary>
        public string LoSch { get; private set; }

        /// <summary>
        /// 专业
        /// </summary>
        public string Major { get; private set; }

        /// <summary>
        /// 班级
        /// </summary>
        public string Class { get; private set; }

        /// <summary>
        /// 新专业
        /// </summary>
        public string NewMajor { get; private set; }

        /// <summary>
        /// 新班级
        /// </summary>
        public string NewClass { get; private set; }

        /// <summary>
        /// 校区
        /// </summary>
        public string Campus { get; private set; }
    }

    // 用户类型
    public enum UserType
    {
        // 学生
        S,
        // 教师
        T
    }
}
