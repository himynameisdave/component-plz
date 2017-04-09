const setDoReplace = require('../set-do-replace.js');

describe('setDoReplace', () => {
    const mockVar = { name: 'componentName', };
    it('returns an object with a `doReplace` method', () => {
        const actual = setDoReplace(mockVar);
        expect(actual.doReplace).toBeDefined();
        expect(typeof actual.doReplace).toEqual('function');
    });
    it('doesn\'t override the other passed props', () => {
        const actual = setDoReplace(mockVar);
        expect(actual.name).toEqual(mockVar.name);
    });
});
