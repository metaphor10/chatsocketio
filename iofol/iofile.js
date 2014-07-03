var io = require('socket.io');
io.sockets.on('connection', function (socket) {
	    socket.on('setPseudo', function (data) {
	    socket.set('pseudo', data);
	});
	socket.on('message', function (message) {
	    socket.get('pseudo', function (error, name) {
	        var data = { 'message' : message, pseudo : name };
	        socket.broadcast.emit('message', data);
	        console.log("user " + name + " send this : " + message);
	    })
	});
});
//module.exports = io;