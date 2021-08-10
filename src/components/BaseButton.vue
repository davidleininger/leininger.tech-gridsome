<template>
  <Button
    class="ldt-btn inline-block"
    :class="[{'text-grey-500': disabled }, variant]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="onClick"
  >
    <div
      class="text-md"
      :class="{'text-grey-500': disabled }"
    >
      <slot />
    </div>
  </Button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('button-clicked')
    }
  }
}
</script>
