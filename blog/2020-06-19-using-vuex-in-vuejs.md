---
title: Using Vuex in Vue.js
path: using-vuex-in-vuejs
date: 2020-06-19
summary: Something...
tags: ['frontend', 'coding', 'vue']
---

I recently made a [Redux](/using-redux-in-react) post and thought it's make sense to finally make another Vue.js related post and introduce Vuex.

Vuex has `Actions`, `Mutations` and `Getters`.

Actions decide what to do with the state.

Mutations are what affects the state (they are called by actions).

Getters return the state to your components.

## Table of Contents

## Install

Save `vuex` as a dev dependencies in your project.

```bash
npm install vuex --save
```

## Folder Structure

There will be a designated `store` folder to hold all actions and reducers for your project.

There is a `store.js` file here. Depending on your store, you can hold all the code for the store here, but I'm going to not do that and instead make a subdirectory that handles all the actions, mutations, and getters.

In `./src/store/store.js` we're just creating the store.

`Vue` and `Vuex` are both used here with `colors` being imported by that subdirectory mentioned earlier (we'll get to this in the next step).

```js
import Vue from 'vue';
import Vuex from 'vuex';

import colors from './modules/colors';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        colors
    }
});
```

You'll see the `modules` object in the new store we created. This is similar to how [Redux combines reducers](/using-redux-in-react#use-in-a-component) in the project's root `index.js` file. If I have more than one module, their functions are separated.

In `store/` add a `modules/` folder with a name to encompass the store data or this file. Here there will be a `colors.js` for this.

![Folder structure with Vuex](./images/2020-06-19/folders.jpg)
_Folder structure with Vuex_

## Create the Store

The `colors.js` will contain:

- state
- mutations
- actions
- getters

For the state, there just needs to be an array holding all the color names.

```js
const state = {
    colors: []
}
```

This state declared will be modified with mutations adding or removing colors from the array.

I was taught to name mutations in all uppercase so that's what you see below.

The arguments will always have `state` and other optional arguments used to modify it.

For `ADD_COLOR`, the new `color` is pushed onto the `state.colors` array.

For `REMOVE_COLORS`, a new `state.colors` is assigned by filtering the array and returning all colors that don't match the one being removed.

```js
const mutations = {
    ADD_COLOR(state, color) {
        state.colors.push(color);
    },
    REMOVE_COLOR(state, color) {
        state.colors = state.colors.filter(aColor => aColor !== color);
    }
};
```

Next are the actions. These will be dispatched from a component to call the mutation.

Every action has at least the `{commit}` argument used to call a mutation.

`addColor` calls `ADD_COLOR` passing the payload (which is `color`).

`removeColor` calls `REMOVE_COLOR` passing the payload (which is `color`).

```js
const actions = {
    addColor({commit}, payload) {
        commit('ADD_COLOR', payload);
    },
    removeColor({commit}, payload) {
        commit('REMOVE_COLOR', payload)
    }
};
```

Finally there is a single getter for a component to receive the latest `state.colors`.

Like with mutations, the state needs to be passed as a parameter to return it.

```js
const getters = {
    getColors(state) {
        return state.colors;
    }
};
```

Then everything declared needs to be exported to be imported into the `store.js`.

```js
export default {
    state,
    mutations,
    actions,
    getters
}
```

## Connect the Store to App

The store needs to be imported and passed as an argument in the created `Vue` instance for the project.

`./src/main.js`

```js
import Vue from 'vue'
import App from './App.vue'

import store from './store/store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

## Use in a Component

Now that the store is all set up, a component can access the state using actions and getters created previously.

2 ways to use actions.

- `dispatch` command
- `mapActions`

With the action's name, use `this.$store.dispatch` in your component to dispatch an action in your store. If you need to pass a value, that's the second argument.

Calling the `addColor` action:

```js
this.$store.dispatch('addColor', this.color);
```

With `mapActions`, this needs to be imported from `vuex`.

Within methods, `mapActions` contains the string values of the created actions in the store.

With these actions available, they can be called without the use of `dispatch`.

```js

// both commands are equal
this.$store.dispatch('addColor', this.color)

this.addColor(this.color)

```

```js
import { mapActions } from 'vuex'

methods: {
  ...mapActions([
    'addColor',
    'removeColor'
  ]),
  addColorHandler() {
    this.addColor(this.color);
  },
  removeColorHandler() {
    this.removeColor(this.color);
  }
}
```

2 ways to use getters.

- `dispatch` command
- `mapGetters`

With the name of the getter, use `this.$store.getters` in your component to receive the state data.

Calling the `getColors` getter:

```js
this.$store.getters.getColors;
```

Similar to `mapActions`, there is a `mapGetters` that can be used in the component's computed properties (unlike `mapActions` being declared in methods).

```js
import { mapGetters } from 'vuex';

computed: {
  ...mapGetters([
    'getColors'
  ])
}
```

This would be called with `this.getColors` in the component.

## Chrome Extension

[Vue.js Devtools](https://github.com/vuejs/vue-devtools) has a part for managing state in your store. I've only used it by installing it in Chrome.

![Redux Devtools](./images/2020-06-07/redux_devtools.jpg)
_Redux Devtools_

If you're interested in the repo for these examples, it is available [here](https://github.com/Dana94/redux-intro).

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-07-using-redux-in-react.md)
