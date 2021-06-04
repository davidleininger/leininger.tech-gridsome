<template>
  <main id="main-content" class="content two-col mt-16">
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
  name: 'TwoColumn',
}
</script>

<style>
#main-content.two-col {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(90vw - 1rem);
  width: clamp(24rem, calc(90vw - 1rem), 84rem);
}
</style>
