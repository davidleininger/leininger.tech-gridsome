<template>
  <Layout class="content-grid">
    <article class="min-w-0">
      <h1 class="text-black dark:text-white font-mono text-5xl mb-2">{{ $page.post.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mb-8">{{ $page.post.date }} • {{ $page.post.timeToRead }} min</p>
      <div v-html="$page.post.content"/>
    </article>
    <div class="btn-group mt-8 md:mt-0 gap-6 flex flex-col xs:flex-row md:flex-col md:items-end">
      <ButtonLink link="/words" class="flex-1 md:flex-none">Back To Words</ButtonLink>
      <ButtonLink v-if="$page.post.TILIndex" link="/til" class="flex-1 md:flex-none">Back To TIL</ButtonLink>
    </div>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: posts (path: $path) {
    title
    pageTitle
    date(format: "MMM DD, YYYY")
    source
    timeToRead
    TILIndex
    content
  }
}
</page-query>

<script>
import ButtonLink from '~/components/ButtonLink.vue'
export default {
  name: 'Post-Details',
  components: {
    ButtonLink,
  }
}
</script>

<style lang="scss" scoped>

</style>
