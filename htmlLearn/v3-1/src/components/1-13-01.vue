<template>
  <div class="tc p2">
    <h1>图书管理</h1>
    <div class="zongbiao">
      <div class="by">
        <p class="tl fw">添加</p>
        <p class="tl">
          编号：<input type="number" id="id" v-model="bookid">
          名称：<input type="text"  id="title" v-model="booktitle">
          <button @click="store.commit('addBook',{id:bookid,title:booktitle,date:date})">提交</button>
        </p>
        <p class="tc bg">图书总数：{{ store.state.books.length }}</p>
        <table>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
          <tr class="tb" v-for="item,index in store.state.books" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.date}}</td>
            <td><button @click="store.state.books.splice(index,1)">删除</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import {useStore} from 'vuex';
import {format} from 'date-fns';
const store = useStore();
let bookid = ref(document.getElementById('id'));
let booktitle = ref(document.getElementById('title'));

let date= ref(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
</script>

<style scoped>
.tl {
  text-align: left;
}

.p2 {
  width: 530px;
}

.fw {
  font-weight: bold;
}

.tc {
  text-align: center;
}

.bg {
  border: 1px solid #ced99e;
}

.by {
  background-color: #f3dcab;
}

.zongbiao table {
  width: 100%;
  border-collapse: collapse;
}

.zongbiao table td,
.zongbiao table th {
  text-align: center;
  vertical-align: middle;
  border: 1px dashed #ced99e;
}
.tb{
  background-color: #ffffff;
}
</style>