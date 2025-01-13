<template>
  <button @click="onSave">存储</button>
  <button @click="onRead">读取</button>
  <hr>
  <button @click="onDel">删除</button>
</template>

<script setup>
function onSave(){
  localStorage.setItem('age',100);
}
function onRead(){
  // var age = localStorage.getItem('age');
  // console.log(age);

  console.log(localStorage.getItem('blood'));
}
function onDel(){
  // localStorage.removeItem('age');
  localStorage.clear();
}

</script>

<style lang="scss" scoped>

</style>