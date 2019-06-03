const http = require('http');

const url = require('url');

let server = http.createServer("/", function(req, res) {
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
        res.write('<h1>ERREUR 404</h1><h1>Cette page n\'existe pas</h1>');
    }
    res.end();
});
server.listen(3000);
console.log("Connected! Listening on port : 3000");