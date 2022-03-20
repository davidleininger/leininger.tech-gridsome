---
title: Reordering Markdown Ordered List
TILIndex: 27
date: 2022-02-22
---

I've been making ordered lists in markdown for a long time. It's great to be able to use ordered lists just by writing the list out using numbers: `1. List item` etc... Until recently, I've always hated reordering these lists and I'd default to unordered lists so I could reorder easier. That ends today.

With ordered lists in markdown, you can just use `1.` for each item. This will start the list at 1 and go up from there, and when you reorder it you don't have to change each number. If they all start with `1.` then it will just work.

```md
1. List item number one
1. Another list item
1. This one is number three
1. You only need to do use 1
```

### Result

<ol class="demo-list">
  <li>List item number one</li>
  <li>Another list item</li>
  <li>This one is number three</li>
  <li>You only need to do use 1</li>
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
