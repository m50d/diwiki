/* var md = require('node-markdown').Markdown
var http = require('http')
var fs = require('fs')
var url = require('url')
var cheerio = require('cheerio')

function renderPage(templateName, substitutions, callback) {
  fs.readFile('./templates/' + templateName + '.html', 'UTF-8', function(err, templateData) {
    var template = cheerio.load(templateData)
    for(var key in substitutions)
      if(substitutions.hasOwnProperty(key)) {
	template('.' + key).html(substitutions[key])
      }
    callback(template.html())
  })
}

var server = http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname
    var fileName = './pages/' + pathName + '.md'
    fs.exists(fileName, function(pageExists) {
      if(pageExists) {
        fs.readFile(fileName, 'UTF-8', function(err, mddata) {
          var content = md(mddata, true)
          renderPage('view', {content: content}, function(html){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(html)
          })
	})
      } else {
        renderPage('edit', {content: 'Enter *markdown* formatted text here'}, function(html){
          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end(html)
        })
      }
    })
})
server.listen(port, '127.0.0.1'); */
var jsDAV = require("jsDAV");
jsDAV.debugMode = true;
//var jsDAV_Locks_Backend_FS = require("./../lib/DAV/plugins/locks/fs");
var port = process.env.PORT
jsDAV.createServer({
    node: __dirname
// + "/../test/assets",
//    locksBackend: jsDAV_Locks_Backend_FS.new(__dirname + "/../test/assets")
}, port);
