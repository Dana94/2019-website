---
title: How to Properly Clone Multidimensional Arrays
path: cloning-multidimensional-arrays
date: 2020-02-26
tags: ['coding', 'javascript']
---

I was working on applying different board levels to my [lights puzzle](https://github.com/Dana94/lights-puzzle) (still in progress as I'm writing this post). I encountered a problem where the original board was being modified despite using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (`...`) to clone it so its data wouldn't be affected.

```js
let boardLevel1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// assign board difficulty
state.board = [ ...boardLevel1 ];

// modify board
state.board[0][0] = 1;
```

The expected behavior was that the `boardLevel1` would not be modified.
```js
console.log(state.board);
// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

console.log(boardLevel1);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
```

What actually happened was that `boardLevel1` was modified. So reassigning `boardLevel1` to the `state.board` whenever the difficulty was selected wouldn't reset the board.

```js
console.log(state.board);
// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

console.log(boardLevel1);
// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
```

What did I do wrong here? The spread operator was supposed to clone the contents of `boardLevel1` and assign it into the state's board property.

It turns out, multidimensional arrays (3D arrays or "an array containing arrays") require an extra step.

The Array's `map()` method can be used to perform a loop through all the elements in the 3D array where you _then_ use the spread operator to clone each individual array.

```js
let boardLevel1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// assign board difficulty using the map() method
state.board = boardLevel1.map(row => [ ...row ] );

// modify board
state.board[0][0] = 1;
```

```js
console.log(state.board);
// [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

console.log(boardLevel1);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
```

I've only ever used 3D arrays when first learning programming in college and never realized until I came across this bug that there needed to be an extra step when cloning them properly.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-02-26-cloning-multidimensional-arrays.md)
