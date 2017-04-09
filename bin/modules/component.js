const constants = require('../constants.js');
const getTemplate = require('../utils/get-template.js');
const templateReplace = require('../utils/template-replace.js');
const writeFile = require('../utils/write-file.js');


const component = (APP) => {
    //  Read our template file, which we can use as a base
    const template = getTemplate('component');
    let _template = template;
    [
        {
            name: 'componentName',
            replacement: APP.name,
        }, {
            name: 'componentPropTypes',
            replacement: constants.REPLACEMENT_TEXT.componentPropTypes(APP.name),
        },
    ].map(_var => Object.assign({}, _var, {
        doReplace: templateReplace(constants.TEMPLATE_VARS[_var.name]),
    }))
    .map(_var => {
        _template = _var.doReplace(_template, _var.replacement);
        return _template;
    });


    //  Start replacing stuff
    writeFile(APP.name, _template);
};


module.exports = component;
