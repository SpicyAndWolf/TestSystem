const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')

//创建服务器
const app = express()

//配置cors,应对跨域
app.use(cors())

//配置解析表单数据的中间件,即x-www-form
app.use(express.urlencoded({ extended: false }))

//封装send函数
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

//导入路由模块
app.use('/api', userRouter)

//启动服务器
app.listen(80, () => {
    console.log("服务器启动")
})