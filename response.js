const http = require('http');

const server = http.createServer((req, res) => {
  // Get the requested URL from the request object
  const url = req.url;

  // Set Content-Type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different URLs and send custom responses
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    // Handle unknown URLs with a 404 response
    res.statusCode = 404;
    res.end('404 - Not Found');
  }
});
server.listen(4000);