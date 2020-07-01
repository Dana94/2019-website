---
title: Using Vue-Apollo
path: using-vue-apollo
date: 2020-07-03
tags: ['frontend', 'coding', 'vue', 'graphql']
---

My first project where I had to use a GraphQL API was my quotes database. The quotes were all set up and I needed a tool to integrate it into my Vue.js project.

Make sure I understand this...

[Vue Apollo](https://apollo.vuejs.org/) is a library that makes it easy to integrate [Apollo](https://www.apollographql.com/),

In this post I'll be using this [Pokemon API](https://graphqlpokemon.favware.tech/).

## Table of Contents

## Install

```bash
npm install --save vue-apollo graphql apollo-boost
```

## Setup

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

## Component

In the component, there will be an `apollo` object for mapping the query to local data.

A very basic query will just have `apollo` containing an attribute for the query.

## Examples:

### No Parameters

### Set Parameters

If you aren't using reactive parameters, you can just put the values in the query.

In this example, the values `dragonite` for argument `pokemon`, `true` for argument `reverse` and `1` for argument `take` are hard-coded.

```js
export default {
  name: 'App',
  apollo: {
    dragonite: {
      query: gql`query{
        getPokemonDetailsByName(pokemon: dragonite reverse: true take: 1) {
          sprite
        }
      }`,
      loadingKey: "Loading dragonite...",
      update: data => data.getPokemonDetailsByName
    }
  }
}
```

The `loadingKey` and `update` will be explained in the last section.

### Reactive Parameters

The `variables` option is useful when you don't want to hard-code the arguments. AN example of this if you had the query running based on a user search input.

One addition to the previous example is that the argument's type has to be defined in the query. I created a name called `getPokemon` to define this part. The name can be whatever you want - it doesn't affect the query.

Looking in the docs, the query `getDexEntries` receives the argument `pokemon` of type `String!` (a string that is required, hence the exclamation point).

The variable defined `pokemon` in the `variables()` object is connected to the `$pokemon` in the `getDexEntries` query.

```js
export default {
  name: 'App',
  apollo: {
    bulbasaur: {
      query: gql`query getPokemon($pokemon: String!){
        getDexEntries(pokemon: $pokemon) {
          species
          evos
        }
      }`,
      loadingKey: "Loading bulbasaur...",
      update: data => data.getDexEntries,
      variables() {
        return {
          pokemon: "bulbasaur"
        }
      }
    }
  }
}
```

### The `$apollo` helper

The `loadingKey` can be a message that shows while the data is loading. It's accessed by `$apollo.queries.<query>.loadingKey`.

To know if the query is still loading, you can use `$apollo.queries.<query>.loading` in a conditional. The paragraph containing the loading message "Loading dragonite..." will show until the data is ready to be displayed.

```html
<p v-if="$apollo.queries.dragonite.loading">{{$apollo.queries.dragonite.loadingKey}}</p>
<img v-else :src="dragonite.sprite" />
```

The `update` option is important if the apollo query attribute is named differently from the query name itself. I normally change the names if they are too long or don't describe what the data is being queried.

In the bulbasaur example, the data from `getDexEntries` is mapped to the value `bulbasaur`.

```js
update: data => data.getDexEntries,
```

```js
bulbasaur: {
  query: gql`query getPokemon($pokemon: String!){
    getDexEntries(pokemon: $pokemon) {
      species
      evos
    }
  }`,
  loadingKey: "Loading bulbasaur...",
  update: data => data.getDexEntries,
  variables() {
    return {
      pokemon: "bulbasaur"
    }
  }
}
```

## Note

I noticed that despite the query working and the data being displayed, the editor may say there's an error in how the query is written.

[image]

<!-- Declare query before vue instance (like tags) -->

<!-- This example can be found in the [`redux-intro` repo](https://github.com/Dana94/redux-intro). -->

I sometimes still struggle using Vue Apollo to be honest. This post summarized everything I've come to understand so far when using the library. I hope this helps anyone else understand how to query with GraphQL in their projects.

Resources:

- [Vue Apollo - Name Matching](https://apollo.vuejs.org/guide/apollo/queries.html#name-matching)

- [Vue Apollo - Smart Query](https://apollo.vuejs.org/api/smart-query.html)

- [Vue Apollo - Dollar Apollo](https://apollo.vuejs.org/api/dollar-apollo.html#properties)


[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-06-26-middleware-in-redux.md)
