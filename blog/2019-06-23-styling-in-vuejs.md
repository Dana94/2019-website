---
title: Styling In VueJS
path: styling-in-vuejs
date: 2019-06-23
summary: There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the 2 methods for binding to the `class` and `style` attributes.
tags: ['frontend', 'coding', 'vue']
---

<!-- ![background](./images/blog_bg_1.jpg) -->

> There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the 2 methods for binding to the `class` and `style` attributes.

I still sometimes find myself looking back at the <a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">VueJS docs</a> when applying styles to my elements so this is more of a review for me to finally have this memorized.

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```


### Prerequisites
You should have basic knowledge about HTML, CSS, [Vue.js](https://vuejs.org) and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). Knowing how [Vue Single File components](https://vuejs.org/v2/guide/single-file-components.html) & [GraphQL](https://www.graphql.com/) works is a plus, but not required. Gridsome is a great way to learn both.

Gridsome requires **Node.js** and recommends **Yarn**. [How to setup](/docs/prerequisites)