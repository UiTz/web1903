module.exports = function (uname, upwd) {
    return users.find(function (item) {
        return item.uname === uname && item.upwd === upwd;
    })
};