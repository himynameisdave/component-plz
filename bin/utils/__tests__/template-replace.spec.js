const templateReplace = require('../template-replace.js');


describe('templateReplace', () => {
    it('returns a function when called', () => {
        const actual = templateReplace('');
        expect(typeof actual).toBe('function');
    });
    it('returned function replaces all instances of testVar in provided template', () => {
        const testVar = '!';
        const _templateReplace = templateReplace(testVar);
        const mockTemplate = 'YO!YO!YO!YO!YO!';
        const actual = _templateReplace(mockTemplate, '');
        expect(actual.indexOf(testVar)).toBeLessThanOrEqual(-1);
    });
});
