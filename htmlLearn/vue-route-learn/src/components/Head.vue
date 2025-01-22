<template>
  
  <div class="main-header">
    <el-icon size="30" @click="store.state.collapse = !store.state.collapse">
      <Expand />
    </el-icon>
    <el-dropdown>
    <span class="el-dropdown-link">
      <img src="../imgs/touxiang.png" width="50px" height="50px" alt="">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item><router-link to="/Head/geren" style="color: #606266;text-decoration: none;">个人中心</router-link></el-dropdown-item>
        <el-dropdown-item>布局设置</el-dropdown-item>
        <hr>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>

</template>

<script setup>
import { useStore } from 'vuex';
import { ArrowDown } from '@element-plus/icons-vue'
import { RouterLink,RouterView } from 'vue-router';
const store = useStore();
</script>

<style scoped>
.main-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>