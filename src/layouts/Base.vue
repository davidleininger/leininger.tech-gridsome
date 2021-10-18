<template>
  <div class="page-border p-2 relative">
    <div class="page min-h-page w-full flex flex-col" :class="{'mobile-nav-open': navIsOpen}">
      <header class="flex items-center text-grey-darkest dark:text-grey" role="banner">
        <Logo @click.native="navIsOpen = false" />
        <Nav :nav-is-open="navIsOpen" @updateNav="handleNavChange" />
      </header>
      <div id="main-wrapper" class="text-grey-darkest dark:text-grey p-6 md:p-8 xl:p-12 w-full">
        <slot/>
      </div>
    <Footer />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/components/Logo'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  name: 'BaseLayout',
  components: {
    Logo,
    Nav,
    Footer
  },
  data() {
    return {
      navIsOpen: false
    }
  },
  methods: {
    handleNavChange(val) {
      this.navIsOpen = val
    }
  },
}
</script>

<style scoped>
  .page {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
