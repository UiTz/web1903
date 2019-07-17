const express = require('express');
const app = express();
const query = require('./plugins/db.js');
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./plugins/sqlquery');

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 引入静态目录
app.use(express.static('public'));

// 用户删除
app.get('/admin/api/deluser',(req,res)=>{
  console.log('有删除用户请求');
  console.log(req.query.uid);
  var uid = req.query.uid;
  var sql = "DELETE FROM pj_user WHERE uid = ?";
  query(sql,[uid],(err,result)=> {
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
  var sql = "SELECT * FROM pj_user";
  query(sql,[],(err,result)=> {
    if (err) throw err;
    res.send(result);
  })
});

/*
 * 查询用户名是否可用/登录验证用户名和密码
 * 两个共用一个接口 传入密码即为验证用户名和密码是否匹配,如果只传入用户名就检测用户名是否存在
 */
app.get('/admin/api/queryuser',(req,res)=>{
  console.log('有请求连接');
  // console.log(req.query);
  let uname = req.query.uname;
  let upwd = req.query.upwd;
  let email = req.query.email;
  if ((uname !== undefined || email !== undefined) && upwd !== undefined) {
    let sql = "SELECT uname,email,upwd FROM pj_user WHERE (uname = ? AND upwd = ?) OR (email =? AND upwd =?)";
    query(sql,[uname,email,uname,upwd],(err,result)=> {
      if (err) throw  err;
      if (result.length > 0) {
        res.send({code: 200, msg: '登录成功!'})
      } else res.send({code:201,msg:'请检查用户名或密码!'});
    })
  } else if ((uname || email) && (upwd === undefined)) {
    var sql = "SELECT uname,email FROM pj_user WHERE uname = ? OR email = ?";
    query(sql,[uname,email],(err,result)=> {
      if (err) throw err;
      console.log(result);
      if (result.length === 0) {
        res.send({code:200,msg:"恭喜!用户名可以使用"})
      } else res.send({code:201,msg:"用户名已被注册"})
    })
  }
});

// 开启端口监听
app.listen(3000,() => {
  console.log('服务器开启成功!');
  console.log('http://localhost:3000');
});


