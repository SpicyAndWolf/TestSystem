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

//添加api
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

app.get("/meeting", function (req, res) {
  res.sendFile(path.join(__dirname, "html", "meeting.html"));
});

io.of("/meeting").on("connection", function (socket) {
  let rooms = [];
  console.log("连入一个人员");

  //加入房间
  socket.on("join", function (roomName) {
    console.log(`Received join event for room ${roomName}`);
    socket.join(roomName);
    if (!rooms.includes(roomName)) {
      rooms.unshift(roomName);
    }
    io.of("/meeting")
      .to(roomName)
      .emit("message", `${socket.id} 加入房间 ${roomName}`);
    console.log(`${socket.id} 加入房间 ${roomName}`);
  });

  //离开房间
  socket.on("leave", function (roomName) {
    socket.leave(roomName);
    rooms = rooms.filter(function (value) {
      return value !== roomName;
    });
    io.of("/meeting")
      .to(roomName)
      .emit("message", `${socket.id} 离开房间 ${roomName}`);
    console.log(`${socket.id} 离开房间 ${roomName}`);
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
