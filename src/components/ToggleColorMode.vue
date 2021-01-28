<template>
  <span class="relative h-6 w-6">
    <transition name="sunrise">
    <svg
      v-if="isDark && isDark != null"
      class="absolute top-0 bottom-0 left-0 right-0"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
    </transition>
    <transition name="sunset" :duration="3000">
    <svg v-if="!isDark && isDark != null"
      class="absolute top-0 bottom-0 left-0 right-0"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
    </transition>
  </span>
</template>

<script>
export default {
  name: 'ToggleColorMode',
  props: {
    isDark: {
      type: Boolean,
      default: true,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.sunrise-enter-active {
  transition: transform 0.2s ease-out, opacity 0.2s ease-in;
}
.sunrise-leave-active {
  transition: transform 0.2s ease-in, opacity 0.2s ease-in;
}
.sunrise-enter, .sunrise-leave-to {
  transform: scale(0.6) rotate(-90deg);
  opacity: 0;
}
.sunrise-enter-to, .sunrise-leave  {
  transform: scale(1) rotate(0deg);
  opacity: 1;
}
.sunset-enter-active {
  transition: transform 0.2s ease-out, opacity 0.2s ease-in;
}
.sunset-leave-active {
  transition: transform 0.2s ease-in, opacity 0.2s ease-in;
}
.sunset-enter, .sunset-leave-to {
  transform: scale(0.6) rotate(90deg);
  opacity: 0;
}
.sunset-enter-to, .sunset-leave  {
  transform: scale(1) rotate(0deg);
  opacity: 1;
}
</style>
