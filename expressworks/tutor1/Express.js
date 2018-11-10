var express = require('express');

const PORT = process.argv[2];
var app = express();

app.get('/home', function(req, res) {
  res.end("Hello World!");
});
app.listen(PORT);
