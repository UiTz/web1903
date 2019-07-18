const express = require('express');
const app = express();
const query = require('./plugins/db.js');
// 引入json解析中间件
var bodyParser = require('body-parser');


// 引入静态目录
app.use(express.static('public'));

// 设置跨域访问
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};

app.use(allowCors);
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./plugins/sqlquery');

/*
 * 查询用户名是否可用
 */
app.get('/user/api/queryuser',(req,res)=>{
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


// 用户注册
app.get('/user/api/register',(req,res)=> {
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
      console.log(result);
      res.send({code:201,msg:'注册失败'});
    }
  })
});

// 查询邮箱是否注册过
app.post('/admin/api/queremail',(req,res)=>{
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

// 用户登录接口
app.get('/user/api/login',(req,res)=> {
  let r = req.query;
  let uname = r.uname;
  let upwd = r.upwd;
  let sql = 'SELECT uid FROM pj_user WHERE uname = ? AND upwd = ?';
  query(sql,[uname,upwd],(err,result)=> {
    if (err) throw err;
    console.log(result);
    if (result.length === 0){
      res.send({code:200,msg:'登录失败'});
    } else {
      res.send({code:201,msg:'登录成功',result});
    }
  })
});

// 商品查询
app.get('/product/api/querytype',(req,res)=> {
  let r = req.query;
  let ptype = r.product_type;
  let sql = 'SELECT * FROM product WHERE product_type = ?';
  
});


/*******************以下为后台接口****************/

// 用户删除
app.post('/admin/api/deluser',(req,res)=>{
  console.log('有删除用户请求');
  console.log(req.body.uid);
  let admin_uname = req.body.admin_uname;
  let admin_upwd = req.body.admin_upwd;
  let sql = "SELECT admin_uname,admin_upwd FROM admin_user WHERE admin_uname = ? AND admin_upwd = ?";
  query(sql,[admin_uname,admin_upwd],(err,result)=> {
    if (err) throw err;
    if (result.length === 1) {
      let uid = req.query.uid;
      let sql1 = "DELETE FROM pj_user WHERE uid = ?";
      query(sql1, [uid], (err,result)=> {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({code: 200, msg: '删除成功'});
        } else {
          res.send({code: 201, msg: '删除失败'});
        }
      });
    } else {
      res.send({code: 201, msg: '请检查权限'});
    }
  })
});

// 修改用户信息接口
app.get('/user/api/update',(req,res)=> {
  let r = req.query;
  let uname = r.uname;
  let upwd = r.upwd;
  // let email = r.email;
  // let phone = r.phone;
  // let uid = r.uid;
  let sql = 'SELECT uname,upwd FROM pj_user WHERE uname = ? AND upwd = ?';
  query(sql,[uname,upwd],(err,result)=> {
    if (err) throw err;
    console.log(result);
    if (result.length > 0){
      res.send({code:200,msg:'登录成功'});
    } else {
      console.log('登录失败');
      res.send({code:201,msg:'登录失败'});
    }
  })
});



// 查询所有用户
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





// 开启端口监听
app.listen(3000,() => {
  console.log("服务器开启成功: http://localhost:3000");
});

