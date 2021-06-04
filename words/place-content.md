---
title: Place Content
pageTitle: today I learned | leininger.tech
TILIndex: 4
date: 2020-01-22
source: https://twitter.com/argyleink/status/1220206844750090240
---

Simplify flexbox positioning with using one property instead of two.

```css
.child {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  place-content: center;
}
```

### Support
Not IE
