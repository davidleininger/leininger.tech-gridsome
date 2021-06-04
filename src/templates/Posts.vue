<template>
  <List class="content">
    <h1 class="text-black dark:text-white font-mono text-5xl mb-2">{{ $page.post.title }}</h1>
    <p class="text-sm text-teal-dark dark:text-teal mb-8">{{ $page.post.date }} • {{ $page.post.timeToRead }} min</p>
    <article v-html="$page.post.content"/>
  </List>
</template>

<page-query>
query Page ($path: String!) {
  post: posts (path: $path) {
    title
    pageTitle
    date(format: "MMM DD, YYYY")
    source
    timeToRead
    content
  }
}
</page-query>

<script>
import List from '~/layouts/List.vue'
export default {
  name: 'Post-Details',
  components: {
    List
  }
}
</script>

<style scoped>

</style>
