<template>
  <div>

  </div>
</template>

<script setup>
f1()
async function f1() {
  let a=await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    },1000)
  })
  console.log(a)
}

</script>

<style  scoped>

</style>