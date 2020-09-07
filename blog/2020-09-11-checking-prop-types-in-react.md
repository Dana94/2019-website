---
title: Checking Prop Types in React
path: checking-prop-types-in-react
date: 2020-09-11
tags: ['frontend', 'coding', 'react']
---

When using props in components in Vue.js, you have the option to have tye checking to make sure the data being passed down is expected and that the program warns if it's required.

```js
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    quote: {
      type: Object,
      required: true
    }
  }
}
```

The same can be done in React using the [`prop-types` package](https://www.npmjs.com/package/prop-types).

Install the package:
```bash
npm install --save prop-types
```



[Found a typo or problem? Edit this page.]()
