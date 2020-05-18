---
title: CSS Animations
path: css-animations
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
- name (could be created animation or a standard one - more on this later)

That's a lot packed into 1 CSS property. Let's look at each one in more detail.

### Duration

How long it takes for the animation to fully run. The value can be an integer or float with the unit for seconds (s).

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
- cubic-bezier
- steps

### Delay

How long to wait before starting the animation.

### Iteration

How many times to repeat the animation.

### Direction

The direction the animation moves:

Options:

- forwards
- reverse
- alternate
- alternate-reverse
- normal

### Fill-mode

Sets the animation style before and after it runs. I've never needed to use this setting myself.

### Play-state

Set if the animation is running or not.

Options:

- paused
- running

### Name



Drop-down menu:


## Resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)





[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/)
