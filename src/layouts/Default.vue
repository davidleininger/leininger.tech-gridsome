<template>
  <main id="main-content" class="content my-12">
    <slot/>
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
#main-content {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition: opacity 0.2s 0.2s ease-in;
  @media screen and (max-width: theme('screens.sm')) {
    .mobile-nav-open & {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease-out;
    }
  }
  &.list {
    width: clamp(14rem, calc(90vw - 2rem), 48rem);
  }
  &.landing {
    width: clamp(14rem, calc(90vw - 2rem), 64rem);
  }
  &.two-col {
    width: clamp(14rem, calc(90vw - 2rem), 72rem);
  }
}
</style>
