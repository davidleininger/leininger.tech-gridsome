---
title: Reverse Ordered List
date: 2021-10-25
---

So I've got this whole [lists](/lists) section of the site where I list all of my opinions about things like the best sodas, broadway shows, pizzas in STL, and wives. Spoiler alert the last one is only one item.

Fast forward to Halloween, and I realized that I needed to add a new list, a list of our family [Halloween Costumes](/lists/halloween). This list needed to be grouped by year and starting from the most recent year and going down.

So there's the problem: an ordered list, that starts as the "current" year, and counts down.

## First Attempt: Reversed Attribute

The first attempt was probably the simpliest. Ordered lists have a few properties that allow you to change their interactions.

```html
<ol reversed start="2021">
  <li>Star Wars Portmanteaus</li>
  <li>Jurassic Park</li>
  <li>The Magic School Bus</li>
  <li>Rubber Ducky</li>
  <li>Lobster Fishermen</li>
  <li>Dairy Queen and Burger King</li>
  <li>Brawny Man and Paper Towels</li>
</ol>
```

### Result

<ol reversed start="2021" class="list-inside list-decimal">
  <li>Star Wars Portmanteaus</li>
  <li>Jurassic Park</li>
  <li>The Magic School Bus</li>
  <li>Rubber Ducky</li>
  <li>Lobster Fishermen</li>
  <li>Dairy Queen and Burger King</li>
  <li>Brawny Man and Paper Towels</li>
</ol>

This works, and if all I wanted was a list it would be ideal. That said, for a few reasons, it's not exactly the end goal for me. First while this does give you good clean semantic markup, it doesn't give you much of a chance to style the list items, and that's just happens to be what I did on the [/lists](/lists) page. So we press on.

## Second Attempt: Set the Value in the List Item

Setting the value inside the `<li>` would work in this case, but it has the same issue with being unstyled. Not to mention then I have to keep all of those numbers up-to-date. I'm not looking to put each year in 15 years. I think we can do better, because that's a lot to manage:

```html
<ol>
  <li value="2021">Star Wars Portmanteaus</li>
  <li value="2020">Jurassic Park</li>
  <li value="2019">The Magic School Bus</li>
  <li value="2018">Rubber Ducky</li>
  <li value="2017">Lobster Fishermen</li>
  <li value="2016">Dairy Queen and Burger King</li>
  <li value="2015">Brawny Man and Paper Towels</li>
</ol>
```

### Result

<ol class="list-inside list-decimal">
  <li value="2021">Star Wars Portmanteaus</li>
  <li value="2020">Jurassic Park</li>
  <li value="2019">The Magic School Bus</li>
  <li value="2018">Rubber Ducky</li>
  <li value="2017">Lobster Fishermen</li>
  <li value="2016">Dairy Queen and Burger King</li>
  <li value="2015">Brawny Man and Paper Towels</li>
</ol>

## Third Attempt: Using a Custom Counter

Now we're talking, styling those `::markers` like a boss. This is a little more complicated, but getting those sweet styled lists make designers happy - in this case, I'm the designer.

In this case, since we normally want the lists to count up, we still want to add the `reversed` attribute so we know to count down in this circumstance. In order to keep the starting point dynamic, we also need to set the `counter-reset` directly on the `ol`.

_Note: the starting point for the counter-reset needs to be 1 number lower than the starting number if the list is ascending and 1 number higher if the list is descending. The counter-increment runs on each list item._

```html
<ol reversed style="counter-reset: list_counter 2022;">
  <li>Star Wars Portmanteaus</li>
  <li>Jurassic Park</li>
  <li>The Magic School Bus</li>
  <li>Rubber Ducky</li>
  <li>Lobster Fishermen</li>
  <li>Dairy Queen and Burger King</li>
  <li>Brawny Man and Paper Towels</li>
</ol>
```

```css
ol {
  list-style: none;
  counter-reset: list_counter;
}
ol li {
  align-items: baseline;
  display: flex;
  counter-increment: list_counter;
}
ol[reversed] li {
  counter-increment: list_counter -1;
}
ol li::before {
  content: counter(list_counter);
  color: var(--accent);
  font-family: theme('fontFamily.mono');
  font-variant-numeric: tabular-nums;
  margin-right: 1.5rem;
}
```

### Result

<ol class="demo-list" reversed style="counter-reset: list_counter 2022;">
  <li value="2021">Star Wars Portmanteaus</li>
  <li value="2020">Jurassic Park</li>
  <li value="2019">The Magic School Bus</li>
  <li value="2018">Rubber Ducky</li>
  <li value="2017">Lobster Fishermen</li>
  <li value="2016">Dairy Queen and Burger King</li>
  <li value="2015">Brawny Man and Paper Towels</li>
</ol>
<style>
ol.demo-list {
  list-style: none;
  counter-reset: list_counter;
}
ol.demo-list li {
  align-items: baseline;
  display: flex;
  counter-increment: list_counter;
}
ol.demo-list[reversed] li {
  counter-increment: list_counter -1;
}
ol.demo-list li::before {
  content: counter(list_counter);
  color: var(--accent);
  font-family: 'Cartograph', mono;
  font-size: 1.5em;
  font-variant-numeric: tabular-nums;
  margin-right: 1rem;
}
</style>

There we go. A reversed list with custom styles that should work from any starting point. I'm pretty happy with where we ended.

## Helpful Sources
1. [CSS Tricks](https://css-tricks.com/how-to-reverse-css-custom-counters/): How to Reverse CSS Custom Counters
2. [Manuel Matuzovic](https://www.matuzo.at/blog/reverse-ordered-lists/): Reverse Ordered Lists
