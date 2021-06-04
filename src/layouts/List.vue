<template>
  <main id="main-content" class="list mt-16">
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
  name: 'ListLayout',
}
</script>

<style>
#main-content.list {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 90vw;
  width: clamp(16rem, 90vw, 48rem);
}
</style>
