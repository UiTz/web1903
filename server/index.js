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

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Authorization,Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/x-www-form-urlencoded");
  next();
});

// 用户注册
app.post('/admin/api/register',(req,res)=> {
  let r = req.query;
  let uarr = [
    uname = r.uname,
    upwd  = r.upwd,
    email = r.email,
    phone = r.phone
  ];
  let sql = 'INSERT INTO pj_user (uname,upwd,email,phone,regster_date) VALUES (?,to_base64(?),?,?,NOW())';
  query(sql,uarr,(err,result)=> {
    if (err) throw err;
    if (result.affectedRows > 0){
      res.send({code:200,msg:'注册成功'});
    } else {
      res.send({code:201,msg:'注册失败'});
    }
  })
});

// 用户删除
app.get('/admin/api/deluser',(req,res)=>{
  console.log('有删除用户请求');
  console.log(req.query.uid);
  let uid = req.query.uid;
  let sql = "DELETE FROM pj_user WHERE uid = ?";
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
app.post('/admin/api/user',(req,res)=>{
  //console.log('有用户查询请求');
  //console.log(req.body);
  let admin_uname = req.body.admin_uname;
  let admin_upwd = req.body.admin_upwd;
  let sql = 'SELECT admin_uname,admin_upwd FROM admin_user WHERE admin_uname = ? AND admin_upwd = ?';
  query(sql,[admin_uname,admin_upwd],(err,result)=> {
    if (err) throw err;
    if (result.length === 1) {
      let sql = "SELECT * FROM pj_user";
      query(sql,[],(err,result)=> {
        if (err) throw err;
        res.send({code:200,data:result});
      })
    } else {
      res.send({code:201,msg:'请检查权限'})
    }
  });
});

/*
 * 查询用户名是否可用
 */
app.get('/admin/api/queryuser',(req,res)=>{
  console.log('有查询用户名请求');
  // console.log(req.query);
  let uname = req.query.uname;
  let sql = "SELECT uname FROM pj_user WHERE uname = ?";
  query(sql,[uname],(err,result)=> {
    if (err) throw  err;
    if (result.length === 0) {
      res.send({code:200,msg:"恭喜!用户名可以使用"})
    } else res.send({code:201,msg:"用户名已被注册"})
  });
});

// 查询邮箱是否注册过
app.get('/admin/api/queremail',(req,res)=>{
  console.log('有查询邮箱请求');
  let email = req.query.email;
  let sql = "SELECT email FROM pj_user WHERE email = ?";
  query(sql,[email],(err,result)=> {
    if (err) throw  err;
    if (result.length === 0) {
      res.send({code:200,msg:"恭喜!用户名可以使用"})
    } else res.send({code:201,msg:"用户名已被注册"})
  })
});

//用户注册
app.get('/admin/api/user_name',(req,res)=>{
  //  获取数据
   var uname=req.body.uname;
   var upwd=req.body.upwd;
   var email=req.body.email;
   var phone=req.body.phone;
  //  用户名验证
   if(!uname){
     res.send("用户名验证通过");
      return;
   }else{
     // 服务器 中不能这么写，我先注释了
     //document.innHTML("#")="用户名不能为空"
   }
  //  密码验证
   if(!upwd){
    res.send("密码验证通过");
     return;
  }else{
    //document.innHTML("#")="密码不能为空"
  }
  // 邮箱验证
  if(!email){
    res.send("邮箱验证通过");
     return;
  }else{
    //document.innHTML("#")="邮箱不能为空"
  }
  // 手机号验证
  if(!phone){
    res.send("手机验证通过");
     return;
  }else{
    //document.innHTML("#")="手机号不能为空"
  }
  //  sql
  var sql='INSERT INTO pj_user SET ?';
  pool.query(sql,[req.body],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
    res.send(alert("注册成功"));
    }
   });
   
});


// 开启端口监听
app.listen(3000,() => {
  console.log('服务器开启成功!');
  console.log('http://localhost:3000');
});


