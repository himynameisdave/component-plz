const fs = require('fs');
const getFileName = require('./get-filename.js');


const writeFile = (componentName, componentText) => {
    const fileName = getFileName(componentName);
    return fs.writeFileSync(fileName, componentText);
};

module.exports = writeFile;
