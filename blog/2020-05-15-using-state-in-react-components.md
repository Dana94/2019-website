---
title: Using State in React Components
path: using-state-in-react-components
date: 2020-05-15
tags: ['coding', 'react', 'frontend']
---

In class components, you can have an internal state to access data only important to this component.

I created a state object that has a `list` and `checkingOut` property for a `ShoppingCart` class.

```js
state = {
    list: ['bread', 'apples', 'tea'],
    checkingOut: false
}
```
State data is accessed using `this.state.<data>` in the component.

```js
render() {
    return (
        <div>
            List:
            <ul>
                {
                    this.state.list.map(item => {
                        return <li key={item}>{item}</li>;
                    })
                }
            </ul>
            <p>Checking out? {this.state.checkingOut ? 'Yes' : 'No'}</p>
            <button onClick={this.onCheckout}>Check out</button>
        </div >
    )
}
```

State data can also be modified using `this.setState()`.

In the example below, `checkingOut` is set to `true` when the button "Check out" is clicked.

`this.setState()` does not overwrite the other data (like `list`) even though it's not included in the update to the state object.

```js
state = {
    list: ['bread', 'apples', 'tea'],
    checkingOut: false
  }

onCheckout = () => {
    this.setState({checkingOut: true});
}

render() {
    return (
      <div>
        List:
        <ul>
          {
            this.state.list.map(item => {
                return <li key={item}>{item}</li>;
            })
          }
        </ul>
        <p>Checking out? {this.state.checkingOut ? 'Yes' : 'No'}</p>
        <button onClick={this.onCheckout}>Check out</button>
      </div >
    )
}
```

If you need to know the data's current state in order to modify it, an argument that represents the current state can be passed (which is called `prevState` in the code below).

So `checkingOut` will be set to the opposite boolean value of its current value.

```js
this.setState((prevState) => {
    return {
        checkingOut: !prevState.checkingOut
    }
});
```

Example with everything discussed:

```js
import React, { Component } from 'react';

class ShoppingCart extends Component {

  state = {
    list: ['bread', 'apples', 'tea'],
    checkingOut: false
  }

  onCheckout = () => {
    // this.setState({checkingOut: true});
    this.setState((prevState) => {
        return {
            checkingOut: !prevState.checkingOut
        }
    });
  }

  render() {
    return (
      <div>
        List:
        <ul>
          {
            this.state.list.map(item => {
                return <li key={item}>{item}</li>;
            })
          }
        </ul>
        <p>Checking out? {this.state.checkingOut ? 'Yes' : 'No'}</p>
        <button onClick={this.onCheckout}>Check out</button>
      </div >
    )
  }
};

export default ShoppingCart;
```

Coming from a Vue.js background, I found a component's internal state to be similar to the data returned in a Vue component where the data is managed directly from the component and is modified there.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-08-react-components.md)
