---
title: Using Vue-Apollo
path: using-vue-apollo
date: 2020-07-03
tags: ['frontend', 'coding', 'vue', 'graphql']
---

My first project where I had to use a GraphQL API was my quotes database. The quotes were all set up and I needed a tool to integrate it into my Vue.js project.

Make sure I understand this...

[Vue Apollo](https://apollo.vuejs.org/) is a library that makes it easy to integrate [Apollo](https://www.apollographql.com/),

Install

```bash
npm install --save vue-apollo graphql apollo-boost
```

Import `ApolloClient` from `apollo-boost` and create a new instance containing the url for the API.

`./src/main.js`

```js
import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/'
})
```

Then import the `VueApollo` plugin from `vue-apollo` and install it into Vue.

`./src/main.js`

```js
import VueApollo from 'vue-apollo';

Vue.use(VueApollo)
```

Last part is to create a `VueApollo` instance with its `defaultClient` as the `apolloClient` created in the previous step and add it to the app.

`./src/main.js`

```js
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
```
f
Next step is optional. If using VS Code, you can install the [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) extension. Then have a `apollo.config.js` file in the root of the project to configure it.

I kept everything the same as in the docs, except add the url to the API I'm using.

```js
module.exports = {
    client: {
        service: {
            name: 'my-app',
            // URL to the GraphQL API
            url: 'https://graphqlpokemon.favware.tech/',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}
```

Examples:

- no parameters
- set parameters
- using variables
- the `update`
- reactive parameters

Note the editor may say there's an error but there's nothing wrong

Example with an existing GraphQL API (not mine)
https://github.com/favware/graphql-pokemon

Steps:




All steps in main.js

apollo.config.js for VS code

Declare query before vue instance (like tags)

or like in App.js, name after query doesn't matter

set query depending on data, loadingKey, loading attributes

<!-- This example can be found in the [`redux-intro` repo](https://github.com/Dana94/redux-intro). -->

<!-- Resources:

- [Redux Docs - Middleware](https://redux.js.org/advanced/middleware)

- [Redux Devtools - Advanced store setup](https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)


[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-26-middleware-in-redux.md) -->
