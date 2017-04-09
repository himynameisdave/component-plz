const fs = require('fs');

const writeFile = (fileName, componentText) => fs.writeFileSync(fileName, componentText);

module.exports = writeFile;
