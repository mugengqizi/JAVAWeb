<script setup>
  import { ref } from 'vue'
  let fruit=["橘子","葡萄","苹果"]
  let animal=["猪八戒","鳄鱼","大象"]
  let tab1=ref(fruit)
  let ta=ref(0)
  function change(){
    if(JSON.stringify(tab1.value)==JSON.stringify(fruit)){
      tab1.value=animal
      ta.value=1
    }
    else{
      tab1.value=fruit
      ta.value=0
    }
    console.log(tab1.value)
  }
  
</script>

<template>
  <div id="tab" class="tab" @click="change()" @keydown.tab="change()">
    <span id="fruit" v-bind:class="{tt:ta==0}">水果</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span id="animal" v-bind:class="{tt:ta==1}">动物</span>
    <br>
    <div class="tab-content">
      <p v-for="item,index in tab1" :key="index">{{ tab1[index] }}</p>
    </div>
  </div>
  
</template>

<style scoped>
.tab span{
  font-size: 30px;
}
.tab .tab-content p{
  font-size: 20px;
}
.tt{
  color: red;
}
</style>
