---
title: Using State in React Components
path: using-state-in-react-components
date: 2020-05-15
tags: ['coding', 'react', 'frontend']
---

In class components, you can have an internal state to access data only important to this component.

```js
import React, {Component} from 'react';

class Modal extends Component {
    state = {

    }

    update() {
        this.setState({});
    }

    update2() {
        this.setState(prevState => {

        })
    }

    render() {
        return (

        );
    }
}

export default Modal;
```

Access using `this.state.<data>`.

Change state data using `this.setState()`. Can use `prevState` as a first argument to receive the prev state's value.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-08-react-components.md)
