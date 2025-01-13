<template>
  <h1>app</h1>
  <hr>
  <!-- 双标签 -->
  <MyCom></MyCom>
  <!-- 单标签 -->
  <MyCom/>
  <hr>
  <h1>组件通信</h1>
  <button @click="money+=5">加钱5</button>
  <Ch1Com :money="money" car="奔驰"></Ch1Com>
  <hr>
  年龄：
  <Ch2Com :age="age" />
</template>

<script setup>
// import MyCom from './coms/MyCom.vue';
import MyCom from '@/coms/MyCom.vue';
import Ch1Com from './coms/Ch1Com.vue';
import Ch2Com from './coms/Ch2Com.vue';
import { ref } from 'vue';

let money = ref(100)

let age = ref(50)


</script>

<style lang="scss" scoped>

</style>