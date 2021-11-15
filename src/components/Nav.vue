<template>
  <section class="w-full flex justify-end items-center">
    <nav class="h-10 w-full flex items-center">
      <Logo @click.native="navIsOpen = false" class="mr-auto" />
      <button class="toggle sm:hidden flex justify-center items-center h-10 w-10 flex-shrink-0 relative text-xxs" @click="handleChange" :aria-expanded="navIsOpen.toString()"><span class="flex flex-col justify-center items-center" v-if="!navIsOpen"><Menu /></span><span class="flex flex-col justify-center items-center text-black" v-else><Close /></span></button>
      <ul class="top-level-nav flex flex-col items-center justify-around text-4xl font-bold pointer-events-none opacity-0 top-100 right-0 absolute w-fill sm:flex-row sm:text-base sm:font-normal sm:pointer-events-auto sm:opacity-100 sm:static sm:top-auto sm:left-auto sm:w-auto sm:justify-end" :class="{'pt-6 opacity-100 pointer-events-auto text-white sm:pt0 sm:text-grey-darkest sm:dark:text-grey-dark': navIsOpen}">
        <li v-for="(link, index) in nav" :key="link.index" @click="closeNav">
          <g-link :to="link.url" class="cursor-pointer py-6 sm:py-0 sm:px-2 sm:h-10 flex items-center relative" :aira-current="$route.path === `/${link.url}`" :active="$route.path.startsWith === `/${link.url}`" :data-link="link.text">{{ link.text }}</g-link>
        </li>
      </ul>
    </nav>
    <button @click="changeMode" class="toggle flex justify-center items-center h-10 w-10 flex-shrink-0 relative" aria-label="Color Mode Toggle" :aria-pressed="isDarkMode">
      <Toggle v-if="isDarkMode != null" :is-dark="isDarkMode" />
    </button>
  </section>
</template>

<script>
import navigation from '@/data/navigation'
import Logo from '~/components/Logo'
import Toggle from '@/components/ToggleColorMode'
import Menu from '@/components/icons/Menu'
import Close from '@/components/icons/Close'

export default {
  name: 'Nav',
  components: {
    Logo,
    Toggle,
    Menu,
    Close,
  },
  props: {
    navIsOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return{
      nav: navigation.mainNav.filter(it => it.inTopNav),
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
    },
    closeNav() {
      this.$emit('updateNav', false)
    },
    handleChange() {
      this.$emit('updateNav', !this.navIsOpen)
    }
  },
}
</script>

<style lang="scss" scoped>
.top-level-nav {
  @screen sm {
    transition: opacity 0.2s ease-in;
    .mobile-nav-open & {
      transition: opacity 0.2s 0.2s ease-out;
    }
  }
}
.top-level-nav a.active {
  text-decoration: underline;
  @screen sm {
    color: var(--primary);
    text-decoration: none;
  }
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
  .mobile-nav-open & {
    display: none;
    content: '';
  }
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
