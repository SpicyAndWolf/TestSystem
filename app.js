const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

//创建服务器
const app = express();
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);

app.use(
  cors({
    origin: "http://127.0.0.1",
    methods: ["GET", "POST"],
  })
);

app.use(express.static("public"));

//添加api
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/meeting", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "html", "meeting.html"));
});

io.of("/meeting").on("connection", function (socket) {
  console.log("连入一个人员");

  // 加入房间
  socket.on("join", function (roomName) {
    socket.join(roomName);

    // 发送响应消息
    io.of("/meeting")
      .to(roomName)
      .emit("updateMessage", [`${socket.id} 加入房间 ${roomName}`]);
  });

  // 离开房间
  socket.on("leave", function (roomName) {
    socket.leave(roomName);

    // 发送响应消息
    io.of("/meeting")
      .to(roomName)
      .emit("updateMessage", [`${socket.id} 离开房间 ${roomName}`]);
  });

  // 发送消息事件
  socket.on("sendMessage", function (data) {
    const { room, message } = data;

    // 发送消息到指定房间，但不包括发送者本身
    io.of("/meeting")
      .to(room)
      .emit("addComment", [`${socket.id}: ${message} ${room}`]);
  });

  //错误响应
  socket.on("error", function (err) {
    console.log(err);
  });
});

//启动服务器
httpServer.listen(80, () => {
  console.log(`服务器启动于80端口`);
});
