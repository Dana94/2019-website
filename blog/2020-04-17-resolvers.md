---
title: Using Apollo in GraphQL
path: new-post-apollo
date: 2020-04-17
tags: ['coding', 'graphql']
---

I'm currently building a GraphQL API with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (still in progress).
The API contains data for authors and quotes.

Since I'm still understanding how to build an API, I wanted to share 2 things that are used:
- schema types (defining the types for your data)
- resolvers (instructions for what data to return for a GraphQL operation - query, mutation, subscription)

This is a snippet of the list of authors and quotes I'm using. There are 2 lists with authors containing an `id` and `name` and quotes having an `id`, `authorId`, and the `quote`.

```js
exports.authors = [
    {
        id: 1,
        name: 'Eleanor Roosevelt'
    },
    {
        id: 2,
        name: 'M.F.K. Fisher'
    },
    {
        id: 3,
        name: 'Norman Cousins'
    },
    {
        id: 4,
        name: 'Wicked by Gregory Maguire'
    },
    {
        id: 5,
        name: 'Maya Angelou'
    },
    {
        id: 6,
        name: 'Edith Sitwell'
    }
];

exports.quotes = [
    {
        id: 1,
        authorId: 1,
        quote: 'A woman is like a tea bag. You never know how strong she is until she gets into hot water.',
    },
    {
        id: 2,
        authorId: 2,
        quote: 'First we eat, then we do everything else.',
    },
    {
        id: 3,
        authorId: 3,
        quote: 'History is a vast early warning system.',
    },
    {
        id: 4,
        authorId: 4,
        quote: 'There was much to hate in this world, and too much to love.'
    },
    {
        id: 5,
        authorId: 4,
        quote: 'As long as people are going to call you a lunatic anyway, why not get the benefit of it? It liberates you from convention.'
    },
    {
        id: 6,
        authorId: 5,
        quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        id: 7,
        authorId: 6,
        quote: 'I am patient with stupidity, but not with those who are proud of it.'
    }
];
```

For schema types, I will have one for `Author` and `Quote` to define what are the types of their data.

For `Author`:
- `id` is type `Int` (Integer)
- `name` is type `String`
- `quotes` will be a list of `Quotes` (a created schema type we'll see in a moment) that is type `[Quotes]`
> The brackets around `Quotes` mean that it is a list and not just one quote of type `Quote` in case this author has more than 1 quote in the database.

For `Quote`:
- `id` is type `Int`
- `authorId` is type `Int`
- `quote` is type `String`
- `author` is type `Author` (a created schema type we'll see in a moment)

[Found a typo or problem? Edit this page.]()
