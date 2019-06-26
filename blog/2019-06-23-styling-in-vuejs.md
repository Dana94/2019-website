---
title: Styling In VueJS
path: styling-in-vuejs
date: 2019-06-23
summary: There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attributes.
tags: ['frontend', 'coding', 'vue']
---

> There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attributes.

I still sometimes find myself looking back at the <a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">VueJS docs</a> when applying styles to my elements so this is more of a review for me to finally have this memorized.

Bear with me, these styles will be horribly boring but this is for syntax notes so hopefully you get something out of this.


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
# Style Attribute

Using the `v-bind:` or `:` before the `style` attribute, you can assign values from the `data` object.

This example assigns the `color` style to whatever value `headerColor` is, which in this case is white.

Since `background-color` is a hyphenated style name, it can be written 2 ways.

It can be written with the hyphen in quotations.

Notice that the list of styles are contained in curly braces.
```html
  <h1 :style="{color: headerColor, 'background-color': 'black'}">
    Heading
  </h1>
```
Or written in camel case with no quotations.
```html
  <h1 :style="{color: headerColor, backgroundColor: 'black'}">
    Heading
  </h1>
```
Perhaps you need to add many inline-styles to your element, which can get lengthy. Using objects simplifies this by setting the object to the style attribute.

Here, the curly braces aren't used.
```html
  <h1 :style="headerStyles">
    Heading
  </h1>
```
Referencing the data object at the start of this post, this is equivalent to writing the styles like this:
```html
  <h1 style="color: white; background-color: black;">
    Heading
  </h1>
```
You can include more than one object by listing them in an array.
```html
  <h1 :style="[headerStyles, headerHeight]">
  Heading
  </h1>
```
Want to mix both objects and regular styles together? No problem.

Just make sure the inline styles are wrapped in curly braces. Then drop it into the array.
```html
<h1 :style="[headerStyles, {borderRadius: borderRadius}]">
  Heading
</h1>
```

# Class Attribute

The syntax for classes is similar to styles. Something to keep in mind to avoid confusion:
* `style` attribute holds properties. Their value can determined by data values as well as packaged up in an object.
* `class` attribute holds class names like usual. But they can also be set as properties with a boolean value detemining if the element is assigned the class.

