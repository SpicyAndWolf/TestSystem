const express = require('express')
const router = express.Router()
const config = require('../config')
const userInfo_Handler = require('../router_handler/userInfo')

//挂载路由函数
router.get('/userInfo', userInfo_Handler.getUserInfo)

//暴露函数
module.exports = router