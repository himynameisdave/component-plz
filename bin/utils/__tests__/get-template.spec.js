const fs = require('fs');
const path = require('path');
const getTemplate = require('../get-template.js');
const TEMPLATE_PATHS = require('../../constants.js').TEMPLATE_PATHS;
const TEMPLATE = {
    component: fs.readFileSync(path.join(__dirname, '../../', TEMPLATE_PATHS.component), 'utf8'),
    stateless: fs.readFileSync(path.join(__dirname, '../../', TEMPLATE_PATHS.stateless), 'utf8'),
};


describe('getTemplate', () => {
    it('properly loads the component template', () => {
        const actual = getTemplate('component');
        expect(actual).toEqual(TEMPLATE.component);
    });
    it('properly loads the stateless template', () => {
        const actual = getTemplate('stateless');
        expect(actual).toEqual(TEMPLATE.stateless);
    });
});
