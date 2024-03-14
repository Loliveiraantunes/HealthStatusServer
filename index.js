const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('room', function(room) {
    socket.join(room);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  //{ "device": "teste","value" : 60, "code":"frequency" }
  socket.on('message', (data) => {
    console.log('Received message:',data.code, data);
    io.to(data.device).emit(data.code, data); 
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});