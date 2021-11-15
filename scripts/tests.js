var http = require('http');

http.createServer(function(req, res) { 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
  }).listen(3000);

console.log('Server started on http://localhost:3000; Press Ctrl+C to terminate...');



