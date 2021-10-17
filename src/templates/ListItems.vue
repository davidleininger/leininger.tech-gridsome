<template>
  <Layout class="content-grid">
    <article>
      <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-mono mb-2 md:pr-4">{{ $page.list.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mt-0">Edited On {{ $page.list.date }}</p>
      <div class="mt-12" v-html="$page.list.content"/>
    </article>
    <div class="btn-group mt-8 md:mt-0 gap-6 flex flex-col xs:flex-row md:flex-col md:items-end">
      <ButtonLink link="/lists" class="flex-1 md:flex-none">Back To List</ButtonLink>
    </div>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  list: listItems (path: $path) {
    title
    pageTitle
    date(format: "MMMM DD, YYYY")
    content
    path
  }
}
</page-query>

<script>
import ButtonLink from '~/components/ButtonLink.vue'

export default {
  name: 'Post-Details',
  components: {
    ButtonLink,
  },
  metaInfo() {
    return {
      title: this.$page.list.pageTitle,
    }
  }
}
</script>

<style lang="scss" scoped>
article /deep/ {
  ol {
    list-style: none;
    counter-reset: list_counter;
  }
  ol li {
    align-items: baseline;
    display: flex;
    counter-increment: list_counter;
  }
  ol li::before {
    content: counter(list_counter);
    color: var(--accent);
    font-family: theme('fontFamily.mono');
    font-variant-numeric: tabular-nums;
    margin-right: 1.5rem;
  }
  ul li::before {
    content: '•';
    color: var(--accent);
    font-family: theme('fontFamily.mono');
    font-variant-numeric: tabular-nums;
    margin-right: 1.5rem;
  }
  li {
    font-size: theme('fontSize.2xl');
    font-weight: bold;
    margin: 2rem 0;
    &:first-of-type {
      margin-top: 0;
    }
    @screen sm {
      font-size: theme('fontSize.3xl');
    }
    @screen md {
      font-size: theme('fontSize.4xl');
    }
  }
  .description {
    color: var(--primary);
    display: block;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
  }
}
</style>
