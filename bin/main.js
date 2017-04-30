const APP = require('commander');
const version = require('../package.json').version;
const banner = require('./utils/banner.js');
const component = require('./modules/component.js');
const stateless = require('./modules/stateless.js');

const main = () => {
    APP.version(version)
        .option('-N, --name [componentName]', 'Name for your component', '')
        .option('-C, --component', 'Create a class extends Component (default)')
        .option('-S, --stateless', 'Create a stateless function component')
        // .option('-c, --connected', 'Adds Redux connect, including mapStateToProps & mapDispatchToProps')
        // .option('--react-proptypes', 'For React < 15.5.x. Pulls PropTypes from React.PropTypes')
        // .option('-d, --default-props', 'Include defaultProps')
        // .option('-n, --no-prop-types', 'Doesn\'t include PropTypes')
        // .option('-l, --create-class', 'Uses createClass (or React.createClass when used with pre-15-5)')
        // .option('-p, --pure', 'Extends PureComponent instead of Component (if using -C)')
        // .option('-o, --open', 'Open the generated .jsx file in the default app for that file')
        // .option('--constructor', 'Adds a constructor (if using -C)')
        // .option('--cwm', 'Adds componentWillMount (if using -C)')
        // .option('--cdm', 'Adds componentDidMount (if using -C)')
        .parse(process.argv);

    if (!APP.name || !APP.name === '') {
        console.warn('\n   Whoops!\n\n   You forgot to supply a --name argument!\n   Please supply a name for your component with either --name or -N\n\n'); // eslint-disable-line no-console
        process.exit(1);
    } else {
        banner(`Creating ${APP.name} Component...`);
    }

    if (APP.component) {
        component(APP);
    } else {
        stateless(APP);
    }
};

module.exports = main;
