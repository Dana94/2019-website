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

- When you need to hold data in a state for a component and to use logic in lifecycle hooks (I'll be making a future post on this).

- Both `React` and `Component` need to be imported from the `react` package.

- Can access a local `state` where data only needed in this component can be stored and managed (see example below).

- Can access `props` with `this.props.<data>`.

- Class name is capitalized.

- The body of the component's function is wrapped in `render()` with it containing a `return` statement wrapping a single element in parentheses to allow multi-line code.
All of the elements are wrapped in one tag.

```js
render() {
    return (
      <div></div>
    )
}
```

In this `ShoppingCart` class component, there is an internal state called `checkingOut` that is set to `true` when the checkout button is clicked.

`this.state.checkingOut` accesses the state data.

There is an expected value `totalPrice` passed to the component.
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
        <button onClick={this.handleCheckout}>checkout</button>
        <p>Checking out? {this.state.checkingOut ? 'Yes' : 'No'}</p>
      </div>
    );
  }
};

export default ShoppingCart;
```

Used in another component:

```js
import ShoppingCart from './component/ShoppingCart';

//...

<ShoppingCart totalPrice="$0"/>
```

## Functional Components

- Functional components are simply JavaScript functions.

- Cannot use local state or lifecycle hooks.

- Only `React` needs to be imported from the `react` package.

- In order to pass data to the component (known as `props`) it needs to be declared as a parameter and is accessed with `props.<data>`.

- The body of the component's function is wrapped in `return`, no `render()` needed.

```js
import React from 'react';

const modal = (props) => {
  return (
    <div>{props.error}</div>
  );
};

export default modal;
```

Used in another component:

```js
import Modal from './component/Modal';

//...

<Modal error="Problem!" />
```

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-08-react-components.md)
