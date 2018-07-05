﻿using SICAU.QSS.IDAL;
using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 实现IQuesOptionDal接口
    /// 用于降低Dal层和Bll层之间的耦合
    /// </summary>
    public class QuesOptionDal : BaseDal<QuesOption>, IQuesOptionDal
    {
    }
}