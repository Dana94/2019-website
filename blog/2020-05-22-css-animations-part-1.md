---
title: CSS Animations - Part 1
path: css-animations-part-1
date: 2020-05-22
summary: Part 1 of CSS animation property.
tags: ['coding', 'css', 'frontend']
---

I've been meaning to write a post on CSS animations for a long time. I am in no way an expert in creating breath-taking animations in code.

Yet.

After the umpteenth time I had to visit the [animation section on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation), I thought it would be a good idea to note all the things I've come to understand by now when making animations in CSS.

To start off, an element will be assigned the `animation` property.

```css
div {
    animation: 1s linear .5s 1 forwards both paused slide;
}
```

One line can hold 8 values for creating an animation:

- duration (`1s`)
- timing-function (`linear`)
- delay (`.5s`)
- how many times the animation runs (`1`)
- direction (`forwards`)
- fill-mode (`both`)
- play-state (`paused`)
- name (`slide`)

That's a lot packed into 1 CSS property. Let's look at each one in more detail.

Since I want to be as explicit as I can with this, I'm splitting this post up into 2 parts.

## Duration

How long it takes for the animation to fully run. The value can be an integer or float with the unit for seconds (s) or milliseconds (ms).

If you give 0 as the value, then the animation will not run at all.

Example:

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 4s ease-in forwards slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 0.5s ease-in forwards slide;
}

.square-black {
  background-color: black;
  animation: 0 ease-in forwards slide;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(100px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/duration-example-0vz73?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Duration Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Timing-function

It sets the speed of the animation at every moment in the duration. For example, if you want the animation to start off slow, then speed up before it finishes, use `ease-in` as the value. The element will "ease in" or start slowly when the animation starts, and increase its speed until it stops moving.

There are many standard values you can use:

- `ease` (default value - increase speed towards middle of animation, then slows down until the end)
- `ease-in` (slow start, then speeds up until the end)
- `ease-out` (starts fast, then slows down until the end)
- `ease-in-out` (slow start, speed up, then slow down again by the end)
- `linear` (even speed throughout)
- `step-start` (stops 1 time when the animation begins)
- `step-end` (stops 1 time when the animation ends)
- `cubic-bezier(p1, p2, p3, p4)` (see description below)
- `steps(n, <jumpterm>)` (see description below)

### Cubic-bezier

All the values aside from steps are are a cubic-bezier value. You could replace each one with its cubic-bezier value and get the same result.
So what's a cubic-bezier? It's a curve. It sets the animation speed - when it increases, decreases, or stays at a linear pace when running.

I found this [site](https://cubic-bezier.com/#.17,.67,.83,.67) very useful in displaying the affects of bezier curves.

### Steps

Steps allow you to momentarily stop the animation for a period of time.

The first argument is the number of steps to stop. These are spaced evenly throughout the animation The second argument is the "jumpterm" which signifies when these jumps happen. You can see more detail of these options [here](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function).

Example:

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 3s ease-in forwards slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 3s linear forwards slide;
}

.square-black {
  background-color: black;
  animation: 3s ease-out forwards slide;
}

.square-brown {
  background-color: #615050;
  animation: 3s steps(5, jump-start) forwards slide;
}

.square-grey {
  background-color: #d8d8d8;
  color: black;
  animation: 3s cubic-bezier(0.35, 0.5, 0.99, 3) forwards slide;
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
     src="https://codesandbox.io/embed/timing-example-2b4cu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Timing Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Delay

How long to wait before starting the animation. The value can be an integer or float with the unit for seconds (s) or milliseconds (ms).

The value can be negative which starts the animation immediately, but the animation will begin the number subtracted from the value.

So if an animation is set to play for 4 sec and the delay is set to -3 sec, then the animation will start running in the position where there will be 1 sec before it stops (the black square shows this below).

Example:

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 4s ease-in 2s forwards slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 4s ease-in 0.5s forwards slide;
}

.square-black {
  background-color: black;
  animation: 4s ease-in -3s forwards slide;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(100px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/delay-example-z0985?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Delay Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Iteration

How many times to repeat the animation. You can use an integer, a float, or the value `infinite` to repeat endlessly.

Example:

```css
.square-blue {
  background-color: rgb(0, 0, 78);
  animation: 1s ease-in 1 forwards slide;
}

.square-purple {
  background-color: rgb(83, 0, 99);
  animation: 1s ease-in 2 forwards slide;
}

.square-black {
  background-color: black;
  animation: 1s ease-in infinite forwards slide;
}

.square-brown {
  background-color: #615050;
  animation: 1s ease-in 0.75 forwards slide;
}

@keyframes slide {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateX(100px);
  }
}
```

<iframe
     src="https://codesandbox.io/embed/iteration-example-t90uk?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;margin-bottom: 2rem;"
     title="Iteration Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

[Read part 2 here](/css-animations-part-2).

Resources

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

- [Khanacademy - Bezier curves](https://www.khanacademy.org/partner-content/pixar/animate/ball/v/animation3)

- [cubic-bezier.com](https://cubic-bezier.com/#.17,.67,.83,.67)

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2020-05-22-css-animations-part-1.md)
