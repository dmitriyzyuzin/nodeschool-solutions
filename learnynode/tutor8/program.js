var http = require('http');
var bl = require('bl');

const URL = process.argv[2];
http.get(URL, function(res) {
  res.setEncoding('utf8');
  res.pipe(bl(function(err, data) {
    if (err) {
      throw err;
    }
    const stringData = data.toString();
    console.log(stringData.length);
    console.log(stringData);
  }));
}).on('error', console.log);