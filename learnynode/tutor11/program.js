var http = require('http');
var fs = require('fs');

const PORT = process.argv[2];
const FILE = process.argv[3];
var server = http.createServer(function (req, res) {
  let readStream = fs.createReadStream(FILE);
  readStream.pipe(res);
})
server.listen(PORT);