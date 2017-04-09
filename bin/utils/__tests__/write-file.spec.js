const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const writeFile = require('../write-file.js');

describe('writeFile', () => {
    const testFileName = 'testfile.txt';
    afterAll(() => {
        rimraf.sync(`./${testFileName}`);
    });

    it('it writes the proper file', () => {
        const testPath = path.join(process.cwd(), testFileName);
        writeFile(testFileName);
        expect(fs.existsSync(testPath)).toBeTruthy();
    });
});
