<template>
  <label class="block text-black dark:text-white focus-within:text-purple-dark dark:focus-within:text-yellow">
    <span
      v-if="label !== ''"
      :class="{
        'form-label-required': required,
        'text-red dark:text-red-light': hasErrors
      }"
      class="text-left mb-2 block"
    >
      {{ label }}
    </span>
    <textarea
      v-bind="$attrs"
      :value="decodedValue"
      :class="[{
        'border-teal-dark dark:border-teal': !hasErrors,
        'border-red dark:border-red-light': hasErrors
      }, fieldClass]"
      class="bg-white focus:text-black focus:border-purple-dark dark:bg-black dark:focus:text-white dark:focus:border-yellow resize-y rounded-none border-2 p-2 w-full focus:outline-none block"
      v-on="listeners"
      :style="styleObject"
    />
    <div
      v-if="hasErrors"
      class="block mt-2 text-red dark:text-red-light text-sm"
    >
      {{ error }}
    </div>
  </label>
</template>

<script>
export default {
  name: 'BaseTextarea',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    hasErrors: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    styleObject: {
      type: Object,
      default: () => {}
    },
    fieldClass: {
      type: String,
      default: 'text-base'
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    },
    decodedValue() {
      if (!this.value) {
        return
      }
      return this.value.replace(/&amp;/g, "&")
    }
  }
}
</script>

<style lang="scss" scoped>
// remove the inset box shadow in iOS safari
textarea {
  -webkit-appearance: none;
  box-shadow: none;
  appearance: none;
}
</style>
