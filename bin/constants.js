
const CONSTANTS = {
    BANNER_FONT: 'Slant',
    DEFAULTS: {
        COMPONENT_NAME: 'MyComponent',
    },
    TEMPLATE_PATHS: {
        component: 'templates/component.template.jsx',
        stateless: 'templates/stateless.template.jsx',
    },
    TEMPLATE_VARS: {
        componentName: '<% componentName %>',
        componentPropTypes: '<% componentPropTypes %>',
    },
    REPLACEMENT_TEXT: {
        componentPropTypes: componentName => `${componentName}.propTypes = {\n\n};`,
    },
};

module.exports = CONSTANTS;
