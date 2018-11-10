var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

const STATIC_PATH = path.join(__dirname, 'public');

var app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.get('/form', function(req, res) {
  res.sendFile(STATIC_PATH + '/form.html');
});

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);

