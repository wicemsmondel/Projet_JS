var http = require('http');

var url = require('url');

var server = http.createServer("/", function(req, res) {
    var mypath = url.parse(req.url).pathname;
    if (mypath == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Tip top, ca demarre !</h1>');
    } else if (mypath == "/url1") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Premiere url</h1>');
    } else if (mypath == "/url2") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Deuxieme url</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>ERREUR 404 Cette page n\'existe pas</h1>');
    }
    res.end();
});
server.listen(3000);