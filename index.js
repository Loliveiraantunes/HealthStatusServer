const exprss = require('express');
const app = exprss();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

//Socket
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('room', function (room) {
    socket.join(room);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  //{ "device": "teste","value" : 60, "code":"frequency" }
  socket.on('message', (data) => {
    console.log('Received message:', data.code, data);
    io.to(data.device).emit(data.code, data);
  });
});

//Request Config
app.use(exprss.json());
app.use(exprss.urlencoded({ extended: false }));

//Route Prefixes
const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user');
const authRouter = require('./src/routes/auth');

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
//Database Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://iot:iot@cluster0.mwy3hci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });
});

