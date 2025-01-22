<template>
  <div class="container">
    <el-row>
      <el-col :span="5">
        <el-card style="max-width: 480px">
          <template #header>
            <div class="card-header">
              <span>个人信息</span>
            </div>
          </template>
          <div style="height: 100px; text-align: center;vertical-align: middle;"><img src="../../imgs/touxiang.png "
              alt=""></div>
          <hr>
          <p>用户名称</p>
          <hr>
          <p>用户名称</p>
          <hr>
          <p>手机号码</p>
          <hr>
          <p>用户邮箱</p>
          <hr>
          <p>所属部门</p>
          <hr>
          <p>所属角色</p>
          <hr>
          <p>创建日期</p>
          <template #footer></template>
        </el-card>
      </el-col>
      <el-col :span="17" style="margin-left: 20px">
        <el-card style="max-width: 750px">
          <template #header>
            <div class="card-header">
              <span>基本资料</span>
            </div>
          </template>
          
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="基本资料" name="first">
                <baerinfo></baerinfo>
              </el-tab-pane>
              <el-tab-pane label="修改密码" name="second">
                <mima></mima>
              </el-tab-pane>
            </el-tabs>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import  baerinfo  from "./base/baerinfo.vue"
import mima from "./base/mima.vue"
</script>

<style scoped>
.container {
  padding: 20px;
  width: 100vw;
}

p {
  padding: 10px;
  height: 20px;
}
</style>