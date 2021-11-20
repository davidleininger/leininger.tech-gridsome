---
title: Fast Click
TILIndex: 21
date: 2021-06-18
source: https://twitter.com/argyleink/status/1405881231695302659
---

By default, when tapping on an element, browsers wait 300ms for a potential double-tap to zoom.

This can be sped up with a single css declaration:
```scss
touch-action: manipulation;
```

It would be great for links and buttons:
```scss
a, button {
  touch-action: manipulation;
}
```

Using this declaration, browser _immediately_ responds to taps instead of waiting 300ms for a _"potential"_ second tap. This is great for buttons and links.

### Support
[Basically All](https://caniuse.com/mdn-css_properties_touch-action_manipulation)
