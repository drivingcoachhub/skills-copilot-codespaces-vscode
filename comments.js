// create Web Server
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

var server = http.createServer(function(req, res){
  var path = req.url;
  var method = req.method;

  if (path === '/'){
    displayHome(res);
  } else if (path === '/comments') {
    if (method === 'POST') {
      handlePost(req, res);
    } else if (method === 'GET') {
      displayComments(res);
    }
  } else {
    displayError(res);
  }
});

function displayHome(res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Welcome!</h1>');
  res.write('<a href="/comments">Comments</a>');
  res.end();
}

function displayComments(res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Comments</h1>');
  res.write('<form method="POST" action="/comments">');
  res.write('<input type="text" name="username" placeholder="username">');
  res.write('<input type="text" name="email" placeholder="email">');
  res.write('<input type="text" name="comment" placeholder="comment">');
  res.write('<input type="submit">');
  res.write('</form>');
  res.write('<ul>');
  comments.forEach(function(comment){
    res.write('<li>');
    res.write('<strong>' + comment.username + '</strong> - ');
    res.write('<em>' + comment.email + '</em> - ');
    res.write('<span>' + comment.comment + '</span>');    res.write('</li>'); // Added closing parenthesis
  });
  res.write('</ul>');
  res.end();
}
