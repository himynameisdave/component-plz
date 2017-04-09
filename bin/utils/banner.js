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
    const str = '==';
    const baseBar = colours.map(prop => chalk[prop])
                           .map(colourify => colourify(str))
                           .join('');
    const bar = `${baseBar}${baseBar}${baseBar}${baseBar}`;
    const padAmount = ((colours.length * str.length) * 4) - 4;
    // console.log(S(componentName).pad(padAmount).s);
    console.log( // eslint-disable-line no-console
      `${bar}\n` +
      `${chalk.blue('||')}${S(componentName).pad(padAmount).s}${chalk.blue('||')}\n` +
      `${bar}`
    );
};


module.exports = banner;
