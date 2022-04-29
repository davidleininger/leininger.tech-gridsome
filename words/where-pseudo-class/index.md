---
title: "Where to use :where()"
date: 2022-04-28
---

At first, when I saw `:where()`, I didn’t see how different it was from `:is()`, and I didn’t give it much of a second thought. To be fair, it is very similar. Just like `:is()`, `:where()` can take multiple arguments, and it won’t blow up if one of the arguments is invalid, as a standard list of selectors would. The critical difference is that `:is()` has the specificity of the most specific selector in its arguments, while `:where()` is always `0`.

## A Quick Overview of Specificity

A selector's specificity helps determine which styles should be applied when multiple selectors target a single element. The applied styles come from the most specific selector that contains each declaration. Each selector has its own specificity “score” determined by the contents of the selector: ids, classes, elements, etc... These scores are broken down into three levels:

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

Each level has its own “score” which looks like `0, 0, 0` for no specificity. The order of the specificity score is `id, class, type`. The "score" is a count of each selector type in a rule. For example, `.header nav h1#sitetitle > .logo` has a score of `1, 2, 2`.  A `1` in the ID Selector level won’t be able to be overridden by the other two types. It will need another ID to be more specific.

## Back to :is() and :where()

Let’s take a look at how this specificity plays out for `:is()` and `:where()`. First let’s look at `:is()`:
```css
:is(.sidebar, footer, #feature) section a
```
Using `:is()` gives us a specificity of `1, 0, 2`.  Since `:is()` takes the specificity of the most specific argument, `#feature` ID gives us the `1` in the ID Selector level, and the trailing `section a` gives us the `2` in the Type Selector level.

Let’s compare that to the same example with `:where()`:

```css
:where(.sidebar, footer, #feature) section a
```
We get a specificity of `0, 0, 1` this time. This is where `:where()` shines and is different. The only part of this selector to score points is the `section a` selectors giving the Type Selector level a score of `2`.

We can take it a step further and wrap that whole thing in a `:where()`.

```css
:where(:is(.sidebar, footer, #feature) section a)
```

The score here is `0, 0, 0` because everything is wrapped in a `:where()` pseudo class. The `:is()` value even gets set to `0`. That means that `:where()` selectors are easier to override and work well in larger systems.


*Take a look and try out different selectors at [https://polypane.app/css-specificity-calculator/](https://polypane.app/css-specificity-calculator/)*

## How I use :where() in a Design System

For the past few weeks, I've been working on rebuilding and rethinking the development of the design system at WWT. Instead of waiting for us to rebuild a bunch of custom components, we decided that phase 1 should be a global CSS file — or set of files — as a baseline for all of our components. This can be imported into all current and future projects as we work towards making a set of components for each framework. We have many goals for this project, but one of the main ones is to make it easy to import and override as needed. That's where `:where()` comes in. Let’s take a look at some examples.

### Example 1: Body Copy

At WWT, we build two main types of applications, content-driven websites and data-driven web apps with a lot of tables and data. These two types are best displayed with a different structure for handling typography and spacing. Content-driven websites are great candidates for fluid type and spacing, and data-driven apps are better candidates for static type and spacing.

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

It may not seem like a lot here, but dropping that extra specificity point is important. If a developer needs to update the color or change up the styles for their app, they don’t have to fight the specificity to make the change. We can give a branded baseline without causing headaches for the developers. Let’s dive in a little further.

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

This is where things get a little bit more interesting. At first glance, you might say, _“Sure, but I could just use the `.fluid` class before the tag selectors and it would be the same thing.”_ That isn’t entirely true. It would have the same effect on the base styles, but it would mean that every time the user wanted to override a size in their app, they would need to prefix that size with `.fluid`. It’s not major, but it would get annoying really quickly.

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
	In-App Styles - Lower in the cascade
---- */
/* specificity score: 0, 0, 1 this loses to .fluid h1 */
h1 {
  font-size: 4rem;
}
/* specificity score: 0, 0, 1 this overrides :where(.fluid) h2 */
h2 {
  font-size: 3rem;
}
```

Open [example on CodePen](https://codepen.io/davidleininger/pen/xxpmOpd)

For WWT, using `:where()` in the design system styles is vital because it makes updating the “In-App” styles easier. There is no fighting code with a `0, 0, 0` specificity or the selector's default specificity.

### Example 2: Link Styles

In my mind, we’re creating something that is like a WWT CSS reset, so I stole this selector from [Andy Bell’s](https://twitter.com/hankchizljaw) [Modern Reset](https://github.com/hankchizljaw/modern-css-reset).

```css
/* specificity score: 0, 1, 1 */
a:not([class]) {
  color: cornflowerblue;
}
```

This works, but I think we can do a little more with `:where()` for a reset. I’m not the only one who thinks using `:where()` makes a lot of sense in a reset. Take a look at [Bramus’](https://twitter.com/bramus) conveniently named post [Using the Specificity of `:where()` as a CSS Reset](https://www.bram.us/2021/07/20/using-the-specificity-of-where-as-a-css-reset/). Anywho, let’s look at the above example if we use `:where()`.

```css
/* specificity score: 0, 0, 1 */
a:where(:not([class])) {
  color: cornflowerblue;
}
```

Here is another example where dropping that extra specificity point is a big deal. If an app using this system needs to adjust the color or change up the styles for their app, they don’t have to fight the specificity like they would in the first example. Using `:where()` in this example means that a simple `a` selector will override the specified styles. For example:

```css
/* ----
	Design System Styles
---- */
/* specificity score: 0, 0, 1 */
a:where(:not([class])) {
  color: cornflowerblue;
}

/* ----
	In-App Styles - Lower in the cascade
---- */
/* specificity score: 0, 0, 1 */
a {
  color: hotpink;
}
```

Open [example on CodePen](https://codepen.io/davidleininger/pen/ZErzKeg)

Because the specificity scores are the same and the “In-App” styles are lower in the cascade, the “In-App” styles will be applied.

A link is a straightforward example, but this becomes more powerful when used throughout the whole system.

## Conclusion

I love the idea of creating global styles that are extremely easy to override and change. I like it when I don’t have to fight the code I’m working on to make it do what I want, and `:where()` is starting to help with that.

There are many use cases for `:where()` like grouping and chaining, and I only scratched the surface here. Specifically, I like the patterns of `:where(:not([class]))` and `:where(.class) tag`. I think these patterns give us a lot of opportunities to create reusable systems that can are easy to modify.
