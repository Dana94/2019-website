---
title: CSS Animations - Part 1
path: css-animations-part-1
date: 2020-05-22
tags: ['coding', 'css', 'frontend']
---

I've been meaning to write a post on CSS animations for a long time now. I am in no way an expert in the creating breath-taking animations made in code.

Yet.

And after the umpteenth time I had to visit the [animation section on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation), I thought it would be a good idea to note all the things I've come to understand by now when making animations in CSS.

To start off, an element will be assigned the `animation` property.

One line can hold 8 values to creating an animation:

- duration
- timing-function
- delay
- how many times the animation runs
- direction
- fill-mode
- play-state
- name

That's a lot packed into 1 CSS property. Let's look at each one in more detail.

Since I want to be as explicit as I can with this, I'm splitting this post up into 2 parts.

### Duration

How long it takes for the animation to fully run. The value can be an integer or float with the unit for seconds (s) or milliseconds (ms).

If you give 0 as the value, then no animation will happen.

> example

### Timing-function

The format the animation moves. This is a bit hard to explain, but it can set up the speed of the animation at a specific part in the duration. Like if you want the animation to start off slow, then speed up before it finishes.

There are many standard values you can use:

- ease
- ease-in
- ease-out
- ease-in-out
- linear
- step-start
- step-end
- cubic-bezier (> explain)
- steps (> explain)

> example

### Delay

How long to wait before starting the animation. The value can be an integer or float with the unit for seconds (s) or milliseconds (ms).

The value can be negative which starts the animation immediately but start the value indicated into it.

> example

### Iteration

How many times to repeat the animation. You can use an integer, a float, or the value `infinite` to repeat endlessly.

> example

## Resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/)
