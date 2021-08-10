<template>
  <Layout class="landing list">
    <header class="flex">
      <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">Work</h1>
      <button>All</button>
      <button>Branding</button>
      <button>Design</button>
      <button>Development</button>
    </header>
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="item in $page.work.edges" :key="item.node.id">
        <g-link :to="item.node.path" class="group flex flex-col justify-between font-mono text-black hover:text-purple-dark focus:text-purple dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-xl">
        <g-image :src="item.node.img.src" :alt="`${$page.work.title} preview image`" class="mb-2" />{{ item.node.title }}</g-link>
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
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Work-Page',
  metaInfo: {
    title: 'Work'
  },
}
</script>
