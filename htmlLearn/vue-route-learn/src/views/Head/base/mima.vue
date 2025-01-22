<template>
  <el-form
  ref="ruleFormRef"
  style="max-width: 600px"
  :model="ruleForm"
  status-icon
  :rules="rules"
  label-width="auto"
  class="demo-ruleForm">

  <el-form-item label="旧密码" prop="passold" >
    <el-input v-model="ruleForm.passold" type="password" autocomplete="off" placeholder="请输入旧密码"/>
  </el-form-item>
  <el-form-item label="新密码" prop="pass" >
    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入新密码"/>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input
      v-model="ruleForm.checkPass"
      type="password"
      autocomplete="off"
       placeholder="请确定新密码"
    />
  </el-form-item>

  <el-form-item class="mg_left_70">
    <el-button type="primary" @click="submitForm(ruleFormRef)">
      保存
    </el-button>
    <el-button @click="resetForm(ruleFormRef)">关闭</el-button>
  </el-form-item>
  </el-form>
</template>

<script setup>

import { reactive, ref } from 'vue'
const ruleFormRef = ref()

const validatePassold = (rule, value, callback) => {
if (value === '') {
  callback(new Error('旧密码不能为空'))
} else {
  if (ruleForm.checkPass !== '') {
    if (!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
  }
  callback()
}
}
const validatePass = (rule, value, callback) => {
if (value === '') {
  callback(new Error('新密码不能为空'))
} else {
  if (ruleForm.checkPass !== '') {
    if (!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
  }
  callback()
}
}
const validatePass2 = (rule, value, callback) => {
if (value === '') {
  callback(new Error('确定密码不能为空'))
} else if (value !== ruleForm.pass) {
  callback(new Error("两次输入的密码不一致"))
} else {
  callback()
}
}

const ruleForm = reactive({
passold:'',
pass: '',
checkPass: ''
})

const rules = reactive({
passold:[{ validator: validatePassold, trigger: 'blur'}],
pass: [{ validator: validatePass, trigger: 'blur' }],
checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl) => {
if (!formEl) return
formEl.validate((valid) => {
  if (valid) {
    console.log('submit!')
  } else {
    console.log('error submit!')
  }
})
}

const resetForm = (formEl) => {
if (!formEl) return
formEl.resetFields()
}
</script>

<style  scoped>
.el-form{padding-top:20px;}
.mg_left_70{margin-left: 70px;padding-bottom: 70px;}
</style>