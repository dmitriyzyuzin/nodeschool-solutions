var http = require('http');

const PORT = process.argv[2];
var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
      res.end(body.toLocaleUpperCase());
  });
  }
})
server.listen(PORT);