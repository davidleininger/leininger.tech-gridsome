<template>
  <Layout class="list">
    <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">{{ $page.work.title }}</h1>
    <g-image :src="$page.work.img.src" :alt="`${$page.work.title} preview image`" />
    <a :href="$page.work.source">{{ $page.work.source }}</a>
    <article v-html="$page.work.content"/>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  work: workItems (path: $path) {
    title
    slug
    content
    img
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
