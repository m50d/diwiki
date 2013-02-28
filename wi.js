//var net = require('net');
var sys   = require('sys'),
var    exec  = require('child_process').exec;

var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
//var server = net.createServer(function (socket) {
//  socket.write('Echo server\r\n');
//  socket.pipe(socket);
//});

server.listen(80, '127.0.0.1');
