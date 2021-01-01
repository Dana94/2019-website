---
title: Alphabetize Using Recursive Binary Search Example
path: recursive-binary-search-example
date: 2021-01-01
tags: ['coding', 'javascript']
---

While I was working on a take-home challenge for a company, I had to come up with some logic to systematically keep the contacts in an array in alphabetical order. While there are ways to do this using Array's `sort` function. I wanted to consider a recursive method that uses binary search. While I had to scrap the project since I couldn't continue with the interviews, I still wanted to share the code snippet I created. Assuming the list starts off with at least 1 contact already in it, the recursive function implements binary search to know where to insert the next contact according to their first name. (I know if the first names are the same then the last names should be compared but like I said I didn't finish the project.)

I wanted to talk about this because as useful as recursive functions are, they can be tricky to create a solution that gives what you are expecting (and, you know, doesn't cause the program to crash).

This was a Vue.js project, but it can be used in any project setup.

The store had the list of contacts in a `contacts` array.

```js
import insert from './helper';

const state = {
    contacts: [
        {
            id: 1,
            firstname: "Dana",
            lastname: "Ottaviani",
            phones: [
                {
                    number: "8675309",
                    type: "Home"
                }
            ]
        }
    ]
}
```

I would send the contacts array with the new contact to add in the `insert` method. Which would return a new list of contacts.
```js
state.contacts = insert(state.contacts, contact);
```

The `helper.js` contains the `insert` function which calls `insertHelper`.

```js
export default function insert(array, value) {
  return insertHelper(array, 0, array.length - 1, value);
}
```

The `insertHelper` is what does all the work. It includes the `start` and `end` values indicating the start and end index that we need to keep track of in order to know when to stop searching the array.

```js
function insertHelper(array, start, end, value) {

  // only 1 to compare to
  if(start === end) {
    let copy = [...array];

    if(array[start].firstname.toLowerCase() < value.firstname.toLowerCase()) {
      copy.splice(start + 1, 0, value);
    }
    else {
      copy.splice(start, 0, value);
    }
    return copy;
  }

  // continue breaking down
  let index = Math.floor((end + start)/2);

  if(array[index].firstname.toLowerCase() < value.firstname.toLowerCase()) {
    return insertHelper(array, index + 1, end, value);
  }
  else {
    return insertHelper(array, start, index, value);
  }
}
```

There's a bit to look at here. Let's first see the part where it says `continue breaking down`.

```js
let index = Math.floor((end + start)/2);

if(array[index].firstname.toLowerCase() < value.firstname.toLowerCase()) {
    return insertHelper(array, index + 1, end, value);
}
else {
    return insertHelper(array, start, index, value);
}
```

The `index` finds the middle index to start at and sees if the contact at that index should be before or after the new contact we need to add. Depending on this, we change the `start` and `end` parameters for the next iteration of the function and continue breaking down the array until the `start` and `end` values are the same, or there is only 1 contact to compare the new contact with.

```js
// only 1 to compare to
if(start === end) {
    let copy = [...array];

    if(array[start].firstname.toLowerCase() < value.firstname.toLowerCase()) {
        copy.splice(start + 1, 0, value);
    }
    else {
        copy.splice(start, 0, value);
    }
    return copy;
}
```

A copy of the array is created and the new contact is inserted either before or after the last contact we are comparing. This returns a new array which will replace `state.contacts` in the store.

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2021-01-01-recursive-binary-search-example.md)
