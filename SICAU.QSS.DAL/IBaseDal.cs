using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 将各IDal的公共约束抽离到此接口中
    /// </summary>
    /// <typeparam name="T">当前操作的数据实体</typeparam>
    public interface IBaseDal<T>
    {
        // 当前数据库上下文
        QssDbContext Db { get; }

        #region CRUD
        /// <summary>
        /// 增加一个实体
        /// </summary>
        /// <param name="entity">要增加的实体</param>
        /// <returns></returns>
        T Add(T entity);

        /// <summary>
        /// 增加一堆实体
        /// </summary>
        /// <param name="entities">实体集合</param>
        /// <returns></returns>
        int AddRange(IEnumerable<T> entities);

        /// <summary>
        /// 删除一个实体
        /// </summary>
        /// <param name="entity">要删除的实体</param>
        /// <returns></returns>
        int Delete(T entity);

        /// <summary>
        /// 按主键删除实体
        /// </summary>
        /// <param name="keyValues">要删除实体的主键</param>
        /// <returns></returns>
        int Delete(params object[] keyValues);

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        int DeleteRange(IQueryable<T> entities);

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        int DeleteRange(IEnumerable<T> entities);

        /// <summary>
        /// 更新实体
        /// </summary>
        /// <param name="entity">要更新的实体</param>
        /// <returns></returns>
        int Update(T entity);

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="keyValues">要获取的实体的主键</param>
        /// <returns></returns>
        T GetEntity(params object[] keyValues);

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <returns></returns>
        IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate);

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <param name="includes">Include参数</param>
        /// <returns></returns>
        IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate, params string[] includes);

        /// <summary>
        /// 保存上下文
        /// 用于测试
        /// </summary>
        void SaveChanges();

        /// <summary>
        /// 通过使用默认的相等比较器对值进行比较，生成两个序列的差集
        /// </summary>
        /// <param name="source2">一个序列,其中的出现在第一个序列中的非重复元素将返回</param>
        /// <returns></returns>
        IQueryable<T> Intersect(IEnumerable<T> source2);
        #endregion
    }
}
