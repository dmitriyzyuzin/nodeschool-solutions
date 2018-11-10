var fs = require('fs');
var path = require('path');

module.exports =  function (dirname, extension, callback) {
  fs.readdir(dirname, function(err, files) {
    if (err) {
      return callback(err);
    }

    const filterExtension = '.' + extension;
    var filteredByExtensionFiles = files.filter(file => path.extname(file) == filterExtension);

    callback(null, filteredByExtensionFiles);
  });
};