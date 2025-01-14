<template id="app">
  <div :class="{container:true, start:flag==0,mid:flag==1,end:flag==2}">
    <span>{{ title[flag] }}</span>
    <hr>
    <div class="bg shouye" name="shouye" v-if="flag==0"><br><br>
      <span>打水杯游戏</span><br><br>
      <button @click="flag=1,startTimer()">开始游戏</button>
    </div>
    <div class="bg game" name="game" v-else-if="flag==1&&blood>0">
      <span class="time">{{ ti1 }}</span>
      <img src="./imgs/game.png" alt="" 
      @click="blood-=10">
      <div class="blackblood">
        <div class="blood" :style="{width: blood+'%'}">
        </div>
      </div>
      <button @click="flag=0, blood=100">回到首页</button>
    </div>
    <div class="bg end" name="end" v-else-if="flag==2||blood<=0">
      <img src="./imgs/end.png" alt="">
      <p>用时：{{ ti2 }}</p>
      <button @click="flag=0, blood=100">重新开始</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flag = ref(0)
const title= ref(["首页","游戏页面","游戏结束页"])
const blood = ref(100)
let timer;
let time = ref(0)
let sec=ref(0)
let ti1=ref('')
let ti2=ref('')
function startTimer(){
    clearInterval(timer)
    time.value=0
    timer=setInterval(() => {
    time.value++
    judge()
    if(blood.value<=0){
      clearInterval(timer)
    }
  }, 1000)
}
function judge(){
  if(time.value<10){
    ti1.value='00:0'+time.value
    ti2.value=time.value+'秒'
  }else if(time.value<60){
    ti1.value='00:'+time.value
    ti2.value=time.value+'秒'
  }else{
    ti1.value='0'+parseInt(time.value/60)+':'+time.value%60
    ti2.value=parseInt(time.value/60)+'分'+time.value%60+'秒'
  }
}

</script>

<style >
.bg{
  width: 100%;
  height: 100%;
  background-color: #f1f0f0;
}
.container{
  text-align: center;
}
.container span{
  font-size: 20px;
}
.shouye span{
  font-size: 30px;
}
.shouye button{
  color: #fff;
  background-color: #007bff;
  border-radius: 20px;
  font-size: 60px;
  width: 400px;
  height: 100px;
}
.time{
  display: block;
  font-size: 20px;
  text-align: right;
  margin:0 30px 20px 0;
  padding-top: 20px;
}
.game button{
  color: #fff;
  background-color: #007bff;
  margin-top: 60px;
  border-radius: 4px;
  font-size: 20px;
  width: 100px;
  height: 30px;
}
.blackblood{
  width: 280px;
  height: 20px;
  padding: 5px;
  margin: 50px auto 0;
  background-color: black;
}
.blood{
  height: 100%;
  background-color: red;
}
.end img{
  padding-top: 30px;
}
.end p{
  font-size: 20px;
  padding-top: 20px;
}
.end button{
  color: #fff;
  background-color: #007bff;
  margin-top: 60px;
  border-radius: 4px;
  font-size: 20px;
  width: 100px;
  height: 30px;
}
.start{
  width: 500px;
  height: 300px;
}
.mid{
  width:320px;
  height: 500px;
}
.end{
  width: 200px;
  height: 540px;
}
</style>