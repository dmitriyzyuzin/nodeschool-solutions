var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    throw err;
  }
  const filterExtension = '.' + process.argv[3];
  var filteredByExtensionFiles = files.filter(file => path.extname(file) == filterExtension);
  filteredByExtensionFiles.forEach(item => console.log(item));
});