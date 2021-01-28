<template>
  <div class="page flex flex-col min-h-screen w-full p-2 relative">
    <header class="flex items-center bg-grey-light dark:bg-black text-grey-darkest dark:text-grey-dark" role="banner">
      <Logo />
      <Nav />
    </header>
    <div id="main-wrapper" class="flex-1 bg-grey-light dark:bg-black text-grey-darkest dark:text-grey-dark p-4 md:p-8 xl:p-12 w-full">
      <main id="main-content">
        <slot/>
      </main>
    </div>
    <Footer />
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
  name: 'Base',
  components: {
    Logo,
    Nav,
    Footer
  },
}
</script>
