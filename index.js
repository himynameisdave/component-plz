#!/usr/bin/env node
const APP = require('commander');
const version = require('./package.json').version;
// const component = require('./bin/modules/component.js');
// const stateless = require('./bin/modules/stateless.js');


APP.version(version)
    .option('-N, --name [componentName]', 'Name for your component [MyComponent]', 'MyComponent')
    .option('-C, --component', 'Create a class extends Component (default)')
    .option('-S, --stateless', 'Create a stateless function component')
    // .option('-c, --connected', 'Adds Redux connect, including mapStateToProps & mapDispatchToProps')
    // .option('-d, --default-props', 'Include defaultProps')
    // .option('-n, --no-prop-types', 'Doesn\'t include PropTypes')
    // .option('-l, --create-class', 'Uses createClass (or React.createClass when used with pre-15-5)')
    // .option('-p, --pure', 'Extends PureComponent instead of Component (if using -C)')
    // .option('--constructor', 'Adds a constructor (if using -C)')
    // .option('--cwm', 'Adds componentWillMount (if using -C)')
    // .option('--cdm', 'Adds componentDidMount (if using -C)')
    // .option('--pre-15-5', 'For React < 15.5.x. Pulls PropTypes from React.PropTypes')
    .parse(process.argv);


console.log(APP);
