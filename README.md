## component-plz
> [![Build Status](https://travis-ci.org/himynameisdave/component-plz.svg?branch=master)](https://travis-ci.org/himynameisdave/component-plz) [![Coverage Status](https://coveralls.io/repos/github/himynameisdave/component-plz/badge.svg?branch=master)](https://coveralls.io/github/himynameisdave/component-plz?branch=master)

A simple command-line tool to quickly generate a React component file.

### Usage

Install it globally like this:

```
yarn global add component-plz

OR

npm i -g component-plz
```

You can `cd` into the directory that you want to create the component in, and run `component-plz [options]`.

### Options

```
component-plz --help

  Options:

  -h, --help                  output usage information
  -V, --version               output the version number
  -N, --name [componentName]  Name for your component [MyComponent]
  -C, --component             Create a class extends Component (default)
  -S, --stateless             Create a stateless function component
```

You *should* specify a name for your component (using `-N`). Expects the camelCased name for your component (eg: `MyComponent`) and generates a file called `my-component.jsx`. Defaults to `MyComponent` if you don't provide a name.

You *should* specify either `component` or `stateless` (with either`-C` or `-S`), the rest of the options are fairly optional.

#### **`--component`**

Running with `--component` (or `-C`) generates something along the lines of this:

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        return (
            <div>
                MyComponent
            </div>
        );
    }
}

MyComponent.propTypes = {

};

export default MyComponent;

```


#### **`--stateless`**

Running with `--stateless` (or `-S`) generates something along the lines of this:

```js
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    return (
        <div>
            MyComponent
        </div>
    );
}

MyComponent.propTypes = {

};

export default MyComponent;

```


---

> *Crafted by himynameisdave in 2017*
