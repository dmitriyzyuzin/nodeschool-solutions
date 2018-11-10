module.exports = function average(...args) {
  var result = 0;
  args.forEach(item => result += item);
  return result / args.length;
};