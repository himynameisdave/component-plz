const fs = require('fs');
const path = require('path');
const TEMPLATE_PATHS = require('../constants.js').TEMPLATE_PATHS;

const getTemplate = (type) => {
    const templatePath = path.join(__dirname, `../${TEMPLATE_PATHS[type]}`);
    return fs.readFileSync(templatePath, 'utf8');
};

module.exports = getTemplate;
