<template>
  <main id="main-content" class="content mt-16">
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
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(90vw - 1rem);
  width: clamp(16rem, 90vw, 48rem);
  &.landing {
    width: clamp(16rem, 90vw, 64rem);
  }
  &.two-col {
    width: clamp(24rem, 90vw, 84rem);
  }
}
</style>
