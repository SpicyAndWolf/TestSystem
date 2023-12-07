const express = require('express')
const cors = require('cors')
const writtenTestRouter = require('./router/writtenTest')
const testType_db = require('./db/testType')
const db = require('./db/index')

//创建服务器
const app = express()

//配置cors,应对跨域
app.use(cors())

//配置解析表单数据的中间件,即x-www-form
app.use(express.urlencoded({ extended: false }));

//连接数据库
(async function () {
    await db.connectDatabase();
})();

//导入路由模块
app.use('/writtenTest', writtenTestRouter)

//错误级别中间件
app.use((err, req, res, next) => {
    //默认错误处理
    res.cc("发生错误：" + err)
})

//启动服务器
app.listen(80, () => {
    console.log("服务器启动")
})