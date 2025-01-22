<template>

  <body>
    <div class="lingqu" style="background-color: #eeeeee;">
      <div class="lingqu-in" style="background-color: #ffffff;">
        <p class="ye">领取阿里云通用云产品1888优惠券</p>
        <a
          href="https://www.aliyun.com/minisite/goods?userCode=brki8iof">https://www.aliyun.com/minisite/goods?userCode=brki8iof</a>
        <p class="ye">领取腾讯云通用云产品2860优惠券</p>
        <a
          href="https://cloud.tencent.com/redirect.php?redirect=1025&cps key=198c8df2ed259157187173bc7f4f32fd&from=console">https://cloud.tencent.com/redirect.php?redirect=1025&cps
          key=198c8df2ed259157187173bc7f4f32fd&from=console</a>
        <p class="ye">阿里云服务器折扣区<a href="https://www.aliyun.com/minisite/goods?userCode=brki8iof">点我进入</a>腾讯云服务器秒杀区<a
            href="https://www.aliyun.com/minisite/goods?userCode=brki8iof">点我进入</a></p>
        <p class="ye" style="color: #ed5565;">云产品通用红包，可叠加官网常规优惠使用。（仅限新用户）</p>
        <br>
      </div>
    </div>
    <br>
    <hr>
    <div class="jieshao">
      <div class="left">
        <p class="head">
          若依后台管理框架
        </p>
        <p>一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。于是利用空闲休
          息时间开始自己写一套后台系统。如此有了若依管理系统，她可以用于所有的Wb应用程序，如网
          站管理后台，网站会员中心，CMS,CRM,OA等等，当然，您也可以对她进行深度定制，以做出
          更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。同时支持移动客户端访问。
          系统会陆续更新一些实用功能。</p><br>
        <p><span style="font-weight: bold;">当前版本：</span>v3.8.9</p>
        <el-button type="danger" plain>￥免费开源</el-button><br>
        <el-button type="primary" plain>访问码云</el-button>
        <el-button plain>访问主页</el-button>
      </div>
      <div class="right">
        <p class="head">
          技术选型
        </p>
        <div class="jishu">
          <div class="houduan">
            <p>后端技术<br /><br />SpringBoot<br />Spring Security<br />JWT<br />MyBatis<br />Druid<br />Fastjson<br />...
            </p>
          </div>
          <div class="qianduan">
            <p>前端技术<br /><br />Vue<br />Vuex<br />Element-ui<br />Axios<br />Sass<br />Quill<br />...</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content  demo-border">
            <p>联系信息</p>
            <hr>
            <p><el-icon><Promotion /></el-icon><span>官网：</span>
              <a href="http://www.ruoyi.vip">http://www.ruoyi.vip</a></p>
            <p class="qun"><el-icon><UserFilled /></el-icon>QQ群： <del>满937441 满887144332 满180251782
              满104180207 满186866453 满201396349 满<br/>101456076 满101539465 满264312783 满167385320 满104748341 满160110482 满170801498 满108482800 满101046199 满136919097 满143961921 满174951577 满161281055 满138988063</del>
              &nbsp;
              <a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SUc-msaypcqB2UTFif4eqGlBHkKcvMNP&authKey=JdQBouY2PG%2BS%2BCzAfIgbCGNgxyahpfh24IW%2F03rPxGilhqVbisLma%2FFFnt79DHNh&noverify=0&group_code=151450850">151450850</a>
            </p>
            <p> <el-icon><ChatDotRound /></el-icon>微信：/ *若依</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple demo-border">
            <p>更新日志</p>
            <hr>
            
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple demo-border">
            <p>捐赠支持</p>
            <hr>
            <p>你可以请作者喝杯咖啡表示鼓励</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </body>



</template>

<script setup>
import { ref } from 'vue'


const radiusGroup = ref([
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
])

const tableData = [
  {
    address: 'No. 189, Grove St, Los Angeles',
  },
  
]
</script>

<style scoped>
.lingqu {
  width: 90%;
}

.lingqu-in {
  margin-left: 5px;
  padding-left: 17px;
}

.lingqu-in a {
  line-height: 20px;
  color: #46a6ff;
  font-size: 14px;
  text-decoration: none;
}

.ye {
  font-size: 14px;
  color: #f8b061;
}

body hr {
  border: 1px solid #eeeeee;
}

.jieshao {
  margin: 20px 0 0 15px;
  display: flex;

  color: #676a6c;
}

.jieshao p {
  font-size: 13px;
}

.jieshao .left {
  width: 50%;
}

.jieshao .left .el-button {
  width: 80px;
  height: 28px;
  margin-top: 10px;
}

.jieshao .right {
  margin-left: 30px;
}

.jieshao .right .jishu {
  display: flex;
}

.jieshao .right .jishu .houduan {
  margin-right: 30px;
}

.jieshao .head {
  font-weight: 10;
  font-size: 25px;
  margin-bottom: 15px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  color: #000;
}
.grid-content p {
  margin: 12px 0 0 12px;
  font-size: 14px;
}
.grid-content p a{
  color: #000;
  text-decoration: none;
}
.grid-content p .qun a{
  color: #000;
  text-decoration: none;
}
.demo-border {
  width: 100%;
  border: 1px solid var(--el-border-color);
}
</style>