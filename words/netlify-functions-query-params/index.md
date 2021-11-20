---
title: Netlify Functions Query Params
TILIndex: 19
date: 2020-11-14
source: https://flaviocopes.com/netlify-functions-query-parameters/
---

To access query parameters in your Netlify Functions, you can access the `event.queryStringParameters` object available inside the `handler` function.

For example if you have an `email` query string, you can access it using

```javascript
exports.handler = (event, context, callback) => {
  event.queryStringParameters.email
  //do something with it
}
```
