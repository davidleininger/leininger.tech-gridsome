---
title: "Specificity: Animation Declarations"
TILIndex: 26
date: 2022-01-28
source: https://www.matuzo.at/blog/2022/specificity/
---

Specificity can be super confusing, and just when I think I have it really nailed down I learn something new. I'm not sure that I'm going to use this very often, but I didn't know that you can override style declarations with animation declarations. For example:

```css
/* Animation declarations take precedence over normal declarations */
body {
  animation: bg 0s forwards;
}
@keyframes bg {
  to {
    background: yellow;
  }
}

/* This is overridden by the animation declaration above */
body {
  background: crimson;
}
```

In this example the background would be `yellow` because body has the animation declaration on it that overrides the `crimson` lower in the file eventough they have the same level of specificity.

## Learn More
I picked up this wonderful bit of knowledge from [Manuel Matuzović](https://twitter.com/mmatuzo) on his blog post about [CSS Specificity](https://www.matuzo.at/blog/2022/specificity/). You should take a look at it, too.
