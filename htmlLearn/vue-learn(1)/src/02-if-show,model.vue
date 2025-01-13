<template>
  <button @click="isShow=!isShow">控制显示/隐藏{{ isShow }}</button>
  <h1 v-if="isShow">贾宝玉<b>111</b></h1>
  <hr>
  <!-- display:none,block -->
   <!-- 
    频繁切换，用v-show
    不频繁，if
   -->
  <h1 v-show="isShow">薛宝钗<b>111</b></h1>
  <hr>
  <h1>form绑定</h1>
  <input type="text" v-model="uname"> {{ uname }}
  <button @click="getInfo">读取uname</button>
  <hr>
  <input type="radio" value="1" v-model="sex"> 男
  <input type="radio" value="2" v-model="sex"> 女- {{ sex }}
  <hr>
  爱好：
  <input type="checkbox" value="1" v-model="likeArr"> 苹果
  <input type="checkbox" value="2" v-model="likeArr"> 西瓜
  <input type="checkbox" value="3" v-model="likeArr"> 柠檬
  <hr>
  {{  likeArr }} 
</template>
  
<script setup>
import { ref } from 'vue';

let isShow = ref(false)
console.log('=====');

let uname = ref('');

uname.value='guest';
function getInfo(){
  console.log(uname.value);
}
console.log('=====');
let sex = ref('1')
console.log('<<<<<<<<<<<<<<');
let likeArr = ref(['2','3'])
</script>

<style lang="scss" scoped>

</style>