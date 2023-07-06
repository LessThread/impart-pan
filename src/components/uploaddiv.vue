<template>
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>

    <div>
        手动上传
    </div>
    <el-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary">选择文件</el-button>
    </template>

    <el-button class="ml-3" type="success" @click="submitUpload">
      确认上传
    </el-button>

    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
  
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
uploadRef.value!.submit()
}
</script>