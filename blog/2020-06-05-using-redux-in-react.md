---
title: Using Redux in React
path: using-redux-in-react
date: 2020-06-05
summary: Something...
tags: ['frontend', 'coding', 'react']
---

Redux is a commonly used library that is not affiliated with React. It is used to manage state throughout the app. If you know Vue.js you may have used Vuex, the state management library for Vue.js projects. It's the same idea.

Vuex has `Actions`, `Mutations` and `Getters`.

React has `Actions`, `Reducers` and `Subscriptions`.

So in both libraries there are 3 main functions when managing state:
- what to do with the state (actions)
- how to change the state (mutations and reducers)
- how to get an updated version of the state (getters and subscriptions)

## Table of Contents

## Install

Both `redux` and `react-redux` need to be saved as dev dependencies in your project. `react-redux` connects the data from `redux` to the app components.

```bash
npm install --save redux react-redux
```

## Folder Structure

## Actions

Actions are functions to declare what needs to modify the state. They return an object containing a `type` and optional arguments.

React is not needed to create action files. Each action needs to be exported if it's used in a component.

The actions below either add or remove a color value from the state.
```js
export const addColor = (color) => {
    return {
        type: 'ADD_COLOR',
        color: color
    }
}

export const removeColor = (color) => {
    return {
        type: 'REMOVE_COLOR',
        color: color
    }
}
```

## Reducers

Reducers hold the state for a value and also modify it depending on what actions are called. It's best practice to name the reducer and action file the name of the value being changed. In this case there would be an `colors.js` in both the `actions/` and `reducers/` folders.

The switch statement checks what the `action.type` is to know how to modify the `colors` array with `action.color` being the value passed.

```js
const initialState = {
    colors: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            const colors = [...state.colors];
            colors.push(action.color);
            return {
                colors: colors
            }
        case 'REMOVE_COLOR':
            return {
                colors: state.colors.filter(color => color !== action.color)
            }
        default:
            return state;
    }
}

export default reducer;
```

## Use in a Component

`mapStateToProps` is the common name for mapping global state values in a component. They will be accessed using `props.<state value>`.

All this step is doing is assigning a local prop value to a state value to make it available.

[check]
```js
const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}
```

Used in a component:

```js
<ul>
    {props.colors.map(color => {
    return <li key={color}>{color}</li>;
    })}
</ul>
```

`mapDispatchToProps` is the common name for mapping actions to accessible functions in the component. They will be called using `props.<dispatch>`.

Similar to `mapStateToProps`, props are bring assigned functions to handle dispatching an action from the component.

The argument `dispatch` here is given by Redux. The `actions` are the imports avaible at `actions/index.js` to be used

[check]
```js
const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (color) => dispatch(actions.addColor(color))
    }
}
```

Used in an element:
[check]
```js
<button onClick={() => props.onAddColor('blue')}>Add blue</button> :
```

Connect these with the `connect` package from `react-redux`.

```js
import { connect } from 'react-redux';

// ...

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

Order is important! Make sure to add `null` as a value to the first parameter if `mapStateToProps` is not used. If `mapDispatchToProps` is omitted, then just send one argument in.

These names `mapStateToProps` and `mapDispatchToProps` are commonly used in Redux apps, but they can be whatever you prefer.

Examples:
```js
export default connect(mapStateToProps)(App);
```
```js
export default connect(null, mapDispatchToProps)(App);
```


## Connect Redux to App

In the `./src/index.js` file, Redux needs to connect all reducers by creating a store.

The `createStore` from `redux` takes the `reducer` to create the store.

The `Provider` from `react-redux` provides the wrapping tags to make the store available to the app.

```js
import { createStore } from 'redux'; // Note
import { Provider } from 'react-redux'; // Note

import reducer from './store/reducers/colors'; // Note

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
```

<b>Note:</b> The Provider tags wrap <i>everything</i>.

## Chrome Extension

[Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension) is a useful browser extension specifically for reporting all changes in Redux state.

If you aren't using middleware, it's as simple as adding this line in the `createStore` line.

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

I'll be going over middleware in another post.

## When Not to use Redux

You don't need to use Redux if you only have to manage data in one component. Using the hook `useState` or creating a class component would be able to handle local state change.

Redux is useful to having the state available anywhere along with the actions to modify the state.

## Notes

Create an `actionTypes` file.

Utility file


[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-05-using-vue-apollo-in-vuejs.md)
