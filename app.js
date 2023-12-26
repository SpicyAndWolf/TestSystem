const express = require("express");
const expressWs = require("express-ws");
const cors = require("cors");
const writtenTestRouter = require("./router/writtenTest");
const db = require("./db/index");

//创建服务器
const app = express();
expressWs(app);

//配置cors,应对跨域
app.use(cors());

//配置解析表单数据的中间件,即x-www-form和json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 定义全局错误处理中间件
function errorHandler(err, req, res, next) {
  console.error("发生错误", err);
  res.status(500).json({ error: "Internal Server Error" });
}

//连接数据库
(async function () {
  await db.connectDatabase();
})();

//导入路由模块
app.use("/writtenTest", writtenTestRouter);

// 在应用中使用全局错误处理中间件
app.use(errorHandler);

//启动服务器
app.listen(80, () => {
  console.log(`服务器启动于${3000}端口`);
});
