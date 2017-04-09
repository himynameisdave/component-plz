const decamelize = require('decamelize');

const getFileName = componentName => `${decamelize(componentName, '-')}.jsx`;

module.exports = getFileName;
