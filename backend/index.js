// backend/index.js
const express = require('express');
const {createServer} = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');


const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // React app URL
    methods: ['GET', 'POST'],
  },
});


io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Example: Sending a message to the client
  socket.emit('welcome', 'Welcome to the Socket.IO server!');

  // Listening for events from the client
  socket.on('message', (data) => {
    console.log('Message from client:', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
