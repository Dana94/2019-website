---
title: CSS Animations - Part 2
path: css-animations-part-2
date: 2020-05-29
summary: Part 2 of CSS animation property.
tags: ['coding', 'css', 'frontend']
---

Continuation of [part 1](/css-animations-part-1) of CSS animation property.

## Direction

The direction the animation moves.

- `normal` (default value - moves forwards each cycle)
- `reverse` (moves backwards each cycle, this also affects the timing-functions as they will act in reverse as well)
- `alternate` (during each cycle, the animation reverses direction, first cycle is forwards)
- `alternate-reverse` (during each cycle, the animation reverses direction, first cycle is backwards)

[example with timing function _reversed_]

## Fill-mode

Sets the animation style before and after it runs.

- `none` (default value - no styles will be applied when the animation is not running)
- `forwards` (see description below)
- `backwards` (same as forwards, only the first keyframe affects where the element remains after cycling through)
- `both` (combines the forwards and backwards so the animation is affected in both directions)

### Forwards

The element will keep the values from the last moment of animating.

A common example is have the element remain where it is after it's moved, not reset its location.

This is affected the direction and iteration values.

## Play-state

Set the animation to run or not. This can pause the element during a cycle, which will remain where it is until it is set to run again, starting from where it paused.

- `paused` (animation is not playing)
- `running` (animation is playing)

[example with a button to pause/play animation]

## Name

With an animation created using `keyframes`, you can use its name to set it as the element's animation.

If you don't use a keyframe, the only other value to use is `none` to stop an animation without affecting the other settings.

I created an animation to gently rise and lower an element for a loading screen.


## Resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-22-css-animations-part-1.md)
