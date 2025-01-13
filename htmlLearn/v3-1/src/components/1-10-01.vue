<template>
  <div>
    <form action="">
      <input type="checkbox" value="1" v-model="arr">牛逼
      <input type="checkbox" value="2" v-model="arr">超级牛逼
      <input type="checkbox" value="3" v-model="arr">神器
      <div>{{arr}}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let arr=ref([1,2,3])
console.log(arr.value)
</script>

<style  scoped>

</style>