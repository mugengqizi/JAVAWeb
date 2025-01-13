<template>
    <div style="background-color: yellow;">
        <h2>子组建</h2>
        {{ props }}
        <p>收到钱：{{ props.money }}</p>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps(['money','car'])
console.log(props.money);

</script>

<style lang="scss" scoped>

</style>