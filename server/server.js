const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath  = path.join(__dirname, '../public');
const port = process.env.PORT || 3000
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Eduardo',
        text: 'Hey you!',
        createAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('Create message', message);
    })

    socket.on('disconnect', () => {
        console.log('Disconnected');
    })
});


server.listen(port, () => {
    console.log(`Server is up o port ${port}`);
})