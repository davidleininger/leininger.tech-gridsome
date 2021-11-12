<template>
  <div class="btn-group-wrapper mt-8 md:mt-0">
    <div class="btn-group btn-group gap-6 flex flex-col xs:flex-row md:flex-col md:items-end md:sticky md:top-8">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
}
</script>
