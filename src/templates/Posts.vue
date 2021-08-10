<template>
  <Layout>
    <div class="btn_group flex flex-col">
      <ButtonLink link="/words" class="mb-6">Back To Words</ButtonLink>
      <ButtonLink v-if="$page.post.TILIndex" link="/til">Back To TIL</ButtonLink>
    </div>
    <article>
      <h1 class="text-black dark:text-white font-mono text-5xl mb-2">{{ $page.post.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mb-8">{{ $page.post.date }} • {{ $page.post.timeToRead }} min</p>
      <div v-html="$page.post.content"/>
    </article>
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

<style scoped>

</style>
