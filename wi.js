var md = require("node-markdown").Markdown;
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname
    fs.readFile('pages/' + pathName + '.md', 'UTF-8', function(err, data) {
        var html = md(data, true);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(html);
    });
});

server.listen(80, '127.0.0.1');
