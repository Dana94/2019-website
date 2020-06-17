---
title: Using Resolvers to Connect Your Data
path: using-resolvers-to-connect-your-data
date: 2020-04-24
tags: ['coding', 'graphql']
---

Referencing [this post](/schema-types-and-resolvers-in-graphql), I want to show how to use arguments to return specific data in the resolvers.

Data:

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
A common resolver example is just to simply return the list of authors for the query `authors`.

```js
const resolvers = {
  Query: {
    authors: () => authors,
  }
};
```
The `authors` returned in this function is the `exports.authors` referenced in the first code block of this post.

Query:
```js
query {
  authors {
    name
  }
}
```
Data returned:
```js
{
  "data": {
    "authors": [
      {
        "name": "Eleanor Roosevelt"
      },
      {
        "name": "M.F.K. Fisher"
      },
      {
        "name": "Norman Cousins"
      },
      {
        "name": "Wicked by Gregory Maguire"
      },
      {
        "name": "Maya Angelou"
      },
      {
        "name": "Edith Sitwell"
      }
    ]
  }
}
```

For another query, I want to return a list of quotes of a specific author. The author's name will be given as an argument.

In learning about resolvers, I had to understand how to connect the authors with their quotes. The connection is finding the `id` in `authors` and returning the `quotes` that have a matching `authorId`.

```js
const resolvers = {
    Query: {
        quotesByAuthorName(parent, args, context, info) {
            const author = authors.find(author => author.name.includes(args.authorName));
            return quotes.filter(quote => quote.authorId === author.id);
        },
    }
};
```

Let's break this down:

The first step is to find the author that has the `name` containing the `authorName` argument (given by the `args` argument). I'm using Array's `find()` method here, assuming that no author shares the same name.

After the author is found, the list of quotes will be filtered using Array's `filter()` method to only return a list of quotes that contain an `authorId` that matches the author's `id`.

You'll notice that there are 4 arguments accepted in resolvers:
- `parent`
- `args`
- `context`
- `info`

What we're focusing on is the `args` which is an object of all the arguments passed in the query.

Query:
```js
query {
    quotesByAuthorName(authorName: "Edith") {
        quote
    }
}
```
Data returned:

```js
"data": {
    "quotesByAuthorName": [
      {
        "quote": "I am patient with stupidity, but not with those who are proud of it."
      }
    ]
}
```

As long as both `authors` and `quotes` data are available, they can be used together to manage more complex queries.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-04-24-using-resolvers-to-connect-your-data.md)
