<template>
  <div >
    <div class="Title">请发表对VUE的评论</div>
    <div class="container">
      <div class="add">
      <span>用户名：</span><br>
      <input type="text" v-model="username" placeholder="用户名"><br>
      <span>评论内容：</span><br>
      <textarea v-model="comment" placeholder="评论内容"></textarea>
      <button @click="addComment">提交</button>
    </div>
    
    <div class="list">
      <span>评论回复：</span><br>
      <div class="comment-list">
        <div class="item" v-for="item,index in comments" :key="index">
        <span>{{ item.username }}说：</span>
        <p>{{ item.comment }}</p>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const comment = ref('')
const comments = ref([])
function addComment() {
  comments.value.push({
    username: username.value,
    comment: comment.value
  })
  username.value = ''
  comment.value = ''
}
</script>

<style scoped>

.Title {
  width: 1000px;
  height: 100px;
  font-size: 40px;
  color: #3e3e3e;
  background-color: #eeeeee;
}
.container {
  margin-top: 20px;
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
}
.add{
  width: 300px;
}
.add input{
  margin: 5px 0 10px 0;
  width: 90%;
}
.add textarea{
  margin: 5px 0 10px 0;
  width: 90%;
  height: 200px;
}
.list{
  width: 700px;
  height: 350px;
  color: #9294a2;
}
.list .comment-list{
  text-align: left;
  height: 100%;
  overflow: scroll;
}
.list .comment-list .item{
  border:3px solid #f2f2f2;
  padding: 10px;
}
.list .comment-list .item p{
  text-indent: 2em;
}
</style>