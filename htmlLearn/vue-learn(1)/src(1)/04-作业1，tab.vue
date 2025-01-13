<template>
  <div class="tab">
    <ul class="nav">
      <li @click="index=0" :class="{active:index==0}">水果</li>
      <li @click="index=1" :class="{active:index==1}">动物</li>
    </ul>
    <div>
      <ul :class="{active:index==0}">
        <li>苹果</li>
        <li>香蕉</li>
        <li>橘子</li>
      </ul>
      <ul :class="{active:index==1}">
        <li>蜥蜴</li>
        <li>青蛙</li>
        <li>蛇</li>
      </ul>
    </div>
   
  </div>
</template>

<script setup>
import { ref } from 'vue';

let index = ref(1);

</script>

<style scoped>
*{padding: 0;margin: 0;}
.tab ul{list-style: none;overflow: hidden;}
.tab .nav li{float: left;padding: 10px 20px;}
.tab .nav li.active{color: red;}
.tab .nav li.active{color: red;}
.tab div ul{display: none;}
.tab div ul.active{display: block;}
</style>