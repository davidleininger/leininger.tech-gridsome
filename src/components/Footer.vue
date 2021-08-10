<template>
  <footer class="bg-grey-light dark:bg-black-light flex flex-col items-center p-4 text-grey-darkest dark:text-grey-dark xs:flex-row xs:justify-between" role="contentinfo">
    <nav class="flex">
      <a v-for="link in socialLinks" :key="link.network" class="h-6 w-6 mr-4 last:mr-0 hover:text-teal transform hover:-translate-y-1 transition-transform duration-200" :aria-label="link.network" :href="link.url">
        <component :is="link.network"></component>
      </a>
    </nav>
    <div class="flex items-center">
      <nav class="flex mr-2">
        <g-link v-for="(link, index) in nav" :key="link.index" :to="link.url" class="sm:px-2 h-10 flex items-center relative hover:text-teal-dark dark:hover:text-teal">{{ link.text }}</g-link>
      </nav>
      <p class="m-0 mt-4 xs:mt-0">&copy; David Leininger {{ year }}</p>
    </div>
  </footer>
</template>

<script>
import navigation from '@/data/navigation'
import Codepen from '@/components/icons/Codepen'
import Dribbble from '@/components/icons/Dribbble'
import Github from '@/components/icons/Github'
import Instagram from '@/components/icons/Instagram'
import Twitter from '@/components/icons/Twitter'

export default {
  name: 'Footer',
  components:{
    Codepen,
    Dribbble,
    Github,
    Instagram,
    Twitter
  },
  data() {
    return{
      socialLinks: navigation.socialLinks,
      nav: navigation.mainNav.filter(it => !it.inTopNav),
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
