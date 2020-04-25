---
title: Styling In React
path: styling-in-react
date: 2020-05-01
tags: ['coding', 'react', 'frontend']
---

## Inline Styles

Properties are written in camel-case with their values in quotations.

```js
<p style={{textAlign: 'center',color: 'green'}}>Blah Blah</p>
```

## Class Names

Webpack is already a part of a starter-react app.

Import a stylesheet using `import` into a component and assign the `className` to the elements.

```js
// Button.js

import React, { Component } from 'react';

import './Button.css'; // Tell webpack that Button.js uses these styles

class Button extends Component {
  render() {
    return (
      <button
        class="Button">
        Button Component
      </button>);
  }
}

export default Button;
```

```css
.Button {
  padding: 10px;
  border: 1px solid black;
}
```

One thing you may notice is if this class us used in another component _without_ importing the `Button.css` stylesheet, the class will still style the elements because...

```js
// App.js
<button class="Button">Button App with Button styles</button>
```

## Scoped styles:

Simply create a `modules.css` file to activate scoped styles.

To append more than 1 class from the stylesheet:

`className={[classes.Button, classes.error].join(' ')}`

show the console list of scoped styles and their hash



[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-04-24-using-resolvers-to-connect-your-data.md)
