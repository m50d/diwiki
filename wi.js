//var net = require('net');
var sys   = require('sys');
var    exec  = require('child_process').exec;
var md = require("node-markdown").Markdown;
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile("index.md", 'UTF-8', function(err, data) {
var html = md(data, true);
	 res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
	});
   
});
//var server = net.createServer(function (socket) {
//  socket.write('Echo server\r\n');
//  socket.pipe(socket);
//});

server.listen(80, '127.0.0.1');
