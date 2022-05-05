<template>
  <Layout class="content-grid">
    <article class="min-w-0">
      <h1 class="text-black dark:text-white font-mono text-3xl sm:text-4xl md:text-5xl mb-2">{{ $page.post.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mt-0 mb-8">{{ $page.post.date }} • {{ $page.post.timeToRead }} min <span v-if="$page.post.TILIndex" class="text-purple-dark dark:text-yellow"> • TIL #{{ $page.post.TILIndex }}</span></p>
      <section aria-label="summary" v-if="$page.post.tldr">
        <span class="summary-heading"><abbr title="Too Long Didn't Read">TL;DR</abbr></span> <span class="summary-text" v-html="$page.post.tldr" />
      </section>
      <div v-html="$page.post.content" class="flow" />
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
    tldr
    content
    image
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
    const image = this.$page.post.image
    const imagePath = image.src || '/lt-og-img.jpg'
    return {
      title: this.$page.post.title.toLowerCase(),
      meta: [
        {
          key: 'og:image',
          name: 'og:image',
          content: imagePath,
        },

        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: imagePath,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
[aria-label="summary"] {
  border-bottom: 1px solid var(--subtle);
  font-size: 1.125em;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  .summary-heading {
    font-weight: bold;
    color: var(--accent);
    letter-spacing: 0.125ch;
  }
  .summary-text {
    border-left: 1px solid var(--accent);
    padding-left: 0.625rem;
    margin-left: 0.625rem;
    font-style: italic;
  }
}
</style>
