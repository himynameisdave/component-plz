const S = require('string');
const getFileName = require('../get-filename.js');


describe('getFileName', () => {
    it('returns a filename with .jsx extension', () => {
        const actual = getFileName('test');
        expect(actual.indexOf('.jsx')).toBeGreaterThan(0);
    });
    it('adds the expected number of hyphens', () => {
        const actual = getFileName('ASweetAssComponent');
        const expected = 3;
        expect(S(actual).count('-')).toBe(expected);
    });
});
