<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="操作地址">
      <el-input v-model="formInline.user" placeholder="请输入操作地址" clearable />
    </el-form-item>
    <el-form-item label="系统模块">
      <el-input v-model="formInline.mokuai" placeholder="请输入系统模块" clearable />
    </el-form-item>
    <el-form-item label="操作人员">
      <el-input v-model="formInline.ren" placeholder="请输入操作人员" clearable />
    </el-form-item>
    <el-form-item label="类型" style="text-indent: 2;">
      <el-select
        v-model="formInline.region"
        placeholder="操作类型"
        clearable
      >
        <el-option label="新增" value="xinjiang" />
        <el-option label="修改" value="beijing" />
        <el-option label="删除" value="beijing" />
        <el-option label="授权" value="beijing" />
        <el-option label="导出" value="beijing" />
        <el-option label="导入" value="beijing" />
        <el-option label="强退" value="beijing" />
        <el-option label="生成代码" value="beijing" />
        <el-option label="清空数据" value="beijing" />
        <el-option label="其他" value="beijing" />
      </el-select>
      
    </el-form-item>
    <el-form-item label="状态" style="text-indent: 2em;">
      <el-select
        v-model="formInline.region"
        placeholder="操作状态"
        clearable
      >
        <el-option label="成功" value="shanghai" />
        <el-option label="失败" value="beijing" />
      </el-select>
      
    </el-form-item>
    <el-form-item label="操作时间">
      <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="defaultTime1"
      style="width: 220px;"
    />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button type="default">重置</el-button>
    </el-form-item><br>
    <el-form-item>
      <el-button  type="danger" plain>删除</el-button>
      <el-button type="danger" plain>清空</el-button>
      <el-button  type="warning" plain>导出</el-button>
    </el-form-item>
  </el-form>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    row-key="id"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"  />
    <el-table-column property="id" label="日志编号" />
      
    <el-table-column property="mokuai" label="系统模块"  />
    <el-table-column property="leixing" label="操作类型">
      <el-button  type="warning" plain>生成代码</el-button>
    </el-table-column>
    <el-table-column property="ren" label="操作人员" />
    <el-table-column property="dizhi" label="操作地址" />
    <el-table-column property="zhuangtai" label="操作状态" />
    <el-table-column property="date" label="操作日期" >
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="shijian" label="消耗时间" />
    <el-table-column fixed="right" label="操作" min-width="80">
        <template #default>
          <el-button plain  @click="dialogFormVisible = true" type="text">
            <el-icon><View /></el-icon>详情
          </el-button>
        </template>
      </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" title="操作日志详细" width="60vw">
    <div class="dialog-form" style="width: 100%;  display: flex;flex-wrap: wrap;">
      <p style="width: 50%;"><span>操作模块：</span>代码生成/生成代码</p>
      <p style="width: 50%;"><span>请求地址：</span>/tool/gen/batchGenCode</p>
      <p style="width: 50%;"><span>登录信息：</span>admin/116.169.81.154/河南省</p>
      <p style="width: 50%;"><span>请求方式：</span>Get</p>
      <p style="width: 100%;"><span>操作方法：</span>com.ruoyi.project.tool.gen.controller.GenController.batchGenCode()</p>
      <p style="width: 100%;"><span>请求参数：</span>{"tables":"sys_job_log"}</p>
      <p style="width: 100%;"><span>返回参数：</span>{"msg":"操作成功","code":0}</p>
      <p style="width: 33%;"><span>操作状态：</span>正常</p>
      <p style="width: 33%;"><span>消耗时间：</span>17毫秒</p>
      <p style="width: 33%;"><span>操作时间：</span>2025-01-2015:35:48</p>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div>
    </template>
  </el-dialog>
  <div class="demo-pagination-block">
    
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const formInline = reactive({
  user: '',
  mokuai: '',
  ren: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const value1 = ref('')

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'

import type { TableInstance } from 'element-plus'

interface User {
  id: number
  mokuai: string
  leixing: string
  ren: string
  dizhi: string
  zhuangtai: string
  date: string
  name: string
  shijian: string
}

const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref<User[]>([])

// const selectable = (row: User) => ![1, 2].includes(row.id)
const toggleSelection = (rows?: User[], ignoreSelectable?: boolean) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(
        row,
        undefined,
        ignoreSelectable
      )
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const currentPage4 = ref(4)

const pageSize4 = ref(10)

const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tableData: User[] = [
  {
    id: 1,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',

  },
  {
    id: 2,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
    
  },
  {
    id: 3,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
    
  },
  {
    id: 4,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
    
  },
  {
    id: 5,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
    
  },
  {
    id: 6,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
    
  },
  {
    id: 7,
    mokuai: '代码生成',
    leixing: '生成代码',
    ren: 'admin',
    dizhi: '116.223.222.222',
    zhuangtai: '成功',
    date: '2016-05-03',
    shijian: '0.5秒',
    name: 'Tom',
   
  },
]
import { ElMessage, ElMessageBox } from 'element-plus'
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]

</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
.el-table__cell{
  text-align: center;
}
.el-table-column{
  text-align: center;
}
.dialog-form{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
}
.dialog-form p{
  margin: 10px 0;
}
.dialog-form p span{
  font-weight: bold;
}
</style>