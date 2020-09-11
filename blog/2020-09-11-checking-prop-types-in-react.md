---
title: Checking Prop Types in React
path: checking-prop-types-in-react
date: 2020-09-11
tags: ['frontend', 'coding', 'react']
---

When using props in Vue.js components, you have the option to have type checking to make sure the data being passed down is expected.

This example expects the prop `quote` to be an `Object` type and required.

```js
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  }
}
```

The same can be done in React using the [`prop-types` package](https://www.npmjs.com/package/prop-types).

In a React program, install the package:
```bash
npm install --save prop-types
```

My example contains an object called `quote` with 2 string properties: `quote` and `author` which is passed to a component called `Card` to display it.

```js
// App.js

import React from 'react';
import './App.css';

import Card from './components/Card';

function App() {

  const quote = {
    quote: "Everything you want is on the other side of fear.",
    author: "Jack Canfield"
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card quote={quote} />
      </header>
    </div>
  );
}

export default App;
```

In the Card component, the prop types are declared right before the `export default` statement.

One of the minimum checks you can do is just make sure that the prop `quote` is indeed an `Object` type using the `PropTypes.object`.
```js
Card.propTypes = {
    quote: PropTypes.object
}
```

⚠️ Note that when declaring the component's prop types, it uses `propTypes` (starts with lower "p") to wrap everything. The import `PropTypes` (starts with capital "P") is used when assigning the expected checking to each prop.

```js
// Card.js

import React from 'react';
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div>
            "{props.quote.quote}"
            <br />
            -{props.quote.author}
        </div>
    )
}

Card.propTypes = {
    quote: PropTypes.object
}

export default Card;
```

If we change the type of `quote` to `PropTypes.string`, an error will show in the console.

```js
Card.propTypes = {
    quote: PropTypes.string
}
```

![Props type checking error](./images/2020-09-11/checking-error.png)
_Props type checking error_

You can chain `isRequired` to match the expectations in the first Vue.js example.

```js
Card.propTypes = {
    quote: PropTypes.object.isRequired
}
```

So not passing the `quote` will result in this error.

![Props required error](./images/2020-09-11/required-error.png)
_Props required error_

If your prop can be more than one type, you can use `oneOfType` to pass validation by listing them in an array as an argument.

```js
Card.propTypes = {
  quote: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
  ]).isRequired
}
```

You can give a specific validator for a prop too. You can get 3 arguments:

- `props`: all the props contained as an `Object`, so you can reach other props this way
- `propName`: the name of the prop as a String (`quote`)
- `componentName`: the name of the component this prop checking is contained in as a string (`Card`)

If the author is not included in the quote object, we can throw an error in the console checking if the author is provided.

```js
const quote = {
  quote: "Everything you want is on the other side of fear.",
  // author: "Jack Canfield"
}
```

```js
Card.propTypes = {
  quote: function(props, propName, componentName) {
      if (!props.quote.author) {
          return new Error(
              'Invalid prop `' + propName + '` doesn\'t have an author' +
              ' `' + componentName + '`. Validation failed.'
          );
      }
  }
}
```

![Custom validator error](./images/2020-09-11/custom-validator-error.png)
_Custom validator error_

I would recommend checking out more of the [usage](https://www.npmjs.com/package/prop-types#usage) for this package. Type checking for props is important to avoid getting unexpected types and ensuring that required props are available in your program.

This example can be found in the [`prop-checking` repo](https://github.com/Dana94/prop-checking).

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-09-11-checking-prop-types-in-react.md)
