using SICAU.QSS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.IBLL
{
    /// <summary>
    /// IVoteOptionBll接口
    /// 用于约束VoteOptionBll，并让UI层依赖与该接口，降低耦合
    /// </summary>
    public interface IVoteOptionService : IBaseService<VoteOption>
    {
    }
}
