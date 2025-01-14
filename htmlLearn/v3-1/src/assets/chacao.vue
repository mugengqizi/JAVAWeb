<template>
  <div style="color:pink;background-color: antiquewhite;">
    <p>GGBond</p>
    <slot>
      <p>moren1</p>
      <p>moren2</p>
    </slot>
    <button>
      <slot name="btn">
        <p>默认</p>
      </slot>
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>