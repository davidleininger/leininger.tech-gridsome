<template>
  <Layout class="landing list">
    <div class="flex">
      <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">Work</h1>
      <!-- <button>All</button>
      <button>Branding</button>
      <button>Design</button>
      <button>Development</button> -->
    </div>
    <ul class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
      <li v-for="item in $page.work.edges" :key="item.node.id">
        <g-link :to="item.node.path" class="group flex flex-col justify-between font-mono text-black hover:text-purple-dark focus:text-purple dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-xl">
        <g-image :src="item.node.img.src" :alt="`${$page.work.title} preview image`" class="border border-grey-light dark:border-0 mb-2" />{{ item.node.title }}</g-link>
        <ul class="flex flex-wrap">
          <li v-for="(tag, index) in item.node.tags" :key="index" class="text-sm text-purple-dark dark:text-teal m-0 w-max">
            {{tag}}<span v-if="index !== item.node.tags.length - 1" class="mr-1">, </span>
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  work: allWorkItems(sortBy: "order", order: ASC) {
    edges {
      node {
        title
        slug
        fileInfo{
          name
        }
        content
        path
        order
        img
        tags
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Work-Page',
  metaInfo: {
    title: 'work'
  },
}
</script>

<style lang="scss" scoped>
li {
  transition: transform 0.1s ease-in;
  &:hover {
    transform: scale(1.075);
    transition: transform 0.1s ease-out;
  }
}
</style>
