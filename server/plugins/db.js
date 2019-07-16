var mysql=require("mysql");

// 创建连接池
var pool = mysql.createPool({
  host      : 'localhost',
  user      : 'root',
  password  : 'liujiaxin',
  database  : 'cake_app',
  port      : '3306'
});

// 连接公用方法
var query = function(sql,arr,callback) {
  pool.getConnection(function(err,conn) {
    conn.query(sql,arr,function(err,results/*,fields*/) {
       if (err) throw err;
      //callback(err, null, null);
      //释放连接
      conn.release();
      //事件驱动回调
      callback(err,results/*,fields*/);
    })
  });
};

module.exports = query;
