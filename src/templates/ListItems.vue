<template>
  <ListLayout>
    <h1>{{ $page.list.title }}</h1>
    <p class="text-sm text-gray-500">Last updated: {{ $page.list.date }}</p>
    <article v-html="$page.list.content"/>
  </ListLayout>
</template>

<page-query>
query Page ($path: String!) {
  list: listItems (path: $path) {
    title
    pageTitle
    date(format: "MM-DD-YYYY")
    content
    path
  }
}
</page-query>

<script>
import ListLayout from '~/layouts/List.vue'

export default {
  name: 'Post-Details',
  components: {
    ListLayout
  },
  metaInfo() {
    return {
      title: this.$page.list.pageTitle,
    }
  }
}
</script>

<style scoped>

</style>
