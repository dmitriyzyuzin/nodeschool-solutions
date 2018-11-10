var http = require('http');
const url = require('url');

const PORT = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    const parserUrl = url.parse(req.url, true);
    let respBody = "";
    const curDate = new Date(parserUrl.query.iso);
    if (/^\/api\/parsetime/.test(req.url)) {
      respBody = JSON.stringify({
        "hour": curDate.getHours(),
        'minute': curDate.getMinutes(),
        'second': curDate.getSeconds()
      });
    }
    if (/^\/api\/unixtime/.test(req.url)) {
      respBody = JSON.stringify({
        "unixtime": curDate.getTime()
      });
    }
    if (respBody) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(respBody);
    } else {
      res.writeHead(404);
      res.end();
    }
  }
})
server.listen(PORT);