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

# Install

Both `redux` and `react-redux` need to be saved as dev dependencies in your project. `react-redux` connects the data from `redux` to the app components.

```
npm install --save redux react-redux
```

# Folder Structure

## Actions

## Reducers

## Use in a Component

`mapStateToProps` is the common name for mapping global state values in a component. They will be accessed using `props.<state value>`.

[check]
```js
const mapStateToProps = state => {
    return {
        items: state.items
    }
}
```

`mapDispatchToProps` is the common name for mapping actions to accessible functions in the component. They will be called using `props.<dispatch>`.

[check]
```js
const mapDispatchToProps = dispatch => {
    return {
        onAdditem: (item) => dispatch(actions.addItem(item))
    }
}
```

Connect these with the `connect` package from `react-redux`.

```js
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

Order is important! Make sure to add `null` as a value to the first parameter if `mapStateToProps` is not used. If `mapDispatchToProps` is omitted, then just send one argument in.

These names `mapStateToProps` and `mapDispatchToProps` are commonly used in Redux apps, but they can be whatever you prefer.

## Connect Redux to App

In the `./src/index.js` file, Redux needs to connect all reducers by creating a store.

```js

```

# Chrome Extension

[Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension) is a useful browser extension specifically for reporting all changes in Redux state.

# When Not to use Redux

You don't need to use Redux if you only have to manage data in one component.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-05-using-vue-apollo-in-vuejs.md)
