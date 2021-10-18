<template>
  <Layout class="landing">
    <section class="flex items-center isolate w-full mt-12 sm:mt-32 mb-12 max-w-5xl mx-auto">
      <div class="flex flex-col justify-center w-full">
        <h1 class="text-4xl sm:text-5xl text-black dark:text-white font-bold font-mono mb-4">Hello, I'm <div class="look-at-me relative mr-8">David</div><div class="say-my-name relative" tabindex="0">Leininger</div>.</h1>
        <h2 class="text-2xl sm:text-3xl mt-2 md:mt-0 mb-4 dark:text-grey-dark">I design and build things for the internets.</h2>
        <h3 class="text-md sm:text-lg mt-1 md:mt-0 mb-4 dark:text-grey-dark">I like learning and <span class="strike">sometimes</span> hardly ever write about it.</h3>
        <p class="text-xxs sm:ext-xs my-0 dark:text-grey-dark">This is some small text.</p>
      </div>
    </section>
    <section class="flex flex-col md:flex-row gap-8 py-8">
      <div class="flex-1">
        <h3 class="text-sm text-teal-dark dark:text-teal font-mono">Somewhat Recent Words</h3>
        <ul>
          <li v-for="post in $page.posts.edges" :key="post.node.id" class="border-b border-teal-dark dark:border-teal hover:border-b-3 py-6 first:py-3">
            <g-link :to="post.node.path" class="group flex justify-between items-center font-mono text-black hover:text-purple-dark focus:text-purple-dark dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-xl sm:text-2xl">{{ post.node.title }} <Angle class=" h-6 w-6 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 group-hover:translate-x-0 transition-transform duration-100" /></g-link>
            <p class="text-teal-dark dark:text-teal m-0">{{ post.node.date }}<span v-if="post.node.TILIndex" class="text-purple-dark dark:text-yellow"> • TIL #{{ post.node.TILIndex }}</span></p>
          </li>
        </ul>
      </div>
      <div class="flex-2">
        <h3 class="text-sm text-teal-dark dark:text-teal font-mono">Featured Work</h3>
        <ul>
          <li class="flex gap-6 py-3 first:pt-3" v-for="item in $page.workItems.edges" :key="item.node.id">
            <img :src="item.node.thumbnail.src" :alt="`${item.node.title} preview.`" class="w-16 h-16 xs:w-20 xs:h-20 object-cover rounded" />
            <div>
              <g-link :to="item.node.path" class="group flex justify-between items-center font-mono text-black hover:text-purple-dark focus:text-purple-dark dark:text-white dark:hover:text-yellow dark:focus:text-yellow text-xl sm:text-2xl">{{ item.node.title }} <Angle class=" h-6 w-6 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 group-hover:-translate-x-0 transition-transform duration-100" /></g-link>
              <ul class="flex flex-wrap">
                <li v-for="(tag, index) in item.node.tags" :key="index" class="text-purple-dark dark:text-teal m-0 w-max">
                  {{tag}}<span v-if="index !== item.node.tags.length - 1" class="mr-2">, </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
import Angle from '~/components/icons/Angle.vue'
export default {
  components: {
    Angle
  },
  metaInfo: {
    title: 'hello'
  },
}
</script>

<page-query>
query {
  posts: allPosts(limit: 3) {
    edges {
      node {
        title
        pageTitle
        fileInfo{
          name
        }
        date(format: "MM-DD-YYYY")
        path
        TILIndex
      }
    }
  }
  workItems: allWorkItems(limit: 3, sortBy: "order", order: ASC) {
    edges {
      node {
        title
        slug
        thumbnail
        tags
        order
        path
      }
    }
  }
}
</page-query>

<style>
.look-at-me{
  display: inline-block;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}
.say-my-name{
  display: inline-block;
  animation: goodLuck 0.2s;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}
.say-my-name:hover, .say-my-name:focus{
  animation: sayMyName 0.2s;
  color: transparent;
  cursor: help;
  outline: none;
}
.say-my-name::after {
  color: var(--primary);
  content: 'Lining-er';
  left: 0;
  display: inline-block;
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s;
}
.say-my-name:hover::after, .say-my-name:focus::after {
  opacity: 1;
  display: inline-block;
}
.say-my-name:focus::after {
  text-decoration: underline wavy var(--accent);
}
@keyframes sayMyName {
  from { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  20% { transform: skewX(12deg) skewY(1deg); color: var(--accent-dark); }
  40% { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  60% { transform: skewX(12deg) skewY(1deg); color: var(--accent);  }
  80% { transform: skewX(-12deg) skewY(-1deg); color: var(--accent-dark); }
  to { transform: skewX(0deg) skewY(0deg); color: theme('colors.transparent'); }
}
@keyframes goodLuck {
  from { transform: skewX(-12deg) skewY(-1deg); color: var(--accent-dark); }
  20% { transform: skewX(12deg) skewY(1deg); color: var(--accent); }
  40% { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  60% { transform: skewX(12deg) skewY(1deg); color: var(--accent-dark);  }
  80% { transform: skewX(-12deg) skewY(-1deg); color: var(--accent); }
  to { transform: skewX(0deg) skewY(0deg); color: var(--base); }
}
</style>
