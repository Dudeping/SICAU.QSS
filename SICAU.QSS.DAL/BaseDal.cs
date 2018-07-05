using SICAU.QSS.Common;
using SICAU.QSS.IDAL;
using SICAU.QSS.Model;
using SICAU.QSS.ModelFactory;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SICAU.QSS.DAL
{
    /// <summary>
    /// 将各个Dal的共同方法抽离到此类中
    /// </summary>
    /// <typeparam name="T">当前操作的数据实体</typeparam>
    public class BaseDal<T> where T : class, new()
    {
        /// <summary>
        /// 为当前HTTP请求获取用户安全信息
        /// </summary>
        public System.Security.Principal.IPrincipal User => HttpContext.Current.User;
        // 当前数据库上下文
        public QssDbContext Db => QssDbContextFactory.GetCurrentDbContext();

        #region CRUD
        /// <summary>
        /// 增加一个实体
        /// </summary>
        /// <param name="entity">要增加的实体</param>
        /// <returns></returns>
        public T Add(T entity)
        {
            Db.Set<T>().Add(entity);
            return entity;
        }

        /// <summary>
        /// 增加一堆实体
        /// </summary>
        /// <param name="entities">实体集合</param>
        /// <returns></returns>
        public int AddRange(IEnumerable<T> entities)
        {
            Db.Set<T>().AddRange(entities);
            return entities.Count();
        }

        /// <summary>
        /// 删除一个实体
        /// </summary>
        /// <param name="entity">要删除的实体</param>
        /// <returns></returns>
        public int Delete(T entity)
        {
            Db.Entry(entity).State = System.Data.Entity.EntityState.Deleted;
            return 1;
        }

        /// <summary>
        /// 按主键删除实体
        /// </summary>
        /// <param name="keyValues">要删除实体的主键</param>
        /// <returns></returns>
        public int Delete(params object[] keyValues)
        {
            var entity = GetEntity(keyValues);
            if (entity != null)
            {
                Delete(entity);
            }
            return 1;
        }

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        public int DeleteRange(IQueryable<T> entities)
        {
            Db.Set<T>().RemoveRange(entities);
            return 1;
        }

        /// <summary>
        /// 删除一系列实体
        /// 从基础化集的上下文中删除给定实体集合（每个实体都置于“已删除”状态），这样当调用 SaveChanges 时，会从数据库中删除它。
        /// </summary>
        /// <param name="entities">要删除的实体集合。</param>
        /// <returns></returns>
        public int DeleteRange(IEnumerable<T> entities)
        {
            Db.Set<T>().RemoveRange(entities);
            return 1;
        }

        /// <summary>
        /// 更新实体
        /// </summary>
        /// <param name="entity">要更新的实体</param>
        /// <returns></returns>
        public int Update(T entity)
        {
            //Db.Entry(entity).State = System.Data.Entity.EntityState.Modified; //此代码会报错
            Db.Set<T>().AddOrUpdate(entity);
            return 1;
        }

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="keyValues">要获取的实体的主键</param>
        /// <returns></returns>
        public T GetEntity(params object[] keyValues)
        {
            return Db.Set<T>().Find(keyValues);
        }

        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <returns></returns>
        public IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate)
        {
            return Db.Set<T>().Where(predicate);
        }
        
        /// <summary>
        /// 获取实体
        /// </summary>
        /// <param name="predicate">要获取的实体的Lambda表达式</param>
        /// <param name="includes">Include参数</param>
        /// <returns></returns>
        public IQueryable<T> GetEntities(Expression<Func<T, bool>> predicate, params string[] includes)
        {
            DbQuery<T> query = Db.Set<T>();
            foreach (var item in includes)
            {
                query = query.Include(item);
            }

            return includes.Length == 0 ? Db.Set<T>().Where(predicate) : query.Where(predicate);
        }

        /// <summary>
        /// 根据账号获取用户
        /// </summary>
        /// <returns>处理结果</returns>
        protected QssResult QssGetUserByAccount(string account, out User _user)
        {
            // 获取用户
            //var user = Db.Users.Include("Role").Include("JoinOrganizes").Where(p => p.Account == account);
            var user = Db.Users.Where(p => p.Account == account);

            // 用户不存在
            if (!user.Any())
            {
                _user = null;
                return QssResult.Fail;
            }
            // 一个账号多次注册
            if (user.Count() > 1)
            {
                // 获取共用该账号的所有Id
                string strUser = "";
                foreach (var u in user)
                {
                    strUser += u.Id + ",";
                }
                // 记录错误
                QssLogHelper.Log("账号被多次注册", "账号：" + account + "被多次注册! Id[" + strUser.TrimEnd(',') + "].", QssLogType.Error);
                _user = null;
                return QssResult.Error;
            }

            _user = user.FirstOrDefault();
            return QssResult.Success;
        }

        /// <summary>
        /// 保存上下文
        /// 用于测试
        /// </summary>
        public void SaveChanges()
        {
            Db.SaveChanges();
        }

        /// <summary>
        /// 通过使用默认的相等比较器对值进行比较，生成两个序列的差集
        /// </summary>
        /// <param name="source2">一个序列,其中的出现在第一个序列中的非重复元素将返回</param>
        /// <returns></returns>
        public IQueryable<T> Intersect(IEnumerable<T> source2)
        {
            return Db.Set<T>().Intersect(source2);
        }
        #endregion
    }
}
