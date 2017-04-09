// const constants = require('../constants.js');
const commonTemplateVars = require('../common-template-vars.js');
const getFileName = require('../utils/get-filename.js');
const getTemplate = require('../utils/get-template.js');
const setDoReplace = require('../utils/set-do-replace.js');
const writeFile = require('../utils/write-file.js');


const componentTemplateVars = [];

const component = (APP) => {
    //  Read our template file, which we can use as a base
    const template = getTemplate('component');
    let _template = template;
    commonTemplateVars(APP.name)
        .concat(componentTemplateVars)
        .map(setDoReplace)
        .map(_var => {
            _template = _var.doReplace(_template, _var.replacement);
            return _template;
        });

    const filename = getFileName(APP.name);
    //  Start replacing stuff
    writeFile(filename, _template);
    //  Break this off
    console.log(`\nSuccessfully created ${filename}`); // eslint-disable-line no-console
    process.exit(0);
};


module.exports = component;
