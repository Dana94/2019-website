---
title: Using Redux in React
path: using-redux-in-react
date: 2020-06-07
summary: Redux is a commonly used library that is not affiliated with React. It is used to manage state throughout the app. If you know Vue.js you may have used Vuex, the state management library for Vue.js projects. It's the same idea.
tags: ['frontend', 'coding', 'react']
---

Redux is a commonly used library that is not affiliated with React. It is used to manage state throughout the app. If you know Vue.js you may have used Vuex, the state management library for Vue.js projects. It's the same idea.

Vuex has `Actions`, `Mutations` and `Getters`.

Redux has `Actions`, `Reducers` and `Subscriptions`.

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

There will be a designated `store` folder to hold all actions and reducers for your project.

Here there will be separate `actions/` and `reducers/` folders to separate actions and reducers files.

It's best practice to name the reducer and action file the name of the state value being changed. In this case there would be a `colors.js` in both the `actions/` and `reducers/` folders.

![Folder structure with Redux](./images/2020-redux/folders.jpg)
_Folder structure with Redux_

## Connect Redux to App

Redux needs to connect all reducers by creating a store in the `index.js` file located in the root of the project.

The `createStore` from `redux` takes the `reducer` to create the store.

The `Provider` from `react-redux` provides the wrapping tags to make the store available to the app. The `store` created is passed in through the tags.

The reducers file imported here will be introduced later.

`./src/index.js`

```js
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducers/colors';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```

<b>Note:</b> The Provider tags should wrap <i>everything</i>.

If you have more than one reducer, you can use `combineReducers` from `redux` to combine them.

```js
import { createStore, combineReducers } from 'redux';

import reducer from './store/reducers/colors';
import anotherReducer from './store/reducers/other';

const rootReducer = combineReducers({
    colorsReducer: reducer,
    other: anotherReducer
});

const store = createStore(rootReducer);
```

## Actions

Actions are functions to declare how to the state will be changed. They return an object containing a `type` and optional arguments.

React is not needed to create action files. Each action needs to be exported if it's used in a component.

The actions below either add or remove a color value from the state.

`./src/store/actions/colors.js`

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

If you have multiple action files, it's useful to include an index.js to allow a component to import any actions all from one place.

`./src/store/actions/index.js`

```js
export {addColor, removeColor} from './colors';
```

That way, there is no confusion if the correct actions file is being called. Of course, there is only one actions file in this example so it's not necessary.

```js
import * as actions from '../store/actions/index.js';
```

## Reducers

Reducers hold the state for a value and modify it depending on what actions are called.

The switch statement checks what the `action.type` is to know how to modify the `colors` array with `action.color` being the value passed.

`./src/store/reducers/colors.js`

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

## Subscriptions

Subscriptions are executed whenever an action is dispatched and the store is updated.

The subscription is declared immediately under where the store is created. This is used to avoid having to call `getState` manually to get the most up-to-date state.

It contains a function that executes when the state is updated.

`./src/index.js`

```js
const store = createStore(reducer);

store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});
```


## Use in a Component

`mapStateToProps` is the common name for mapping global state values in a component. They will be accessed using `props.<state value>`.

All this step is doing is assigning a local prop value to a state value to make it available.

This is declared outside of the component, typically before the line exporting the component.

```js
const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}
```

Referenced in a component:

```js
<ul>
    {props.colors.map(color => {
    return <li key={color}>{color}</li>;
    })}
</ul>
```

If using more than one reducer, the names assigned to them are used to access their individual states.

`./src/index.js`
```js
const rootReducer = combineReducers({
    colorsReducer: reducer,
    otherReducer: anotherReducer
});
```
So `colorsReducer` and `otherReducer` are used here.
```js
const mapStateToProps = state => {
    return {
        colors: state.colorsReducer.colors,
        other: state.otherReducer.value
    }
};
```

`mapDispatchToProps` is the common name for mapping actions to accessible functions in the component. They will be called using `props.<dispatch>`.

Similar to `mapStateToProps`, props are bring assigned functions to handle dispatching an action from the component.

The arguments `state` and `dispatch` are given by Redux. The `actions` are the imports available at `./src/store/actions/index.js` to be used.

```js
import * as actions from '../store/actions/index';

// ...

const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (color) => dispatch(actions.addColor(color)),
        onRemoveColor: (color) => dispatch(actions.removeColor(color)),
    }
}
```

Used in an element:

```js
<button onClick={() => props.onAddColor('blue')}>Add blue</button> :
```

The names `mapStateToProps` and `mapDispatchToProps` are commonly used in Redux apps, but they can be whatever you prefer.

The last thing to do is to use the `connect` package from `react-redux` to connect these functions to the component.

```js
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

// component declared here

const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (color) => dispatch(actions.addColor(color)),
        onRemoveColor: (color) => dispatch(actions.removeColor(color)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

When it comes to connecting your functions, order is important! Make sure to add `null` as a value to the first parameter if `mapStateToProps` is not used. If `mapDispatchToProps` is omitted, then just send one argument in.

Examples:
```js
export default connect(mapStateToProps)(App);
```
```js
export default connect(null, mapDispatchToProps)(App);
```

If there is already a higher order component wrapping the component in the export default statement, you can wrap the entire thing with `connect`.

```js
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(App));
```

If using `react-router` in your app, it will break the functionality.

Use `withRouter` from `react-router-dom` to fix this.

```js
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//...

export default withRouter(connect(null, mapDispatchToProps)(App));
```

## Chrome Extension

[Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension) is a useful browser extension specifically for reporting all changes in Redux state.

Whenever an action is dispatched, it will show in the extension along with what was changed.

If you aren't using middleware (in a future post), then just add the value shown below as a second argument in the `createStore`.

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

![Redux Devtools](./images/2020-redux/redux_devtools.jpg)
_Redux Devtools_

## When Not to use Redux

You don't need to use Redux if you only have to manage data in one component. Using the hook `useState` or creating a class component would be able to handle local state change.

Redux is useful to having the state available anywhere along with the actions to modify it.

## Notes

If you have more than a few types to use in your actions, a file exporting all these types would be useful to keep track of changes.

`./src/store/actions/actionTypes.js`

```js
export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';
```

This needs to be imported in any action files to use the types.

```js
import * as actionTypes from './actionTypes';

export const addColor = (color) => {
    return {
        type: actionTypes.ADD_COLOR,
        color: color
    }
}

export const removeColor = (color) => {
    return {
        type: actionTypes.REMOVE_COLOR,
        color: color
    }
}
```

If you're interested in the repo for these examples, it is available [here](https://github.com/Dana94/redux-intro).

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-07-using-redux-in-react.md)
