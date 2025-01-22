<template>
  <el-container>
      <el-aside  width="auto" height="100vh">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Head/>
        </el-header>
        <el-main>
          <el-scrollbar height="85vh">
          <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import Aside from '@/components/Aside.vue';
import Head from '@/components/Head.vue';
</script>

<style  scoped>
.el-aside {
  max-width: 200px;
}
</style>