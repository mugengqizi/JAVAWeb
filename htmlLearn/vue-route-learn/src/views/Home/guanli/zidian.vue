<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
     <el-form-item label="字典名称">
         <el-input v-model="formInline.name" placeholder="请输入字典名称" clearable />
     </el-form-item>
     <el-form-item label="字典类型">
         <el-input v-model="formInline.type" placeholder="请输入字典类型" clearable />
     </el-form-item>
     <el-form-item label="状态">
         <el-select v-model="formInline.state" placeholder="字典状态" clearable>
             <el-option label="正常" value="1" />
             <el-option label="禁用" value="0" />
         </el-select>
     </el-form-item>
     <el-form-item label="创建时间" style="width: 300px;">
         <el-date-picker
         v-model="value1"
         type="daterange"
         range-separator="-"
         start-placeholder="开始日期"
         end-placeholder="结束日期"
         :size="size"/>
     </el-form-item>
     <el-form-item>
         <el-button type="primary" :icon="Search" @click="onSubmit">搜索</el-button>
         <el-button  :icon="Refresh" @click="inSubmit()">重置</el-button>
     </el-form-item>
  </el-form>



 <el-button type="primary" plain :icon="Plus" @click="add">新增</el-button>
 <el-button type="success" disabled plain :icon="EditPen">修改</el-button>
 <el-button type="danger" disabled plain :icon="Delete">删除</el-button>
 <el-button type="warning" plain :icon="Download">导出</el-button>
 <el-button type="danger" plain :icon="Refresh">刷新缓存</el-button>
 <el-table :data="tableData" style="width: 100%;" row-key="id" >
     <el-table-column type="selection" :selectable="selectable" width="55" />
     <el-table-column label="字典编号" width="174px">
         <template #default="scope">
             <span>{{ scope.row.id }}</span>
         </template>
     </el-table-column>
     <el-table-column label="字典名称" width="174">
         <template #default="scope">
             <span >{{ scope.row.name }}</span>
         </template>
     </el-table-column>
     <el-table-column label="字典类型" width="174">
         <template #default="scope">
             <span>{{ scope.row.type }}</span>
         </template>
     </el-table-column>
     <el-table-column label="状态" width="174">
         <template #default="scope" > 
             <el-tag>{{ scope.row.state }}</el-tag>
         </template>
     </el-table-column>
     <el-table-column label="备注" width="174">
         <template #default="scope">
             <span >{{ scope.row.descr }}</span>
         </template>
     </el-table-column>
     <el-table-column label="创建时间" width="174">
         <template #default="scope">
             <span>{{ scope.row.date }}</span>
         </template>
     </el-table-column>
     <el-table-column label="操作">
         <template #default="scope">
             <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                 修改
             </el-button>
             <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                 删除
             </el-button>
         </template>
     </el-table-column>
 </el-table>

 <!-- 编辑对话框 -->
 <el-dialog v-model="dialogVisible" title="修改字典信息" width="30%">
     <el-form :model="editForm" :rules="editRules" ref="editFormRef" label-width="80px">
         <el-form-item label="字典名称" prop="name">
             <el-input v-model="editForm.name" />
         </el-form-item>
         <el-form-item label="字典类型" prop="type">
             <el-input v-model="editForm.type" />
         </el-form-item>
         <el-form-item label="状态" prop="state">
             <el-radio-group v-model="editForm.state">
                 <el-radio label="正常">正常</el-radio>
                 <el-radio label="禁用">禁用</el-radio>
             </el-radio-group>
         </el-form-item>
         <el-form-item label="备注" prop="descr">
             <el-input v-model="editForm.descr" type="textarea"/>
         </el-form-item>
     </el-form>
     <template #footer>
         <span class="dialog-footer">
             <el-button @click="dialogVisible = false">取消</el-button>
             <el-button type="primary" @click="submitEditForm">保存</el-button>
         </span>
     </template>
 </el-dialog>
 <!-- 页脚 -->
 <div class="demo-pagination-block">
 <el-pagination
   :page-sizes="[10, 20, 30, 40]"
   :size="size"
   :disabled="disabled"
   :background="background"
   layout="total, sizes, prev, pager, next, jumper"
   :total='50'
 />
</div>

</template>

<script setup>
import { ref,reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'

import {
 Plus,Delete,EditPen,Refresh,Download,Search
} from '@element-plus/icons-vue'

const formInline = reactive({
name: '',
type:'',
state:'',
date: '',
})
const onSubmit = () => {
console.log('submit!')
}
const inSubmit = (formEl) => {

}

const dialogVisible = ref(false);
const editForm = reactive({
 id: 0,
 name: '',
 type: '',
 state: '',
 descr: '',
});
const editFormRef = ref(null);
const editRules = reactive({
 name: [
     { required: true, message: '字典名称不能为空', trigger: 'blur' },
 ],
 type: [
     { required: true, message: '字典类型不能为空', trigger: 'blur' },
 ],
 state: [
     { required: true, message: '状态不能为空', trigger: 'change' },
 ],
 descr: [
     { required: true, message: '备注不能为空', trigger: 'blur' },
 ],
});
const add=()=>{
 editForm.id = '';
 editForm.name = '';
 editForm.type = '';
 editForm.state = '';
 editForm.descr = '';
 dialogVisible.value = true;
}
const handleEdit = (index, row) => {
 console.log(index,row)
 editForm.id = row.id;
 editForm.name = row.name;
 editForm.type = row.type;
 editForm.state = row.state;
 editForm.descr = row.descr;
 dialogVisible.value = true;
}
const handleDelete = (index, row) => {
 console.log(index, row)

 ElMessageBox.confirm(
 '是否确认删除字典编号为'+row.id+'的数据项？',
 '系统提示',
 {
   confirmButtonText: '确定',
   cancelButtonText: '取消',
   type: 'warning',
 }
)
 .then(() => {
   ElMessage({
     type: 'success',
     message: '删除成功',
   })
 })
 .catch(() => {
   ElMessage({
     type: 'info',
     message: '删除失败',
   })
 })
}

const tableData=ref([
 {
     id: 1,
     name: '用户性别',
     type:'sys_user_sex',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-03',
 },
 {
     id: 2,
     name: '菜单状态',
     type:'sys_show_hide',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-02',
     
 },
 {
     id: 3,
     name: '系统开关',
     type:'sys_normal_disable',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-04',
    
 },
 {
     id: 4,
     name: '任务状态',
     type:'sys_job_status',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-01',
 },
 {
     id: 5,
     name: '用户性别',
     type:'sys_user_sex',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-03',
 },
 {
     id: 6,
     name: '菜单状态',
     type:'sys_show_hide',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-02',
     
 },
 {
     id: 7,
     name: '系统开关',
     type:'sys_normal_disable',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-04',
    
 },
 {
     id: 8,
     name: '任务状态',
     type:'sys_job_status',
     state:'正常',
     descr:'用户性别列表',
     date: '2016-05-01',
 },
]) 
</script>
<style setup>
.demo-form-inline .el-input {
--el-input-width: 220px;
}

.demo-form-inline .el-select {
--el-select-width: 220px;
}
.el-table .cell{text-align: center;}
.el-table-column{text-align: center;}
.demo-pagination-block{text-align: center;}
.el-pagination{justify-content: right; margin-top: 20px;}
</style>