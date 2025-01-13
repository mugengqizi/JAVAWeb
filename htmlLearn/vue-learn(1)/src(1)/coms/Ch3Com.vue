<template>
    <div style="background-color: yellow;">
        <h2>子组建3</h2>
        <button @click="emit('fa')">调用父组件方法</button>
        <button @click="emit('fa2',45,90)">调用父组件方法2</button>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue'
//定义发射器
const emit = defineEmits();

</script>

<style lang="scss" scoped>

</style>