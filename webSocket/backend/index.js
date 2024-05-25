
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors=require('cors')
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});
const PORT =  3000;

app.use(express.static('public'));
app.use(cors({
  origin: "http://localhost:5173"
}));
io.on('connection', (socket) => {
  console.log('New client connected',socket.id);
  
  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
