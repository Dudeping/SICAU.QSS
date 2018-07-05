using SICAU.QSS.DAL;


using SICAU.QSS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.BLL
{
    /// <summary>
    /// 将各个Bll的共同方法抽离到此类中
    /// </summary>
    /// <typeparam name="T">当前操作的数据实体</typeparam>
    internal class BaseService<T>
    {
        /// <summary>
        /// 当前会话
        /// </summary>
        public IQssDbSession DbSession { get; set; } = StaticDalFactory.GetCurrentDbSession();
        /// <summary>
        /// 当前Dal，需在子类中设置
        /// </summary>
        public IBaseDal<T> CurrentDal { get; set; }
        /// <summary>
        /// 当前登录用户
        /// </summary>
        public User CurrentUser
        {
            get
            {
                if (currentUser == null) currentUser = DbSession.UserDal.GetCurrentUser();
                return currentUser;
            }
        }
        private User currentUser;
        /// <summary>
        /// 为当前HTTP请求获取用户安全信息
        /// </summary>
        public System.Security.Principal.IPrincipal User => HttpContext.Current.User;

        #region CRUD
        /// <summary>
        /// 增加一个实体
        /// </summary>
        /// <param name="entity">要增加的实体</param>
        /// <returns></returns>
        public T Add(T entity)
        {
            CurrentDal.Add(entity);
            DbSession.SaveChanges();
            return entity;
        }

        /// <summary>
        /// 增加一堆实体
        /// </summary>
        /// <param name="entities">实体集合</param>
        /// <returns></returns>
        public int AddRange(IEnumerable<T> entities)
        {
            CurrentDal.AddRange(entities);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 删除一个实体
        /// </summary>
        /// <param name="entity">要删除的实体</param>
        /// <returns></returns>
        public int Delete(T entity)
        {
            CurrentDal.Delete(entity);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 按主键删除实体
        /// </summary>
        /// <param name="keyValues">要删除实体的主键</param>
        /// <returns></returns>
        public int Delete(params object[] keyValues)
        {
            CurrentDal.Delete(keyValues);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        public int DeleteRange(IQueryable<T> entities)
        {
            CurrentDal.DeleteRange(entities);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        public int DeleteRange(IEnumerable<T> entities)
        {
            CurrentDal.DeleteRange(entities);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 更新实体
        /// </summary>
        /// <param name="entity">要更新的实体</param>
        /// <returns></returns>
        public int Update(T entity)
        {
            CurrentDal.Update(entity);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="keyValues">要获取的实体的主键</param>
        /// <returns></returns>
        public T GetEntity(params object[] keyValues) => CurrentDal.GetEntity(keyValues);

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <returns></returns>
        public IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate) => CurrentDal.GetEntities(predicate);

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <param name="includes">Include参数</param>
        /// <returns></returns>
        public IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate, params string[] includes) => CurrentDal.GetEntities(predicate, includes);

        /// <summary>
        /// 返回序列中的元素数
        /// </summary>
        /// <returns></returns>
        public int Count() => CurrentDal.GetEntities(p => true).Count();

        /// <summary>
        /// 返回一个数字表示在一个序列中有多少个元素满足条件
        /// </summary>
        /// <param name="predicate">筛选条件</param>
        /// <returns></returns>
        public int Count(Func<T, bool> predicate) => CurrentDal.GetEntities(p => true).Count(predicate);
        #endregion
    }
}
