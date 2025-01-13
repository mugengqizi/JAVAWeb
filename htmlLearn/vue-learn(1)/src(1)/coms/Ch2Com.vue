<template>
    <div style="background-color: yellow;">
        <h2>子组建2</h2>
        <p>年龄：{{ props.age }}</p>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    age:{
        type:Number,
        default:10
    }
})

</script>

<style lang="scss" scoped>

</style>