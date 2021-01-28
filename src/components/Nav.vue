<template>
  <section class="relative flex justify-end items-center ml-auto">
    <nav class="top-level-nav h-10 flex items-center">
      <button class="toggle sm:hidden flex justify-center items-center h-10 w-10 flex-shrink-0 relative text-xxs" @click="navIsOpen = !navIsOpen" :aria-expanded="navIsOpen.toString()">Menu</button>
      <ul class="flex items-center justify-around pointer-events-none bg-grey-darkest opacity-0 top-100 right-0 absolute w-fill sm:pointer-events-auto sm:opacity-100 sm:static sm:top-auto sm:left-auto sm:w-auto sm:justify-end sm:bg-transparent" :class="{'opacity-100 pointer-events-auto text-white sm:text-grey-darkest sm:dark:text-grey-dark': navIsOpen}">
        <li v-for="(link, index) in nav" :key="link.index">
          <g-link :to="link.url" class="sm:px-2 h-10 flex items-center relative" :active="$route.path.startsWith === `/${link.url}`" :data-link="link.text">{{ link.text }}</g-link>
        </li>
      </ul>
    </nav>
    <button @click="changeMode" class="toggle flex justify-center items-center h-10 w-10 flex-shrink-0 relative" aria-label="Color Mode Toggle">
      <Toggle v-if="isDarkMode != null" :is-dark="isDarkMode" />
    </button>
  </section>
</template>

<script>
import navigation from '@/data/navigation'
import Toggle from '@/components/ToggleColorMode'

export default {
  name: 'Nav',
  components: {
    Toggle
  },
  data() {
    return{
      nav: navigation.mainNav.filter(it => it.inTopNav),
      navIsOpen: false,
      isDarkMode: null,
    }
  },
  mounted() {
    this.isDarkMode = JSON.parse(localStorage.getItem('isDark', this.isDark))
  },
  methods: {
    changeMode() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('isDark', this.isDarkMode)
    }
  },
}
</script>

<style lang="scss" scoped>
.top-level-nav a.active {
  color: var(--primary);
}
.top-level-nav a, button.toggle{overflow: hidden;}
.top-level-nav a::after, button.toggle::after {
  align-items: center;
  background: theme('colors.teal');
  color: theme('colors.black');
  content: attr(data-link);
  display: flex;
  height: theme('spacing.10');
  left: 0;
  padding: 0 theme('spacing.2');
  position: absolute;
  top: 0;
  transform: translate3d(0, -100%, 0);
  transition: transform .2s ease-in;
  width: 100%;
}
button.toggle {
  z-index: 1;
  transform: translate3d(0, 0, 0);
}
button.toggle:hover, button.toggle:focus {
  color: theme('colors.black');
}
button.toggle:after {
  z-index: -1;
}
.top-level-nav a:hover::after, button.toggle:hover::after, .top-level-nav a:focus::after, button.toggle:focus::after {
  transform: translateY(0);
  transition: transform .2s ease-out;
}
</style>
