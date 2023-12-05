const express = require('express')
const router = express.Router()
const writtenTest_handler = require('../router_handler/writtenTest')

//获取测试种类
router.get('/testField', writtenTest_handler.getTestField)


//暴露路由
module.exports = router