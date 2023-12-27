const express = require("express");
const expressWs = require("express-ws");
const expressJWT = require("express-jwt");
const cors = require("cors");
const writtenTestRouter = require("./router/writtenTest");
const db = require("./db/index");
const userRouter = require("./router/user");
const config = require("./config");

//创建服务器
const app = express();
expressWs(app);

//配置cors,应对跨域
app.use(cors());

//配置解析表单数据的中间件,即x-www-form和json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//连接数据库
(async function () {
  await db.connectDatabase();
})();

console.log(config.jwtSecretKey);

// //配置express-JVM解析用中间件
// app.use(
//   expressJWT({ secret: config.jwtSecretKey }).unless({
//     path: ["/api/register", "/api/login"],
//   })
// );

//导入路由模块
app.use("/writtenTest", writtenTestRouter);
app.use(userRouter);

// 在应用中使用全局错误处理中间件
app.use(errorHandler);

//错误处理
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.send({ status: 401, message: "认证错误" });
  }
  //默认错误处理
  res.send({ status: 500, message: "其他错误" });
});

//启动服务器
app.listen(80, () => {
  console.log(`服务器启动于80端口`);
});

// 定义全局错误处理中间件
function errorHandler(err, req, res, next) {
  console.error("发生错误", err);
  res.status(500).json({ error: "Internal Server Error" });
}
