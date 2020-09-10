---
title: Checking Prop Types in React
path: checking-prop-types-in-react
date: 2020-09-11
tags: ['frontend', 'coding', 'react']
---

When using props in components in Vue.js, you have the option to have tye checking to make sure the data being passed down is expected and that the program warns if it's required.

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

Install the package:
```bash
npm install --save prop-types
```

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

If we change the type of `quote` to `PropTypes.string` to be expected, an error will show in the console.

```js
Card.propTypes = {
    quote: PropTypes.string
}
```

![Props checking error](./images/2020-09-11/checking-error.png)
_Props checking error_

You can chain `isRequired` to match the expectations in the first Vue.js example.

```js
Card.propTypes = {
    quote: PropTypes.object.isRequired
}
```

![Props required error](./images/2020-09-11/required-error.png)
_Props required error_

If your prop can be more than one type, you can use `oneOfType` to pass validation.

```js
Card.propTypes = {
  quote: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
  ]).isRequired
}
```

I would recommend checking out more of the docs for this package. Type checking for props is important to avoid getting unexpected types and ensuring that important props are available in your program.

You can give a specific validator for a prop too. You can get 3 arguments:

- `props`: the data the props contain as an Object
- `propName`: the name of the prop as a String
- `componentName`: the name of the component this prop checking is contained in as a String

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

[Found a typo or problem? Edit this page.]()
