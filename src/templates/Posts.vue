<template>
  <Layout class="content-grid">
    <article class="min-w-0">
      <h1 class="text-black dark:text-white font-mono text-3xl sm:text-4xl md:text-5xl mb-2">{{ $page.post.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mt-0 mb-8">{{ $page.post.date }} • {{ $page.post.timeToRead }} min <span v-if="$page.post.TILIndex" class="text-purple-dark dark:text-yellow"> • TIL #{{ $page.post.TILIndex }}</span></p>
      <div v-html="$page.post.content"/>
    </article>
    <ButtonGroup>
        <ButtonLink link="/words" class="flex-1 md:flex-none">Back To Words</ButtonLink>
        <ButtonLink v-if="$page.post.TILIndex" link="/til" class="flex-1 md:flex-none">Back To TIL</ButtonLink>
      </ButtonGroup>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: posts (path: $path) {
    title
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
import ButtonGroup from '~/components/ButtonGroup.vue'
export default {
  name: 'Post-Details',
  components: {
    ButtonLink,
    ButtonGroup
  },
  metaInfo() {
    return {
      title: this.$page.post.title.toLowerCase(),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
