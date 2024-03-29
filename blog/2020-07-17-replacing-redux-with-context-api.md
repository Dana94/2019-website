---
title: Replacing Redux with Context API
path: replacing-redux-with-context-api
date: 2020-07-17
tags: ['frontend', 'coding', 'react']
---

The Context API is an alternative way to handle data in components without having to incorporate Redux into your app.

Using `React.createContext()`, you're essentially creating a globally available JavaScript object.

## Create the Context File

In `./src/` create a `context` folder with the file `colors-context.js`. The directory and file name can be whatever you want.

This is where the states will be managed and updated.

First import `React` and `useState` from `react`.

```js
import React, { useState } from 'react';
```

The state data `colors` will be created with `createContext` which is available from the `React` package. This `ColorsContext` will be used directly in components so it needs to be exported.

```js
export const ColorsContext = React.createContext({
    colors: []
});
```

In place of a reducer, I'm gong to create a `ColorsContextProvider` that will update the state. `useState` is here to have a local state `colorsList` mapped to the `ColorsContext.colors`. `colorsList` is what will be modified when needed (with using `setColorsList`), this in turn updates the `ColorsContext.colors` without having to change it directly.

```js
const ColorsContextProvider = props => {

    const [colorsList, setColorsList] = useState([]);

    return (
        <ColorsContext.Provider value={{ colors: colorsList }}>
            {props.children}
        </ColorsContext.Provider>
    )
}

export default ColorsContextProvider;
```

The `ColorsContext.Provider` tags make sure that components using the values in its attribute `value` are notified and re-rendered when they are changed.

`props.children` makes sure anything within these tags is passed along in the app.

## Wrap App in ColorsContextProvider

Now we need a way for the `colors` data to be available in the components. If you recall, Redux had `Provider` tags that inserted the store into the App. Since the `colors` state in already passed in the `ColorsContext.Provider` tags, this part doesn't need to import the state itself.

In `./src/index.js`, the `ColorsContextProvider` needs to be imported and then wrapped around everything.

```js
import ColorsContextProvider from './context/colors-context';

ReactDOM.render(
  <ColorsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorsContextProvider>,
  document.getElementById('root')
);
```

## Display State in App.js

Let's try just displaying the colors list in the `./src/App.js`.

Import `useContext` from `react`and the `ColorsContext`.

```js
import React, { useContext } from 'react';

import { ColorsContext } from './context/colors-context';
```

Create a local context.

```js
const colorsContext = useContext(ColorsContext);
```

Now `colors` can be accessed with `colorsContext.colors` in the component.

```js
<ul>
    {colorsContext.colors.map(color => {
        return <li key={color}>{color}</li>;
    })}
</ul>
```

## Context Methods

Now if we want to add or remove a color, the methods need to be set up in the `colors-context.js` file.

First add the methods that will be accessed in components to update the `colors` state.

```js
export const ColorsContext = React.createContext({
    colors: [],
    addColor: () => { },
    removeColor: () => { }
});
```

The `ColorsContextProvider` will contain the logic for these methods which is similar to how the reducer added and removed a color. Notice that we are using `setColorsList` which is actually updating `colorsList` not `colors` itself. But the `App.js` component will still get the update.

```js
const addColorHandler = (color) => {
    const newColors = [...colorsList];
    newColors.push(color);
    setColorsList(newColors);
}

const removeColorHandler = (color) => {
    setColorsList(colorsList.filter(aColor => aColor !== color));
}
```

In the `ColorsContext.Provider ` tags, map these methods to the ones in `ColorsContext` so any component can use them.

```js
return (
    <ColorsContext.Provider value={{ colors: colorsList, addColor: addColorHandler, removeColor: removeColorHandler }}>
        {props.children}
    </ColorsContext.Provider>
)
```

## Add/Remove Colors in Button.js

Similar to `App.js`, import `useContext` and `ColorsContext` in `Button.js` and create a local `colorsContext`.

Now the methods can be accessed with `colorsContext.addColor()` and `colorsContext.removeColor()`.

```js
import React, { useState, useContext } from 'react';

import './Button.css';
import { ColorsContext } from '../context/colors-context';

const Button = props => {
    const [isAdded, setIsAdded] = useState(false);

    const colorsContext = useContext(ColorsContext);


    const addColorHandler = () => {
        setIsAdded(true);
        colorsContext.addColor(props.color);
    }

    const removeColorHandler = () => {
        setIsAdded(false);
        colorsContext.removeColor(props.color);
    }

    return (
        isAdded ?
            <button onClick={removeColorHandler}>Remove <br /> {props.color}</button> :
            <button onClick={addColorHandler}>Add <br /> {props.color}</button>
    );
}

export default Button;
```

## Use in Class Components

If using a class component, use `contextType` to access the context file data and call `this.context` to get the values.

I created a class component that just prints a message stating the current number of colors added to the list.

```js
import React, { Component } from 'react';

import { ColorsContext } from '../context/colors-context';

class ColorsLength extends Component {

    static contextType = ColorsContext;

    render() {
        return (
            <p>There are currently {this.context.colors.length} colors added.</p>
        )
    }
}

export default ColorsLength;
```

## Combine Contexts

Since Redux can combine multiple reducers, I was curious if the same can be done for multiple contexts. Turns out, you can do this by just wrapping each context's tags around the JSX or the whole app like this repo's example.

## Note

Instead of wrapping the whole App in context tags, you could use the [`Provider`](https://reactjs.org/docs/context.html#contextprovider) and [`Consumer`](https://reactjs.org/docs/context.html#contextconsumer) components to only have specific components subscribe to changes in the values.

With this approach, the logic to add/remove colors would be located in the component using these methods. Personally, I prefer all the logic updating the context should be declared in the context file itself. But this is another approach you could take if it suits your needs.

## Conclusion

I found the Context API very easy to implement compared to Redux's use of `mapStateToProps` and `mapDispatchToProps`. Plus, no need to keep track of action types.

This example can be found in the [`context-api-intro` repo](https://github.com/Dana94/context-api-intro).

Resources:

- [React - Context](https://reactjs.org/docs/context.html)
- [React - Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts)
- [React - Context.Provider](https://reactjs.org/docs/context.html#contextprovider)
- [React - Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-07-17-replacing-redux-with-context-api.md)
