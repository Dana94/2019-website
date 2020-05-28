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
- `reverse` (moves backwards each cycle)
- `alternate` (during each cycle, the animation reverses direction, first cycle is forwards)
- `alternate-reverse` (during each cycle, the animation reverses direction, first cycle is backwards)

A simple example using `ease-in` for all squares. While the first and second square go in the same direction, the second _alternates_ its direction so it only runs along the first square in _every other_ duration.

The same idea applies for the third and fourth squares. While they move in the same _reverse_ direction the first time, the fourth square _alternates_ its direction so it only runs along the third square in _every other_ duration.

Changing direction also affects the `ease-in` value as it will transform to `ease-out` for squares reversing their direction.

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 2s ease-in infinite normal slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 2s ease-in infinite alternate slide;
}

.square-black {
  background-color: black;
  animation: 2s ease-in infinite reverse slide;
}

.square-brown {
  background-color: #615050;
  animation: 2s ease-in infinite alternate-reverse slide;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(200px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/direction-example-pywec?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Direction Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
   ></iframe>

## Fill-mode

Sets the animation style before and after it runs.

- `none` (default value - no styles will be applied when the animation is not running)
- `forwards` (see description below)
- `backwards` (same as forwards, only the first keyframe affects where the element remains after cycling through)
- `both` (combines the forwards and backwards so the animation is affected in both directions)

### Forwards

The element will keep the values from the last moment of animating.

A common example is have the element remain where it is after it's moved, not reset its location.

<!-- -This is affected the direction and iteration values.- -->

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 2s ease-in none slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 2s ease-in forwards slide;
}

.square-black {
  background-color: black;
  animation: 2s ease-in backwards slide;
}

.square-brown {
  background-color: #615050;
  animation: 2s ease-in both slide;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(200px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/fill-mode-example-lv0hx?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Fill-mode Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
   ></iframe>

## Play-state

Set the animation to run or not. This can pause the element during a cycle, which will remain where it is until it is set to run again, starting from where it paused.

- `paused` (animation is not playing)
- `running` (animation is playing)

In the example, you can click the button to start and stop the animation. The button adds/removes the class `stop` from the square.

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 2s ease-in infinite alternate slide;
}

.square-blue.stop {
  animation-play-state: paused;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(300px);
  }
}
```
<iframe
     src="https://codesandbox.io/embed/play-state-example-mzrb0?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Play-state Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
   ></iframe>

## Name

With an animation created using `keyframes`, you can use its name to set it as the element's animation. In all the previous examples, a keyframe called `slide` was used to animate.

If you don't use a keyframe, the only other value to use is `none` to stop an animation without affecting the other settings.

I created an animation to levitate a square. You'll see that it rises back up using the `alternate` value to reverse direction in every other duration.

Clicking the button will set the `animation-name` to `none` which resets the animation.

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 1s ease-in infinite alternate levitate;
}

.square-blue.stop {
  animation-name: none;
}

@keyframes levitate {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(50px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/levitate-example-wii2j?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;margin-bottom: 2rem;"
     title="Levitate Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
   ></iframe>

I found that I have gained a new understanding after taking the time to create examples and read more of what CSS animations has to offer.

## Resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-22-css-animations-part-1.md)
