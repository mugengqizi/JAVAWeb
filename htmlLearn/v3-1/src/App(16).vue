<template>
  <div class="app tc">
    <h1>张三的商品</h1>
    <table>
      <tr v-for="(item, id) in goods" :key="id">
        <td><img :src="item.img" alt=""></td>
        <td>{{item.name}}</td>
        <td>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <el-icon @click="jian(item.id)" style="cursor: pointer;background-color: gray;padding: 5px;color: white;"><Minus /></el-icon>
            <el-input v-model="item.num" style="width: 40px" placeholder="0"/>
            <el-icon @click="jia(item.id)" style="cursor: pointer;background-color: gray;padding: 5px;color: white;"><Plus /></el-icon>
            <el-icon :size="30" class="del" @click="del(item.id)"><Close /></el-icon>
          </div>
        </td>
      </tr>
    </table>
  <!--结算-->
    <div style="width: 100%;text-align: right;background-color: #FFCE46;padding: 10px;margin-top: 20px;color: red">
      总价：{{price}}
      <el-button type="primary" style="padding: 10px 20px">结算</el-button>
    </div>
  </div>
</template>

<script setup>
import {ref, watchEffect} from "vue";
const goods = ref([
  {id:1, name:"TLC彩电", price: 1000,img:"https://img2.baidu.com/it/u=172996744,3703922214&fm=253&fmt=auto&app=138&f=JPEG",num:1},
  {id:2, name:"机顶盒", price: 1000,img:"https://img0.baidu.com/it/u=924157049,2065903280&fm=253&fmt=auto&app=120&f=JPEG?w=1423&h=800",num:1},
  {id:3, name:"海尔冰箱", price: 1000,img:"https://bj.bcebos.com/bjh-pixel/1697523186640064511_1_ainote_new.jpg",num:1 },
  {id:4, name:"小米手机", price: 1000,img:"https://img0.baidu.com/it/u=2359846408,1353584908&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500",num:1 },
  {id:5, name:"PPTV电视", price: 1000,img:"https://img0.baidu.com/it/u=103546663,2840268906&fm=253&fmt=auto&app=120&f=JPEG",num:1 }
]);

let price = ref(0);

function jian(id) {
  for (let i = 0; i < goods.value.length; i++) {
    if (goods.value[i].id === id) {
      if (goods.value[i].num > 1) {
        goods.value[i].num--;
      }else{
        del(id)
      }
      break; // 找到并更新后可以退出循环
    }
  }
}

function jia(id) {
  console.log("==================");
  console.log(id);
  for (let i = 0; i < goods.value.length; i++) {
    if (goods.value[i].id === id) {
      goods.value[i].num++;
      break;
    }
  }
}
watchEffect(() => {
  let sum = 0;
  for (let i = 0; i < goods.value.length; i++) {
    sum += goods.value[i].price * goods.value[i].num;
  }
  price.value = sum;
})
// 删除商品
function del(id) {
  let flag = confirm("是否删除该商品？")
  if (flag) {
    for (let i = 0; i < goods.value.length; i++) {
      if (goods.value[i].id === id) {
        goods.value.splice(i, 1);
        break;
      }
    }
  }
}
</script>

<style scoped>
.app{
  width: 350px
}
h1{
  background-color: #ADD8E6;
  padding: 20px;
}
.tc{
  text-align: center;
}
table{
  width: 100%;
  border-collapse: collapse;
}
td img{
  width: 100px;
  height: 50px;
  object-fit: cover;
}
.del{
  cursor: pointer;
}
.del:hover{
  color: red;
  background-color: #FFA500;
}
</style>