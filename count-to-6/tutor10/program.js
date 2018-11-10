const escapeHtml = inputString => {
  return inputString
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const TEMPLATE = `<b>${process.argv[2]} says</b>: "${escapeHtml(process.argv[3])}"`;
console.log(TEMPLATE);