const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const chatRoutes = require('./routes/chat');
const socketHandler = require('./socket');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const MONGO_URI = 'mongodb://localhost:27017/realtime-chat';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
app.use(express.static('client'));

app.use(express.json());
app.use('/api/chat', chatRoutes);

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
