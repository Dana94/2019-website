---
title: React Components
path: react-components
date: 2020-05-08
tags: ['coding', 'react', 'frontend']
---

## Functional Components

When to use:

Pass `props` as parameter.

Name in camel-case.

```js
import React from 'react';

const modal = (props) => {
  return {

  }
}

export default modal;
```

## Class Components

When to use:

Import `Component` from `react`.

Can access internal `state`.

Can access `props`.

Name starts with capital letter, still all camel-case.

```js
import React, {Component} from 'react';

class ShoppingCart extends Component {

  render() {
    return {

    }
  }
}

export default ShoppingCart;
```
[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-08-react-components.md)
