var http = require('http');
var bl = require('bl');

let urls = process.argv.slice(2);
result = Array(3);
counter = 0;

function sendHttpGet(url, index) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data) {
      if (err) {
        throw err;
      }
      result[index] = data.toString();
      counter++;
      if (counter === 3) {
        result.forEach(item => console.log(item));
      }
    }));
  });
}

urls.forEach((url, index) => {
  sendHttpGet(url, index);
});