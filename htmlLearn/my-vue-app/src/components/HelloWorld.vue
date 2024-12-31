
<template>
    <div class="home">
      <div class="home1">
        <button  v-for="item, index in btns" :key="index" @click="changeBtn(index)">{{ item }}</button>
        <div v-for="url,index in img2" :key="index">
            <img v-if="i==index" :src="url">
        </div>
      </div>
      <!-- <img v-for="url,index in img2" :key="index" :src="url"> -->
        <el-button-group size="normal">
            <el-button :type="selectIndex == index ? 'primary':'default'" v-for="item, index in btns" :key="index" @click="onchange(index)">美女{{index+1}}
            </el-button>
            <div v-for="url,index in img2" :key="index">
            <img v-if="j==index" :src="url">
            </div>
        </el-button-group>
    </div>
  </template>
  <script setup>
    // let message = "<img src='https://www.baidu.com/img/flexible/logo/pc/result.png' />"
    import {ref,defineProps} from 'vue';
    
    let title=ref("<img src='' />")
    
    let i=ref(0);
    let j=ref(0);
    let btns=ref(["按钮1", "按钮2", "按钮3", "按钮4", "按钮5", "按钮6"]);
    let img2=ref(["https://img.keaitupian.cn/uploads/2020/12/08/273813a415dbe086179ec092b693e8bb.jpg",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.uuMRp41SjL9ukaBDDBWz5wHaNK?rs=1&pid=ImgDetMain",
      "https://ts1.cn.mm.bing.net/th/id/R-C.594767e69dfbbfd7425d830f486e55ea?rik=cTS3TDdKqdmwoA&riu=http%3a%2f%2fimage.yjcf360.com%2fu%2fcms%2fwww%2f201906%2f18085735eczp.jpg&ehk=3mtF5%2f5RNJSALngSKQZO1Upevk6kgsGL7Iqf3RoYh2I%3d&risl=&pid=ImgRaw&r=0",
      "https://n.sinaimg.cn/sinacn10113/332/w1024h1708/20190806/3afd-iatixpm8624881.jpg",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.YG6fFswOSE-wLjDfaGGBoQHaLI?rs=1&pid=ImgDetMain",
      "https://ts1.cn.mm.bing.net/th/id/R-C.e7b6fa3ccab98dffed21f3c8fb7ef041?rik=1ZT24yBMcjugfg&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2018-09%2f18%2f12%2f201809181241196991-5938490.jpg&ehk=UZILipXvG1v2acBfDZuAjnlvcL8TYkmVW9fhC2OhVVc%3d&risl=&pid=ImgRaw&r=0"
    ])
    const changeBtn = function (index) {
      i.value = index;
    }
    const onchange = function (index) {
      j.value = index;
    }
  </script>
  <style>
  .home{
    width: 700px;
    display: flex;
  }
  img{
    width: 300px;
  }
  </style>
  