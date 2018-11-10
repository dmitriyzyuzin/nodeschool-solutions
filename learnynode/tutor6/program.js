var mymodule = require('./module');

mymodule(process.argv[2], process.argv[3], (err, data) => {
  data.forEach(element => {
    console.log(element);
  });
});