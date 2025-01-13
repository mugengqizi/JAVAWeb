<template>
  <div>
    <h1 @click="f1" :class="arr">样式控制-数组</h1>
    <h1 @click="arr.pop()" :class="arr">样式控制-数组</h1>
    <hr>
    <!-- 
    js，html,css分离
    -->
    <ul>
      <li v-for="el in newsArr">{{ el }}</li>
    </ul>
    <ul>
      <li v-for="abc in newsArr">{{ abc }}</li>
    </ul>
    <ul>
      <li @click="f2(item)" v-for="item,pos in newsArr">{{ pos+1 }},,,{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let arr = ref(['red','bgpink'])
const f1 = ()=>{
  arr.value.pop();
}
console.log('-=====');
let newsArr = [
  '什么时候下雪1',
  '什么时候下雪2',
  '什么时候下雪3'
]

function f2(item){
  console.log(item);
}
</script>

<style scoped>
  .red{color: red;}
  .bgpink{background-color: pink;}
</style>