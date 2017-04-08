const figlet = require('figlet');
const BANNER_FONT = require('../constants').BANNER_FONT;
const text = require('../../package.json').name;

const banner = () => console.log( // eslint-disable-line no-console
    figlet.textSync(
        text,
        {
            font: BANNER_FONT,
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }
    )
);


module.exports = banner;
