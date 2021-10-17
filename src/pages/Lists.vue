<template>
  <Layout class="list">
    <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">Lists</h1>
    <p>I’m pretty opnionated. I make lists so I can go back and compare things to the past or remember when something sufficently blew me away.</p>
    <ul>
      <li v-for="list in $page.lists.edges" :key="list.node.id" class="border-b border-teal-dark dark:border-teal hover:border-b-3 py-6">
        <g-link :to="list.node.path" class="group flex justify-between font-mono text-black hover:text-purple-dark focus:text-purple-dark dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-xl sm:text-2xl">{{ list.node.title }} <Angle class=" h-6 w-6 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 group-hover:translate-x-0 transition-transform duration-100" /></g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  lists: allListItems {
    edges {
      node{
        title
        pageTitle
        fileInfo{
          name
        }
        date(format: "MM-DD-YYYY")
        content
        path
      }
    }
  }
}
</page-query>

<script>
import Angle from '~/components/icons/Angle.vue'
export default {
  name: 'List-Page',
  metaInfo: {
    title: 'lists | leininger.tech'
  },
  components: {
    Angle
  }
}
</script>
