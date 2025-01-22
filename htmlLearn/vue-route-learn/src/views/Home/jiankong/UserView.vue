<template>
  <div>
    <span style="color: #606266;">登录地址</span>&nbsp;
    <el-input
      v-model="input4"
      style="width: 240px"
      placeholder="请输入登录地址"
    >
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>&nbsp;&nbsp;
    <span style="color: #606266;">用户名称</span>&nbsp;
    <el-input
      v-model="input4"
      style="width: 240px"
      placeholder="请输入用户名称"
    >
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>&nbsp;&nbsp;
    <el-button type="primary"  :icon="Search">搜索</el-button>
    <el-button><el-icon><Refresh /></el-icon>清空</el-button>
    <el-table :data="tableData" style="width: 100%" show-overflow-tooltip>
      <el-table-column prop="id" label="序号" />
      <el-table-column prop="huiid" label="会话编号" />
      <el-table-column prop="dlname" label="登录名称" />
      <el-table-column prop="bmname" label="部门名称" />
      <el-table-column prop="zhuji" label="主机" />
      <el-table-column prop="dlplace" label="登录地点" />
      <el-table-column prop="liu" label="浏览器" />
      <el-table-column prop="caozuo" label="操作系统" />
      <el-table-column prop="time" label="登录时间" />
      <el-table-column fixed="right" label="操作" min-width="80">
        <template #default>
          <el-button plain @click="open" type="text">
            <el-icon><DeleteFilled /></el-icon>强退
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const time = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
const tableData = [
  {
    id: 1,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 2,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 3,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 4,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 5,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 6,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 7,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 8,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 9,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 10,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  {
    id: 11,
    huiid: uuid(),
    dlname: 'admin',
    bmname: '研发部门',
    zhuji: '192.168.1.100',
    dlplace: '河南省 洛阳市',
    liu: 'Chrome 11',
    caozuo: 'Windows 10',
    time: time(),
  },
  

]
import { ElMessage, ElMessageBox } from 'element-plus'
import {ref} from 'vue'
import {  Search, } from '@element-plus/icons-vue'
const input4 = ref('')
const open = () => {
  ElMessageBox.confirm(
    '是否确认强退名称为"admin"的用户？',
    '系统提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '强退成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '强退失败',
      })
    })
}
</script>

<style lang="scss" scoped></style>