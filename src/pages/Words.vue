<template>
  <Layout class="list">
    <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">Words</h1>
    <p>I like learning and <span class="strike">sometimes</span> hardly ever write about it. I’m trying to be better about that now.</p>

    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.id" class="border-b border-teal-dark dark:border-teal hover:border-b-3 py-6">
        <g-link :to="post.node.path" class="group flex justify-between font-mono text-black hover:text-purple focus:text-purple dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-2xl">{{ post.node.title }} <Angle class=" h-6 w-6 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 group-hover:translate-x-0 transition-transform duration-200" /></g-link>
        <p class="text-teal-dark dark:text-teal m-0">{{ post.node.date }}<span v-if="post.node.TILIndex" class="text-purple dark:text-yellow"> • TIL #{{ post.node.TILIndex }}</span></p>
      </li>
    </ul>
    <Pager :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPosts(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
        TILIndex
      }
    }
  }
}
</page-query>

<script>
import Angle from '~/components/icons/Angle.vue'
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'words'
  },
  components: {
    Pager,
    Angle
  }
}
</script>
