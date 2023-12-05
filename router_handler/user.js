const bcrypt = require('bcryptjs')

//处理函数
//注册
module.exports.register = (req, res) => {
    //获取信息
    const userInfo = req.body

    //检测格式合法性
    if (!userInfo.userName || !userInfo.password) {
        res.cc("用户名或密码格式不合法")
    }

    //密码加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)

    //显示注册成功
    res.send('注册成功')
}

//登录
module.exports.login = (req, res) => {
    res.send('登录成功')
}