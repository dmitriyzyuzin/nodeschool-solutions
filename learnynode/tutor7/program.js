var http = require('http');

const URL = process.argv[2];
http.get(URL, function(res) {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.log);
}).on('error', console.log);