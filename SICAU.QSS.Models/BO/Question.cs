using SICAU.QSS.Common;
using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.Models
{
    #region 显示问卷调查模型
    /// <summary>
    /// 显示问卷模型
    /// </summary>
    public class GetQuestionModel
    {
        /// <summary>
        /// 问卷整体说明
        /// </summary>
        public GetQuesGlobal Global { get; set; }

        /// <summary>
        /// 问卷题目
        /// </summary>
        public GetQuesSubject[] Subjects { get; set; }
    }

    /// <summary>
    /// 问卷整体说明
    /// </summary>
    public class GetQuesGlobal
    {
        /// <summary>
        /// 问卷Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 问卷标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 问卷简介
        /// </summary>
        public string Introduct { get; set; }

        /// <summary>
        /// 问卷是否属于组织
        /// </summary>
        public bool IsBelongOrganize { get; set; }

        /// <summary>
        /// 问卷所属组织/个人Id
        /// </summary>
        public int BelongTo { get; set; }

        /// <summary>
        /// 发布者 组织名/用户名
        /// </summary>
        public string Publisher { get; set; }

        /// <summary>
        /// 问卷题目数
        /// </summary>
        public int Num { get; set; }

        /// <summary>
        /// 问卷开始时间
        /// </summary>
        public DateTime BeginTime { get; set; }

        /// <summary>
        /// 问卷结束时间
        /// </summary>
        public DateTime EndTime { get; set; }
    }

    /// <summary>
    /// 问卷题目
    /// </summary>
    public class GetQuesSubject
    {
        /// <summary>
        /// 问卷题目Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 问卷题目类型
        /// QuesSubType
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// 问卷题目选项数
        /// </summary>
        public int Num { get; set; }

        /// <summary>
        /// 题目
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// 问卷题目选项
        /// </summary>
        public GetQuesOption[] Options { get; set; }
    }

    /// <summary>
    /// 问卷题目选项
    /// </summary>
    public class GetQuesOption
    {
        /// <summary>
        /// 选项Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 选项内容
        /// </summary>
        public string Content { get; set; }
    }
    #endregion

    #region 获取问卷填写记录模型
    /// <summary>
    /// 获取填写记录模型
    /// </summary>
    public class GetWtQuesModel
    {
        /// <summary>
        /// 问卷整体说明
        /// </summary>
        public GetQuesGlobal Global { get; set; }

        /// <summary>
        /// 问卷题目
        /// </summary>
        public GetWtQuesSubject[] Subjects { get; set; }
    }

    /// <summary>
    /// 填写记录题目模型
    /// </summary>
    public class GetWtQuesSubject : GetQuesSubject
    {
        /// <summary>
        /// 客观题答案
        /// </summary>
        public GetWtQuesOption[] ObjAnswers { get; set; }

        /// <summary>
        /// 主观题答案
        /// </summary>
        public string SubAnswers { get; set; }
    }

    /// <summary>
    /// 客观题答案Id
    /// </summary>
    public class GetWtQuesOption
    {
        /// <summary>
        /// 选项Id
        /// </summary>
        public int Id { get; set; }
    }
    #endregion

    #region 获取问卷调查结果模型
    /// <summary>
    /// 获取问卷调查结果模型
    /// </summary>
    public class GetResultQuesModel
    {
        /// <summary>
        /// 问卷整体说明
        /// </summary>
        public GetQuesGlobal Global { get; set; }

        /// <summary>
        /// 问卷题目
        /// </summary>
        public GetResultQuesSubject[] Subjects { get; set; }
    }

    /// <summary>
    /// 问卷题目
    /// </summary>
    public class GetResultQuesSubject : GetQuesSubject
    {
        /*
         * 这里本来需要定义一个GetResultQuesOption类型的Options，但是可以直接将GetResultQuesOption的对象装在父类的GetQuesOption变量中，所以不用声明
         * 如果是这里再声明一个Options反而麻烦，因为需要使用new关键字影藏，但是影藏了之后并没有删除，该字段一直存在，那么字啊进行Json序列化时便会序列化两个Options对象
         * 这时使用JavaScript的来读取该序列化之后的结果就会导致读到的Options为null
         */

        /// <summary>
        /// 主观题答案
        /// </summary>
        public string SubAnswers { get; set; }
    }

    /// <summary>
    /// 问卷题目选项
    /// </summary>
    public class GetResultQuesOption : GetQuesOption
    {
        /// <summary>
        /// 被选次数
        /// </summary>
        public int Num { get; set; }

    }
    #endregion
}
