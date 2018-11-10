const NAME = process.argv[2];
const TEMPLATE = `Hello, ${NAME}!
Your name lowercased is "${NAME.toLowerCase()}".`;
console.log(TEMPLATE);