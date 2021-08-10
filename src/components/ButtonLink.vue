<template>
  <g-link :to="link"
    class="ldt-btn inline-block"
  >
    <div
      class="text-md"
    >
      <slot />
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'BtnLink',
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>
