const constants = require('./constants.js');


const commonTemplateVars = (componentName) => [
    {
        name: 'componentName',
        replacement: componentName,
    }, {
        name: 'componentPropTypes',
        replacement: constants.REPLACEMENT_TEXT.componentPropTypes(componentName),
    },
];

module.exports = commonTemplateVars;
