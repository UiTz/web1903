const express = require('express');
const app = express();
const query = require('./plugins/db.js');
// 引入json解析中间件
const bodyParser = require('body-parser');


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
// 使用cookieParser
// require('./plugins/sqlquery');

// app.get('/test/api/',(req,res)=>{
//   // let Base64 = require('js-base64').Base64;
//   let r = req.cookies;
//   if (Object.keys(r).length > 0) {
//     // let i = Base64.decode(r.ucode);
//     console.log(r.ucode);
//     res.send(r.ucode);
//   } else {
//     res.cookie('ucode',"这个是ucode",{maxAge:60000,path:'/',httpOnly:true});
//     res.send({code:203,msg:'重新设置cookie'})
//   }
// });
//
// app.get('/test/api/cookie',(req,res)=> {
//   let B64 = require('js-base64').Base64;
//   let ucode = B64.encode('user_name中文呢');
//   console.log(req.cookies);
//   res.cookie('ucode',ucode,{maxAge:50000,path:'/',httpOnly:true});
//   res.send({code:200,msg:'cookies设置成功: '+ucode})
// });



/*
 * 查询用户名是否可用
 */
app.post('/user/api/queryuser',(req,res)=>{
  console.log('有查询用户名请求');
  // console.log(req.query);
  let uname = req.body.uname;
  let sql = "SELECT uname FROM pj_user WHERE uname = ?";
  query(sql,[uname],(err,result)=> {
    if (err) throw  err;
    if (result.length === 0) {
      res.send({code:200,msg:"恭喜!用户名可以使用"})
    } else res.send({code:201,msg:"用户名已被注册"})
  });
});


// 用户注册
app.post('/user/api/register',(req,res)=> {
  let r = req.body;
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

// 查询邮箱是否注册过
app.post('/user/api/queryemail',(req,res)=>{
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
app.post('/user/api/login',(req,res)=> {
  let r = req.body;
  let uname = r.uname;
  let upwd = r.upwd;
  let sql = 'SELECT uid FROM pj_user WHERE uname = ? AND upwd = ?';
  query(sql,[uname,upwd],(err,result)=> {
    if (err) throw err;
    if (result.length === 0){
      res.send({code:201,msg:'登录失败'});
    } else {
      res.send({code:200,msg:'登录成功',result});
    }
  })
});

// 商品查询
app.get('/product/api/querytype',(req,res)=> {
  // let r = req.query;
  // let ptype = r.product_type;
  let sql = 'SELECT * FROM product';
  query(sql,[],(err,result)=> {
    if (err) throw err;
    // console.log(result);
    if (result.length === 0) {
      res.send({code:201,msg:'请求失败'})
    } else {
      res.send({code:200,result})
    }
  })
});

// 根据商品ID查询详情
app.get('/product/api/queryid',(req,res)=> {
  let r = req.query;
  let id = r.id;
  let sql = 'SELECT * FROM product WHERE uid = ?';
  query(sql,[id],(err,result)=> {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  })
});

// 用户留言板
app.get('/user/api/message_board',(req,res)=> {
  let r = req.query;
  console.log(r);
  let name = r.name;
  let msg = r.msg;
  if (msg.length === 0){
    res.send({code:203,msg:'留言不能为空'});
    return false;
  }
  let sql = 'INSERT INTO message_board (msg,name,date) VALUES (?,?,NOW())';
  query(sql,[msg,name],(err,result)=> {
    if (err) throw err;
    if (result.affectedRows === 1) {
      res.send({code:200,mgs:'留言成功'})
    } else res.send({code:201,msg:'留言失败'});
  })
});

// 查询用户留言板
app.get('/user/api/loading_message',(req,res)=> {
  console.log('收到请求');
  let count = Number(req.query.count);
  console.log(count);
  let sql = 'SELECT * FROM message_board LIMIT 10';
  query(sql,[count],(err,result)=> {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.send({code:200,result});
    } else res.send({code:201,msg:'请求失败'})
  });
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

