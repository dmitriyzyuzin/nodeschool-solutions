var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      throw err;
    }
    let jsonData = JSON.parse(data.toString());
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonData);
  });
});

app.listen(process.argv[2]);

