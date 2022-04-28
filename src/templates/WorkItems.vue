<template>
  <Layout class="content-grid">
    <article>
      <h1 class="text-black dark:text-white text-5xl font-mono md:pr-4">{{ $page.work.title }}</h1>
      <ul class="flex flex-wrap mb-6">
        <li v-for="(tag, index) in $page.work.tags" :key="index" class="text-purple-dark dark:text-teal m-0 w-max">
          {{tag}}<span v-if="index !== $page.work.tags.length - 1" class="mr-2">, </span>
        </li>
      </ul>
      <g-image :src="$page.work.img.src" :alt="`${$page.work.title} preview image`" class="border border-grey-light dark:border-0 mb-6" />
      <div v-html="$page.work.content" class="flow" />
    </article>
    <ButtonGroup>
      <ButtonLink link="/work">Back to Work</ButtonLink>
    </ButtonGroup>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  work: workItems (path: $path) {
    content
    img
    slug
    source
    tags
    title
  }
}
</page-query>

<script>
import ButtonLink from '../components/ButtonLink.vue'
import ButtonGroup from '../components/ButtonGroup.vue'
export default {
  name: 'Work-Details',
  metaInfo() {
    return {
      title: this.$page.work.title.toLowerCase(),
    }
  },
  components: { ButtonLink, ButtonGroup },
}
</script>

<style lang="scss">
article blockquote {
  border-left: 4px solid var(--alt);
  color: var(--primary);
  margin: 1.5rem 0;
  padding: .25rem 0 .25rem 2rem;
  p:first-of-type {
    font-size: 1.25em;
    font-weight: bold;
  }
}
</style>
