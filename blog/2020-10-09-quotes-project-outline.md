---
title: Quotes Project Outline
path: quotes-project-outline
date: 2020-10-09
tags: ['frontend', 'coding', 'vue', 'projects']
---

I was collecting a bunch of quotes in a Google spreadsheet and wanted to display them in a project. I was also learning GraphQL, so I wanted to make my own API to query them into a Vue.js project.

---

## Store

[Vuex](https://vuex.vuejs.org/) is used as a global store to hold information for:

- **theme**: Either set to the `String` value "light" or "dark". The store is where the theme is set in the local storage too.
- **authorId**: An integer from the `Dropdown` component set whenever a specific author is selected to query the results in the `App`.
- **tags**: A list of all `String` values of the tags selected to query the results in the `App`.

---

## Design & Colors

I knew I wanted to implement a light and dark mode to switch between.

I came up with the "pastel rainbow" colors for the "light" mode.

![Pastel Colors Scheme](./images/2020-10-09/pastel-colors-cropped.png)
_Pastel Colors Scheme_

Along with a neon color scheme for the "dark" mode.

![Dark Colors Scheme](./images/2020-10-09/dark-colors-cropped.png)
_Dark Colors Scheme_

While there were quite a few icons I used from [Fontawesome](https://fontawesome.com/), the quotation symbols were created by me using [Inkscape](https://inkscape.org/). I had to create a pair of open and closed quotes for every single color in both schemes.

![View of Inkscape](./images/2020-10-09/Inkscape-view.png)
_View of Inkscape_

---

## Components

`App`

Queries the `quotes` list from the API. It will search using `quotesByAuthorId` if a specific author is chosen from the dropdown, `quotesByTagNames` depending on what tags are chosen, or just the general `quotes` query if nothing is selected to filter the results.

`Dropdown`

Queries the `authors` list from the API. When a value is selected, its value is passed to the store.

`SwitchTheme`

Toggles the light/dark theme throughout the site. This also sets the theme in local storage so reloading the page keeps the selected theme visible.

`TagMenu`

Tags menu is hidden unless the tags icon is selected to display the tags. The list of tags are retrieved using the `tags` query.

`Tag`

Each tag is white unless selected, then it's black. When toggled, it's added to the list of tags in the store to influence what quotes are retrieved. Depending if the menu is visible or not, the `TagsMenu` sends down a `prop` called `focusable` which sets the tags as able to be tabbed to if the menu is open or unable to be reached by the keyboard if it is not.

`Card`

When it comes to assigning colors, it depends on the index of each quote in the array. Some of the colors have the same name when it comes ot the different themes (blue, green, and red) while yellow becomes purple in the dark theme as the orange becomes pink. This is all within a computed property that is assigned to the under-card and quotes to assign their color.

```js
cardColor() {
    let color = 'red';
    if (this.id % 5 === 0){
        color = 'blue';
    } else if (this.id % 4 === 0) {
        color = 'green';
    }
    else if (this.id % 3 === 0) {
        color = this.theme === 'light' ? 'yellow' : 'purple';
    }
    else if (this.id % 2 === 0) {
        color = this.theme === 'light' ? 'orange' : 'pink';
    }
    else {
        color = 'red'
    }
    return color;
}
```

Depending on the size of the screen, there is a "show more" button for longer quotes (character length larger than 260). For these instances, a `shortenQuote` is displayed that concatenates it followed by ellipses.

There is also an option to post the quote to Twitter via a sharing link.

`Error`

A message if something is wrong querying the data.

`Loading`

A levitating message to show while the quotes are being queried.

`NoResults`

A message if the author combined with the tags selected don't result in any quotes.

---

### Conclusion



[You can find the project on my GitHub](https://github.com/Dana94/quotes-database).

<!-- [Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-09-25-lights-puzzle-outline.md) -->
