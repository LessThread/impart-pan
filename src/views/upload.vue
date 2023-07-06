<template>
    <span text @click="dialogVisible = true">
      上传文件
    </span>
  
    <el-dialog
      v-model="dialogVisible"
      title="文件上传"
      width="60%"
      :before-close="handleClose"
    >
      <span>自动上传</span>
      <uploaddiv/>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>

  import { ref } from 'vue'
  import { ElMessageBox } from 'element-plus'
  import uploaddiv from '@/components/uploaddiv.vue'
  
  const dialogVisible = ref(false)
  
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定退出文件上传吗？')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }
  </script>


  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>