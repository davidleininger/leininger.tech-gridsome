<template>
  <label class="block text-black dark:text-white focus-within:text-purple-dark dark:focus-within:text-yellow">
    <span
      v-if="label !== ''"
      :class="{
        'form-label-required': required,
        'text-red': hasErrors
      }"
      class="text-left mb-2 block"
    >
      {{ label }}
    </span>
    <input
      v-bind="$attrs"
      :value="decodedValue"
      :type="type"
      :class="[{
        'bg-white border-teal-dark focus:text-black focus:border-purple-dark dark:bg-black dark:border-teal dark:focus:text-white dark:focus:border-yellow': !hasErrors && !$attrs.disabled,
        'border-red': hasErrors,
        'bg-grey-dark border-gray-darker cursor-not-allowed': $attrs.disabled
      }, fieldClass]"
      class="rounded-none border-2 p-2 w-full focus:outline-none block"
      v-on="listeners"
    >
    <div
      v-if="hasErrors"
      class="block mt-2 text-red text-xs"
    >
      {{ error }}
    </div>
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
input {
  -webkit-appearance: none;
  box-shadow: none;
  appearance: none;
}
</style>