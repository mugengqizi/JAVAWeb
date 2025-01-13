<template>
  <div class="c1"></div>
  <hr>
  <div class="c2">123</div>
</template>

<script setup>

</script>

<style scoped>
.c1{
  background-color: red;
  height: 100px;
  width: 100%;
  /* transition: width 1s,height 2s; */
  transition: all 2s;
}
.c1:hover{
  width: 400px;
  height: 50px;
}

.c2{
  background-color: pink;
  height: 100px;
  width: 100px;
  transition: all .5s;
}
.c2:hover{
  /* transform: translateX(50px); */
  /* transform: translateY(50px); */
  /* transform: translateY(-50%); */

  /* transform: rotate(720deg); */
  transform: rotateX(45deg);
}
</style>