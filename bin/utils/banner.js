const S = require('string');
const chalk = require('chalk');
const clear = require('clear');

const banner = componentName => {
    //  Clear the terminal screen
    clear();
    const colours = [
        'magenta',
        'red',
        'green',
        'blue',
        'yellow',
        'cyan',
    ];
    const patternSize = 3;
    const str = '=~=';
    const baseBar = colours.map(prop => chalk[prop])
                           .map(colourify => colourify(str))
                           .join('');
    let bar = [];
    while (bar.length < patternSize) { bar.push(baseBar); }
    const padAmount = ((colours.length * str.length) * patternSize) - 4;
    bar = bar.join('');
    console.log( // eslint-disable-line no-console
      `    ${bar}\n` +
      `    ${chalk.blue('||')}${S(componentName).pad(padAmount).s}${chalk.blue('||')}\n` +
      `    ${bar}`
    );
};


module.exports = banner;
