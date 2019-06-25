---
title: Styling In VueJS
path: styling-in-vuejs
date: 2019-06-23
summary: There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attributes.
tags: ['frontend', 'coding', 'vue']
---

<!-- ![background](./images/blog_bg_1.jpg) -->

> There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attributes.

I still sometimes find myself looking back at the <a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">VueJS docs</a> when applying styles to my elements so this is more of a review for me to finally have this memorized.

Bear with me, these styles will be horribly boring but this is for syntax notes so hopefully you get something out of this.

# Inline-styles

There are a few ways to set styles.

Using the `v-bind:` or `:` before the `style` attribute, you can assign values from the `data` object.

This is the one the examples will be referencing.
```js
export default {
  name: "app",
  data() {
    return {
      headerColor: "white",
      headerStyles: {
        color: "white",
        backgroundColor: "black"
      },
      headerHeight: {
        height: "60px"
      },
      borderRadius: "25%"
    };
  }
};
```

This example assigns the `color` style to whatever value `headerColor`, which in this case is white.

Since `background-color` is a hyphenated style name, it can be written 2 ways.

It can be in quotations.
```html
  <h1 :style="{color: headerColor, 'background-color': 'black'}">
    Heading
  </h1>
```
Or written in camelcase with no quotations.
```html
  <h1 :style="{color: headerColor, backgroundColor: 'black'}">
    Heading
  </h1>
```
You can also set styles with objects.
```html
  <h1 :style="headerStyles">
    Heading
  </h1>
```
Referencing the data object at the start of this post, this code is equivalent to writing the styles like this:
```html
  <h1 style="color: white; background-color: black">
    Heading
  </h1>
```