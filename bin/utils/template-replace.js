const S = require('string');
const templateReplace = templateVar => (template, replacement) => S(template).replaceAll(templateVar, replacement);

module.exports = templateReplace;
