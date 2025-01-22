<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="用户名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="手机号码" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
    <el-form-item label="邮箱" prop="postbox">
      <el-input v-model="ruleForm.postbox" />
    </el-form-item>

    <el-form-item label="性别" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
       <el-radio value="1">男</el-radio>
       <el-radio value="2">女</el-radio>
     </el-radio-group>
   </el-form-item>

    <el-form-item class="mg_left_70">
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        保存
      </el-button>
      <el-button type="danger">关闭</el-button>
    </el-form-item> 

  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const ruleForm = reactive({
  name: '用户名称',
  phone:'17700997277',
  postbox:'7777@qq.com'
})

const rules = reactive({
  name: [
    { required: true, message: '用户昵称不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    { min: 11, max: 11, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  postbox: [
    { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
    { min: 11, max: 11, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  resource: [
  {
    required: true,
    message: 'Please select activity resource',
    trigger: 'change',
  }]
})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped>
.mg_left_70{margin-left: 70px; padding-bottom: 70px;}
.el-form{padding-top:20px;}
</style>