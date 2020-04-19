---
title: Schema Types and Resolvers in GraphQL
path: schema-types-and-resolvers-in-graphql
date: 2020-04-18
tags: ['coding', 'graphql']
---

I'm currently building a GraphQL API with [Apollo Server](https://www.apollographql.com/docs/apollo-server/).
The API contains data for authors and quotes.

Since I'm still understanding how to build an API, I wanted to share 2 things that are used:
- **schema types** for defining the types for your data
- **resolvers** which are instructions for what data to return for a GraphQL operation (query, mutation, subscription)

This is a snippet of the 2 lists of authors and quotes I'm using.

Each author has an `id` and `name`.

Each quote has an `id`, `authorId`, and `quote`.

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

## Schema Types

My schema has a type for `Author` to define all authors and the same with `Quote` for quotes. Within each schema type, their data is defined.

For `Author`:
- `id` is type `Int` (Integer)
- `name` is type `String`
- `quotes` is type `[Quotes]`
> The brackets around `Quotes` mean that it is a list and not just one quote of type `Quote` in case this author has more than 1 quote in the database.

For `Quote`:
- `id` is type `Int`
- `authorId` is type `Int`
- `quote` is type `String`
- `author` is type `Author`

You'll notice that both `Author` and `Quote` are referencing the other as one of their data types.

```js
type Author {
  id: Int
  name: String
  quotes: [Quote]
}
type Quote {
  id: Int
  authorId: Int
  quote: String
  author: Author
}
```

Before we talk about resolvers, we need to create a few GraphQL operations that will be under type `Query`.

```js
type Query {
  authors: [Author]
  quotes: [Quote]
}
```
The `authors` and `quotes` queries will return a list of their respected types.

Let's put all the schema types together:

```js
const typeDefs = gql`
type Query {
  authors: [Author]
  quotes: [Quote]
}
type Author {
  id: Int
  name: String
  quotes: [Quote]
}
type Quote {
  id: Int
  authorId: Int
  quote: String
  author: Author
}
`;
```

## Resolvers

Now we can create resolvers to define the data returned for the queries defined above under type `Query`.

The code for this is pretty straightforward. All we're doing is returning the lists of `authors` and `quotes` for each query.

```js
const resolvers = {
  Query: {
    authors: () => authors,
    quotes: () => quotes
  },
};
```

This follows the types we expected to be returned for each operation:

- `authors` is the `[Authors]`
- `quotes` is the `[Quotes]`

This is a wrap-up of the schema and resolvers we've defined:

```js
const typeDefs = gql`
type Query {
  authors: [Author]
  quotes: [Quote]
}
type Author {
  id: Int
  name: String
  quotes: [Quote]
}
type Quote {
  id: Int
  authorId: Int
  quote: String
  author: Author
}
`;

const resolvers = {
  Query: {
    authors: () => authors,
    quotes: () => quotes
  }
};
```

As you can see, the schema and resolvers both relate to each other in that the resolvers are what can be accessed through the API and the schema defines what data is returned.

I've learned a lot so far and I hope this helps someone else better understand GraphQL if they're just starting out.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-04-18-schema-types-and-resolvers-in-graphql.md)
