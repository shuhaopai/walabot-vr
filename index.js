var walabot = require('./walabot');

var detector = new walabot.detector({
    port: 8091
});
detector.frame(function(data) {
    console.log(data);
});

var server = require('http').createServer();
var io = require('socket.io')(server);

var port = process.env.PORT || 12000;
server.listen(port);
console.log('Server started on port', port);

io.on('connection', function (socket) {
  console.log('Connection received');

  socket.on('broadcast', function (data) {
    socket.broadcast.emit('broadcast', data);
  });
});
