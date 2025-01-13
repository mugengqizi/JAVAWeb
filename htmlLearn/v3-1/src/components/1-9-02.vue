<template>
  <div>
    <p>效果图</p>
    <hr>
    <button @click="start()">开始走马灯</button>
    <button @click="stop()">停止走马灯</button>
    <p class="text1">{{ arr.join('') }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  let text2="人无我有，人有我优！"
  let arr=ref(text2.split(''))
  let timer=null
  function start(){
    timer=setInterval(()=>{
      let temp=ref(arr.value[0])
      for(let i=1;i<arr.value.length;i++){
        arr.value[i-1]=arr.value[i]
      }
      arr.value[arr.value.length-1]=temp.value
      console.log(arr.value)
    },1000)
    console.log("开始")
  }
  function stop(){
    clearInterval(timer);  
    console.log("停止")
  }
</script>

<style  scoped>
.text1{
  font-size: 20px;
  background-color: pink;
}
</style>