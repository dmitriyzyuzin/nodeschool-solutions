module.exports = function foo(arg, len = arg.length) {
  return `${arg}${'!'.repeat(len)}`;
}