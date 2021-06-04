<template>
  <div class="page-border p-2 relative">
    <div class="page min-h-page w-full flex flex-col">
      <header class="flex items-center text-grey-darkest dark:text-grey-dark" role="banner">
        <Logo />
        <Nav />
      </header>
      <div id="main-wrapper" class="text-grey-darkest dark:text-grey-dark p-4 md:p-8 xl:p-12 w-full">
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
}
</script>

<style scoped>
  .page {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
