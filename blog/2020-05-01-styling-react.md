---
title: Styling In React
path: styling-in-react
date: 2020-05-01
tags: ['coding', 'react', 'frontend']
---

This is a walkthrough on how to apply styles through a basic react app created with the `create-react-app` [command] (https://github.com/facebook/create-react-app#quick-overview). The project I created is called "react-styles".

```bash
npx create-react-app react-styles
```

## Inline styles

In the `style` attribute within double curly braces, CSS properties are written in camel-case with their values in quotations.

```js
<p style={{color: 'red', textAlign: 'center'}}>This text will have inline styles.</p>
```

## Using classes

Import a stylesheet into the component file to have its declared classes available to elements. The element lists the classes within the attribute `className` instead of `class`.

```css
/* App.css */

.button {
  background-color: black;
  color: white;
  padding: 1rem;
  display: block;
  margin: 1rem auto;
}
```
```js
import './App.css';

// ...

<button className="button">App Button</button>
```

## Scoped styles:

If you're coming from a Vue.js background, you would be familiar with "scoped-styles" which keep a component's styles separate from affecting other components.

React uses Webpack to accomplish this. No need to install anything, it's already a part of the starter-react app.

Simply create a `<name>.module.css` file to use scoped styles.

I created a `Button` component with a class created in `Button.module.css`.

Unlike the `button` class created before, this one has the background-color and text color switched.

```css
/* Button.module.css */

.Button {
    background-color: white;
    color: black;
    padding: 1rem;
    display: block;
    margin: 1rem auto;
}
```

You need name the import (here I used `classes`) to access the classes.

`classes` is an object of all the classes in `Button.module.css`.

```js
// Button.js

import React, { Component } from 'react';

import classes from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <button className={classes.Button}>Button with scoped styles</button>
        );
    }
}

export default Button;
```

In the console, `classes` looks like this:

```bash
{Button: "Button_Button__SRy8D"}
```

When rendered, the button will have the `Button` value as its class.

```html
<button class="Button_Button__SRy8D">Button with scoped styles</button>
```

What you're seeing is Webpack's work. It creates a unique hash to make the class unique to this component.

To append more than 1 class from the stylesheet:

`className={[classes.Button, classes.error].join(' ')}`


[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-04-24-using-resolvers-to-connect-your-data.md)
