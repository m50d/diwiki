var md = require("node-markdown").Markdown
var http = require('http')
var fs = require('fs')
var url = require('url')
var cheerio = require('cheerio')

var server = http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname
    fs.readFile('./templates/view.html', 'UTF-8', function(err, templateData) {
        fs.readFile('./pages/' + pathName + '.md', 'UTF-8', function(err, mddata) {
	    var template = cheerio.load(templateData)
            var content = md(mddata, true)
            template('.content').html(content)
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(template.html())
        });
    });
});

server.listen(80, '127.0.0.1')
