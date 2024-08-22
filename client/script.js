const socket = io();

const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');
const output = document.getElementById('output');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  const username = usernameInput.value;
  const room = 'general'; 

  if (message && username) {
    socket.emit('sendMessage', { message, room, username });
    messageInput.value = '';
  }
});

socket.on('message', (data) => {
  output.innerHTML += `<p><strong>${data.user}: </strong>${data.text}</p>`;
});
