---
title: "Where to use :where()"
date: 2022-04-17
---

At first, when I saw `:where()` I didn’t really see how different it was from `:is()`, and I didn’t give it much of a second thought. To be fair, it is very similar. Just like `:is()`, `:where()` can take multiple argument and it won’t blow up if one of the arguments is invalid, like a normal list of selectors would. The key difference is that `:is()` has the specificity of the most specific selector in its arguments, while `:where()` is always `0`.

## A Quick Overview of Specificity

A selectors specificity helps to determine which styles should be applied when there are multiple selectors target a single element. The styles that get applied come from the most specific selector that contain each declaration. Each selector has it’s own specificity “score” that determined by the contents of the selector: ids, classes, elements, etc... These scores are broken down into three levels:

1. [Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors): These are tags (`h1`, `p`, `main`) and pseudo-elements (`::before`)
2. [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors): These are classes (`.example`), attributes selectors (`[type="radio"]`) and pseudo-classes (`:hover`)
3. [ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors): These are IDs (`#example`)

<style>
ol{
  counter-reset: list_counter;
  list-style: none;
  margin-bottom: 1.5rem;
}
ol li {
  align-items: baseline;
  counter-increment: list_counter;
}
ol li::before {
  content: counter(list_counter);
  color: var(--accent);
  font-family: 'Cartograph', mono;
  font-size: 1.5em;
  font-variant-numeric: tabular-nums;
  margin-right: 1rem;
}
</style>

Each level has its own “score” which looks like `0, 0, 0` for no specificity. The order of the specificity score is `id, class, type`. A `1` in the ID Selector level won’t be able to be overridden by the other two types. It will need another class to be more specific.

## Back to :is() and :where()

Let’s take a look at how this specificity plays out for `:is()` and `:where()`. First let’s look at `:is()`:
```css
:is(section, .sidebar, footer, #feature) a
```
Using `:is()` get a specificity of `1, 0, 1`.  Since `:is()` take the specificity of the most specific argument, `#feature` ID gives us the `1` in the ID Selector level, and the `a` gives us the `1` in the Type Selector level.

Let’s compare that to the same example with `:where()`:

```css
:where(section, .sidebar, footer, #feature) a
```
This time, we get a specificity of `0, 0, 1`. This is where `:where()` shines and is different. The only part of this selector to score points is the `a` selector giving the Type Selector a score of `1`. That means that `:where()` selectors are much easier to override and work with in a larger system.

*Take a look and try out different selectors at [https://polypane.app/css-specificity-calculator/](https://polypane.app/css-specificity-calculator/)*

## How I use :where()

For the past few weeks, I've been working on rebuilding and rethinking the development of design system at WWT. Instead of waiting for us to rebuild a bunch of custom components, we decided that phase 1 should be global CSS file &#151; or set of files &#151; as a baseline for all of our components. This can be imported into all current and future projects as we work towards making a set of components for each framework. We have a lot of goals for this project, but one of the main ones to make it really easy to import and override as needed. That's where `:where()` comes in.

Let’s take a look at an example. At WWT, we have two main types of applications we build content driven websites and data driven web apps with a lot of tables and data. These two types of apps are best displayed with a different structure for handling typography and spacing. Content driven websites are great candidates for fluid type and spacing, and data driven apps are better candidates for static type and spacing.

```css
/* specificity score: 0, 0, 1 */
body {
  font-size: 1rem;
  color: lightslategray;
}

/* specificity score: 0, 0, 1 */
body:where(.fluid) {
  font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.25rem);
}
```

It may not seem like a lot here, but dropping that extra specificity point is important. If an app needs to adjust the update the color or change up the styles for their app, they don’t have to fight the specificity to make the change. We can give a branded baseline without causing headaches for the developers. Let’s dive in a little further.

```css
/* specificity score: 0, 0, 1 */
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.25rem;
}

/* specificity score: 0, 0, 1 */
:where(.fluid) h1 {
  font-size: clamp(1.6rem, calc(0.9rem + 2.99vw), 3.05rem);
}
:where(.fluid) h2 {
  font-size: clamp(1.42rem, calc(0.93rem + 2.1vw), 2.44rem);
}
:where(.fluid) h3 {
  font-size: clamp(1.27rem, calc(0.93rem + 1.42vw), 1.95rem);
}
```

This is where things get a little bit more interesting. At first glance you might say, “Sure, but I could just use the `.fluid` class before the tags and it would be the same thing.” That isn’t entirely true. It would have the same effect to the base styles, but it would mean that every time the user wanted to override a size in their app, they would need prefix that size with `.fluid`. It’s not major, but it would get annoying really quickly.

Here’s a look at why it’s important:

```css
/* ----
	Design System Styles
---- */
/* specificity score: 0, 1, 1 -- no where pseudo-class */
.fluid h1 {
  font-size: clamp(1.6rem, calc(0.9rem + 2.99vw), 3.05rem);
}

/* specificity score: 0, 0, 1 */
:where(.fluid) h2 {
  font-size: clamp(1.42rem, calc(0.93rem + 2.1vw), 2.44rem);
}

/* ----
	In-App Styles
---- */
/* specificity score: 0, 0, 1 this loses to .fluid h1 */
h1 {
  font-size: 4rem;
}

/* specificity score: 0, 0, 1 this beats to :where(.fluid) h2 */
h2 {
  font-size: 3rem;
}
```

Open [example on CodePen](https://codepen.io/davidleininger/pen/xxpmOpd)

It’s important that we use `:where()` in the design system styles because it makes it easier to make updates to the “In-App” styles.

## Conclusion

There are a lot of use cases for `:where()`. I love the idea of creating global styles that are extremely easy to override and change. I like it when I don’t have to fight the code I’m working on to make it do what I want, and `:where()` is starting to be a big help with that.
