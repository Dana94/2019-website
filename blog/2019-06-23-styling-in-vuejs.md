---
title: Styling In VueJS
path: styling-in-vuejs
date: 2019-06-23
summary: There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attribjjjjutes.
tags: ['frontend', 'coding', 'vue']
---

> There are various ways to attach styles on elements in VueJS. Here, I'm going to explain the methods for binding to the `class` and `style` attributes.

I still sometimes find myself looking back at the <a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank">VueJS docs</a> when applying styles to my elements so this is more of a review for me to finally have this memorized.

Bear with me, these styles will be horribly boring but this is for syntax notes so hopefully you get something out of this.


This is the data the examples will be referencing.
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
      borderRadius: "25%",
      bgColor: 'purple',
      attachColor: true
    };
  },
  computed: {
    headerClasses() {
      return {
        pink: false,
        purple: true
      }
    }
  }
};
```
```html
<style lang="scss">
  li {
    display: inline-block;
    margin: 0 10px;

    &.active {
      color: green;
    }
  }

  .pink {
    color: pink;
  }

  .purple {
    background-color: purple;
  }
</style>
```

# Style Attribute

Using the `v-bind:` or `:` before the `style` attribute, you can assign values from the `data` object.

This example assigns the `color` style to whatever value `headerColor` is, which in this case is white.

Since `background-color` is a hyphenated style name, it can be written 2 ways.

It can be written with the hyphen in quotations.

(Notice that the list of styles are contained in curly braces.)
```html
  <h1 :style="{color: headerColor, 'background-color': 'black'}">Heading</h1>
```
Or written in camel case with no quotations.
```html
  <h1 :style="{color: headerColor, backgroundColor: 'black'}">Heading</h1>
```
Perhaps you need to add many inline-styles to your element, which can get lengthy. Using objects simplifies this by setting the object to the style attribute.

Here, the curly braces aren't used.
```html
  <h1 :style="headerStyles">Heading</h1>
```
Referencing the data object at the start of this post, this is equivalent to writing the styles like this:
```html
  <h1 style="color: white; background-color: black;">Heading</h1>
```
You can include more than one object by listing them in an array.
```html
  <h1 :style="[headerStyles, headerHeight]">Heading</h1>
```
Want to mix both objects and regular styles together? No problem.

Just make sure the inline styles are wrapped in curly braces. Then drop it into the array.
```html
  <h1 :style="[headerStyles, {borderRadius: borderRadius}]">Heading</h1>
```

# Class Attribute

The syntax for classes is similar to styles. Something to keep in mind to avoid confusion:
* `style` attribute holds properties. Their value can determined by data values as well as packaged up in an object.
* `class` attribute holds class names like usual. But they can also be set as properties with a boolean value detemining if the element is assigned the class (this is useful if there is a specific pattern in which elements get assigned the class). Computed properties can also be used for assigning the classes.

Let's see how to assign the class `active` to only the even numbered list items using a boolean statement.

The statement needs to be in curly braces.
```html
  <ul>
    <li v-for="i in 5" :key="i.id" :class="{active: i % 2 == 0}">{{i}}</li>
  </ul>
```
> In case you don't know the `%` symbol, it's called the "remainder" or "modulo" operator. It's checking if `i` divides by 2 evenly (or equals to 0), which will recognize `i` as even or odd.

Of course you can use data to assign a boolean for the class.
```html
  <h1 :class="{pink: attachColor}">Heading</h1>
```

It's possible to assign the class through a data value.

```html
  <h1 :class="bgColor">Heading</h1>
```
is equivalent to:
```html
  <h1 class="purple">Heading</h1>
```
If there is more than one, the classes need to be listed in an array.

Like for styles, you can combine class objects and properties.
```html
  <h1 :class="[bgColor, {pink: attachColor}]">Heading</h1>
```

Last method for adding classes is through computed properties. The property returns an object of the classes as keys and their values being truthy or falsey.
```html
  <h1 :class="headerClasses">Heading</h1>
```
is equivalent to:
```html
  <h1 :class="{pink: false, purple: true}">Heading</h1>
```

As you can see, there are many ways to implement styles and classes to your elements in VueJS. These methods can help your app change appropriately depending on user input, placement, or just about anything!

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2019-06-23-styling-in-vuejs.md)
