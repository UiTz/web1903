const express = require('express');
const app = express();
const query = require('./plugins/db.js');
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./plugins/sqlquery');

// 引入静态目录
app.use(express.static('public'));

// 用户删除
app.get('/admin/api/deluser',(req,res)=>{
  // 防止跨域，测试时使用
  res.header('Access-Control-Allow-Origin','*');
  console.log('有删除用户请求');
  console.log(req.query.uid);
  var uid = req.query.uid;
  var sql = "DELETE FROM pj_user WHERE uid = ?";
  query(sql,[uid],function(err,result){
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({code:200,msg:"删除成功"});
    } else {
      res.send({code:201,msg:'删除失败'})
    }
  })
});

// 用户查询
app.get('/admin/api/user',(req,res)=>{
  console.log('有请求连接');
  // 防止跨域，测试时使用
  res.header('Access-Control-Allow-Origin','*');
  var sql = "SELECT * FROM pj_user";
  query(sql,[],function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

// 开启端口监听
app.listen(3000,() => {
  console.log('服务器开启成功!');
  console.log('http://localhost:3000');
});


