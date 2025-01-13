<template>
  <div>
    <h1>子传父</h1>
    <hr>
    <Ch3Com @fa="fa" @fa2="fa2" />
  </div>
</template>

<script setup>
import Ch3Com from './coms/Ch3Com.vue';


const fa = ()=>{
  console.log('i am fa in fa');
}

const fa2 = (a,b)=>{
  console.log('i am fa2 in fa',a,b);
}
</script>

<style lang="scss" scoped>

</style>