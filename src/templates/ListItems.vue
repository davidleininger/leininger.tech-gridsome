<template>
  <Layout class="content-grid">
    <article>
      <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-mono mb-2 md:pr-4">{{ $page.list.title }}</h1>
      <p class="text-sm text-teal-dark dark:text-teal mt-0">Edited On {{ $page.list.date }}</p>
      <div class="mt-12" :class="{'reversed': $page.list.reversed}" :style="`--list-reset: ${$page.list.counterReset}`" v-html="$page.list.content"/>
    </article>
    <ButtonGroup>
      <ButtonLink link="/lists" class="flex-1 md:flex-none">Back To List</ButtonLink>
    </ButtonGroup>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  list: listItems (path: $path) {
    title
    date(format: "MMMM DD, YYYY")
    content
    path
    counterReset
    reversed
  }
}
</page-query>

<script>
import ButtonLink from '~/components/ButtonLink.vue'
import ButtonGroup from '../components/ButtonGroup.vue'

export default {
  name: 'Post-Details',
  components: {
    ButtonLink,
    ButtonGroup
  },
  metaInfo() {
    ButtonGroup
    return {
      title: this.$page.list.title.toLowerCase(),
    }
  }
}
</script>

<style lang="scss" scoped>
article /deep/ {
  h2, h3 {
    margin-top: 2.5em;
  }
  ol {
    list-style: none;
    counter-reset: list_counter var(--list-reset, 0);
  }
  ol li {
    align-items: baseline;
    display: flex;
    counter-increment: list_counter;
  }
  .reversed ol li {
    counter-increment: list_counter -1;
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
    a {
      color: var(--base) !important;
    }
    a:hover {
      color: var(--accent) !important;
    }
  }
}
</style>
