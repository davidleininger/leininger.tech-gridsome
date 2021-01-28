<template>
  <Layout>
    <h1>{{ $page.list.pageTitle }}</h1>
    <p class="text-sm text-gray-500">Last updated: {{ $page.list.date }}</p>
    <article v-html="$page.list.content"/>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  list: listItems (path: $path) {
    title
    pageTitle
    date(format: "DD-MM-YYYY")
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
