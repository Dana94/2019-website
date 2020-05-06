---
title: React Components
path: react-components
date: 2020-05-08
tags: ['coding', 'react', 'frontend']
---

There are 2 types of components you can use in a React project:

- class
- functional

## Class Components

- Class components are used when you need to hold data in a state for a component and to use logic in lifecycle hooks (I'll be making a future post on this).

- Both `React` and `Component` need to be imported from the `react` package.

- Can access an internal `state` where data only needed in this component can be stored and managed (see example below).

- Can access `props` with `this.props.<data>`.

- Class name starts with capital letter.

```js
import React, {Component} from 'react';

class ShoppingCart extends Component {

  state = {
    checkingOut: false
  }

  handleCheckout = () => {
    this.setState({checkingOut: true});
  }

  render() {
    return (
      <div>
        <p>Total price: {this.props.totalPrice}</p>
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
};

export default ShoppingCart;
```

## Functional Components

- Functional components are used when state management is not needed in the component or you don't need to use lifecycle hooks.

- In order to pass data to the component (known as `props`) it needs to be declared as a parameter and is accessed with `props.<data>`.

```js
import React from 'react';

const modal = (props) => {
  return (
    <div>{props.error}</div>
  );
};

export default modal;
```

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-08-react-components.md)
