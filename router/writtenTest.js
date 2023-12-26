const express = require("express");
const router = express.Router();
const writtenTest_handler = require("../router_handler/writtenTest");

//获取测试种类
router.get("/testType/get", writtenTest_handler.getTestType);
router.get("/Paper/getByArea", writtenTest_handler.getPaperByArea);
router.post("/Paper/insert", writtenTest_handler.insertPaper);
router.post("/Paper/delete", writtenTest_handler.deletePaper);
router.post("/Answer/insert", writtenTest_handler.insertAnswer);
router.get("/Answer/getByUserId", writtenTest_handler.getAnswerByUserId);
router.get("/Answer/getByPaperId", writtenTest_handler.getAnswerByPaperId);

//暴露路由
module.exports = router;
