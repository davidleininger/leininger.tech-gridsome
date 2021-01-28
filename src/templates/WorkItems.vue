<template>
  <Layout>
    <h1>{{ $page.work.title }}</h1>
    <a :href="$page.work.source">{{ $page.work.source }}</a>
    <article v-html="$page.work.content"/>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  work: workItems (path: $path) {
    title
    slug
    source
    content
  }
}
</page-query>

<script>
  export default {
    name: 'Work-Details'
  }
</script>

<style scoped>

</style>
