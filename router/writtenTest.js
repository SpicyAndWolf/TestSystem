const express = require('express')
const router = express.Router()
const writtenTest_handler = require('../router_handler/writtenTest')

//获取测试种类
router.get('/testType', writtenTest_handler.getTestType)
router.get('/paper', writtenTest_handler.getPaper)
router.post('/insertPaper', writtenTest_handler.insertPaper)
router.post('/updatePaper',writtenTest_handler.updatePaper)


//暴露路由
module.exports = router