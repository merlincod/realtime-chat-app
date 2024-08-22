module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('New client connected', socket.id);
  
      socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        socket.to(room).emit('message', { user: 'admin', text: `${username} has joined the room!` });
      });
  
      socket.on('sendMessage', ({ message, room, username }) => {
        io.to(room).emit('message', { user: username, text: message });
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
      });
    });
  };
  