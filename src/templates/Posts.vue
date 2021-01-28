<template>
  <Layout>
    <h1>{{ $page.post.pageTitle }}</h1>
    <p class="text-sm text-gray-500">Last updated: {{ $page.post.date }}</p>
    <article v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: posts (path: $path) {
    title
    pageTitle
    date(format: "DD-MM-YYYY")
    source
    content
  }
}
</page-query>

<script>
  export default {
    name: 'Post-Details'
  }
</script>

<style scoped>

</style>
