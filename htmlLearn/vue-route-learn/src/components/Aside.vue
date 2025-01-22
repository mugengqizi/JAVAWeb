<template>
  <div>
    <el-scrollbar height="100vh">
    <el-col :span="24">
      <!-- <h5 class="mb-2">Custom colors</h5> -->
      <el-menu active-text-color="#409eff" background-color="#304156" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" 
        @open="handleOpen" @close="handleClose" 
        @select="changeSidebar"
        :collapse="store.state.collapse " router
        collapse-transition="true">
        <el-menu-item >
          <el-icon>
            <setting />
          </el-icon>
          <span>后台管理系统</span>
        </el-menu-item>
        <el-menu-item index="/Home/shouye">
          <el-icon>
            <Odometer />
          </el-icon>
          <span>首页</span> 
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <Setting />
            </el-icon>
            <span>系统管理</span>
          </template>
          <div class="bg2">
      
              <el-menu-item index="/guanli/user">
                <el-icon>
                  <UserFilled />
                </el-icon>
                <span>用户管理</span>

              </el-menu-item>
            
            <el-menu-item index="/guanli/role">
              <el-icon>
                <Avatar />
              </el-icon>
              <span>角色管理</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <el-icon>
                <Menu />
              </el-icon>
              <span>菜单管理</span></el-menu-item>
            <el-menu-item index="/guanli/dept">
              <el-icon>
                <Histogram />
              </el-icon>
              <span>部门管理</span>
            </el-menu-item>
            <el-menu-item index="1-5">
              <el-icon>
                <Grid />
              </el-icon>
              <span>岗位管理</span></el-menu-item>
            <el-menu-item index="/guanli/zidian">
              <el-icon>
                <HelpFilled />
              </el-icon>
              <span>字典管理</span></el-menu-item>
            <el-menu-item index="1-7">
              <el-icon>
                <Edit />
              </el-icon>
              <span>参数设置</span></el-menu-item>
            <el-menu-item index="1-8">
              <el-icon>
                <ChatDotSquare />
              </el-icon>
              <span>通知公告</span>
            </el-menu-item>
            <el-sub-menu index="/Home/rizhi">
              <template #title>
                <el-icon>
                  <EditPen />
                </el-icon>
                <span>日志管理</span>
              </template>
              <el-menu-item index="/Home/rizhi/caozuo">
                <el-icon>
            <setting />
          </el-icon>操作日志</el-menu-item>
              <el-menu-item index="2-1-2">
                <el-icon>
            <setting />
          </el-icon>登录日志</el-menu-item>
            </el-sub-menu>
          </div>
        </el-sub-menu>
        <el-sub-menu index="/Home/jiankong">
          <template #title>
            <el-icon>
            <setting />
          </el-icon><span>系统监控</span></template>
          <el-menu-item index="/Home/jiankong/user">
            <el-icon>
            <setting />
          </el-icon >在线用户</el-menu-item>
          <el-menu-item index="4-2">
            <el-icon>
            <setting />
          </el-icon>定时任务</el-menu-item>
          <el-menu-item index="4-3">
            <el-icon>
            <setting />
          </el-icon>数据监控</el-menu-item>
          <el-menu-item index="4-4">
            <el-icon>
            <setting />
          </el-icon>服务监控</el-menu-item>
          <el-menu-item index="4-5">
            <el-icon>
            <setting />
          </el-icon><span>缓存监控</span></el-menu-item>
          <el-menu-item index="4-6">
            <el-icon>
            <setting />
          </el-icon>缓存列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
            <setting />
          </el-icon>
        <span>系统工具</span></template>
          <el-menu-item index="5-1">
            <el-icon>
            <setting />
          </el-icon>表单构建</el-menu-item>
          <el-menu-item index="5-2">
            <el-icon>
            <setting />
          </el-icon>代码生成</el-menu-item>
          <el-menu-item index="5-3">
            <el-icon>
            <setting />
          </el-icon>系统接口</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="6">
          <el-icon>
            <setting />
          </el-icon><span>若依官网</span></el-menu-item>
      </el-menu>
    </el-col>
  </el-scrollbar>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Edit, HelpFilled, Grid, Menu, UserFilled, Avatar, Odometer, Document, Menu as IconMenu, Location, Setting, } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
const store = useStore();
function changeSidebar(path) {
  this.$router.push(path);
}



</script>

<style scoped>
.el-menu{
  height: 100%;
  min-height: 100vh;
}
.bg2 {
  background-color: #1f2d3d;
}
</style>