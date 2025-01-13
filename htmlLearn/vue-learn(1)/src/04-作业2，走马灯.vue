<template>
  <button @click="onStart">开始</button>
  <button @click="onStop">停止</button>
  <p class="info">{{ str }}</p>
</template>

<script setup>
import { ref } from 'vue';

let str = ref('人无我有，人有我优！');
let index;
const onStart = ()=>{
  // clearInterval(index);
  onStop();
  index=setInterval(()=>{
    str.value = str.value.substring(1)+str.value.charAt(0);
  },500)
}
const onStop = ()=>clearInterval(index);
</script>

<style scoped>
.info{background-color: pink;}
</style>