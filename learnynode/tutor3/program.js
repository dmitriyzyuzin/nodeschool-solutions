var fs = require('fs');
let file = fs.readFileSync(process.argv[2]);
let fileConvertedToString = file.toString();
console.log(fileConvertedToString.split('\n').length-1);
