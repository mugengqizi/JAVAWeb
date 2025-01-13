<template>
  <div>
    <button @click="clickHandler">dianji</button>
    <button @click="status">播放器状态</button>
    <button @click="subscribe">订阅播放器状态</button>
    <App1 />
    <App2 />
  </div>
</template>

<script setup>
import axios from 'axios';

let instance = axios.create({
				baseURL: 'http://127.0.0.1:23330',
				timeout: 2000
			})
function clickHandler() {
    instance.get('/lyric')
      .then(res=>{
					console.log(res.data);
				},err=>{
					console.log(err);
			})
}
function status(){
  instance.get('/status')
   .then(res=>{
      console.log(res.data);
      },err=>{
        console.log(err);
        })
      }
function subscribe(){
  instance.get('/subscribe-player-status')
   .then(res=>{
      console.log(res.data);
      },err=>{
        console.log(err);
        })
}
</script>

<style lang="scss" scoped>

</style>