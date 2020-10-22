---
title: Optional Chaining
path: optional-chaining
date: 2020-10-23
tags: ['coding', 'javascript']
---

A common error in the console I've seen is `Error: Cannot read property '<name>' of undefined` where `<name>` is a value expected to be other than undefined or null.

To avoid this error from happening, you could add an if-statement to check if the value can be evaluated.

Here's an example of a player object that has a collection of Pokemon. Each Pokemon object has at least a name, Pokedex ID, and their pre-evolution name. What some also have is an `evolution` property which is contains what stone it needs to become this Pokemon from its `preEvolution` stage.

```js
const player = {
    name: "Dana",
    pokemon: [
        {
            name: "Lucario",
            dexId: 448,
            preEvolution: "Riolu"
        },
        {
            name: "Roserade",
            dexId: 407,
            evolution: {
                stone: "Shiny"
            },
            preEvolution: "Roselia"
        },
        {
            name: "Beautifly",
            dexId: 267,
            preEvolution: "Silcoon"
        },
        {
            name: "Ampharos",
            dexId: 181,
            preEvolution: "Flaaffy"
        },
        {
            name: "Flareon",
            dexId: 136,
            evolution: {
                stone: "Fire"
            },
            preEvolution: "Eevee"
        },
        {
            name: "Froslass",
            dexId: 478,
            evolution: {
                stone: "Dawn"
            },
            preEvolution: "Snorunt"
        },
    ]
}
```
If I wanted to print all the Pokemon names to the console, I can do:

```js
player.pokemon.forEach(pokemon => console.log(pokemon.name));
```

But what if I want to print out any evolution stones that the pokemon requires to evolve?

This code would give an error since not all pokemon have one:

```js
player.pokemon.forEach(pokemon => console.log(pokemon.evolution.stone));

// TypeError: Cannot read property 'stone' of undefined
```

You could do a check by adding an if-statement if the pokemon has an `evolution` property:

```js
player.pokemon.forEach(pokemon => {
    if(pokemon.evolution !== undefined){
        console.log(pokemon.evolution.stone)
    }
    else {
        console.log(undefined);
    }
});

// undefined
// "Shiny"
// undefined
// undefined
// "Fire"
// "Dawn"
```
While this works, there's a shorthand property called "optional chaining" using `?.` to check if the property is undefined or null before continuing with the expression:

```js
player.pokemon.forEach(pokemon => {
   console.log(pokemon.evolution?.stone)
});

// undefined
// "Shiny"
// undefined
// undefined
// "Fire"
// "Dawn"
```

This syntax isn't only used on objects, it can be put after any variable, Array, or Function as a check.

To execute a Function that may not be defined, you can append `()` after the optional chaining to execute it.

If we weren't sure if the player object had a method called `possibleFunction` to use, we can check it before executing it.

```js
player.possibleFunction?.()
```

I find myself using this shorthand approach more often than the usual if-statement to see if a value is undefined or null to avoid an error.

Resources:

- [MDN - Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-10-23-optional-chaining.md)
