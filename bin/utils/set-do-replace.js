const TEMPLATE_VARS = require('../constants.js').TEMPLATE_VARS;
const templateReplace = require('./template-replace.js');

const setDoReplace = _var => Object.assign({}, _var, {
    doReplace: templateReplace(TEMPLATE_VARS[_var.name]),
});


module.exports = setDoReplace;
