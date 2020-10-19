---
title: Optional Chaining
path: optional-chaining
date: 2020-10-23
tags: ['coding', 'javascript']
---

A common error in the console I've seen is `Error: Cannot read property '<name>' of undefined` where `<name>` is a value expected to be other than undefined.

To avoid this error from happening, you could add an if-statement to check if the value is not undefined.

Here's an example of a player object that has a collection of Pokemon. Each Pokemon object has at least a name andPokedex ID. What some also have is an `evolution` property which is contains what stone it needs to become this Pokemon from its `preEvolution` stage.

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

But what if I want to also print out any evolution stones that the pokemon required to evolve?

This code would give an error since not all pokemon have one:

```js
player.pokemon.forEach(pokemon => console.log(pokemon.evolution.stone));
```

You could do a check this way:

```js
player.pokemon.forEach(pokemon => {
    if(pokemon.evolution !== undefined){
        console.log(pokemon.evolution.stone)
    }
});
```

if `=== null` or `=== undefined` to check before using it.

What I do as a shortened way:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

[Found a typo or problem? Edit this page.]()
