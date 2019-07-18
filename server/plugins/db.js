var mysql=require("mysql");

// 创建连接池
var pool = mysql.createPool({
  host      : 'rm-wz9w3j3gv70r5e60i7o.mysql.rds.aliyuncs.com',
  user      : 'web1903',
  password  : 'app_cake1903',
  database  : 'app_cake',
  port      : '3306',
  multipleStatements: true
});

// 连接公用方法
var query = function(sql,arr,callback) {
  pool.getConnection(function(err,conn) {
    conn.query(sql,arr,function(err,results/*,fields*/) {
       if (err) throw err;
      //callback(err, null, null);
      //释放连接
      conn.release();
      // pool.releaseConnection();
      //事件驱动回调
      callback(err,results/*,fields*/);
    })
  });
};

module.exports = query;
