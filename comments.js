// create Web Server

// For an extra challenge, make the home page (/) be a page that says <h1>Welcome!</h1>

var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  if (request.url === '/hello') {
    response.write("<h1>Hello!</h1>");
  } else if (request.url === '/') {
    response.write("<h1>Welcome!</h1>");
  }
  response.end();
});

server.listen(8000);
console.log("Server is listening on port 8000");