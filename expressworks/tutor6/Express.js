var express = require('express');
var path = require('path');

var app = express();

app.put('/message/:id', (req, res) => {
  const ID = req.params.id;
  const HASH_ID = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + ID)
      .digest('hex');
  res.send(HASH_ID);
});

app.listen(process.argv[2]);