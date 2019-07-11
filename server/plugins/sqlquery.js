// 创建常用SQL查询语句
var sqlQuery = {
  user: {
    add: 'insert into /*表*/ (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
    select_name: 'select * from /*表*/',
    update_user: 'update /*表*/ set'
  }
};

module.exports = sqlQuery;
