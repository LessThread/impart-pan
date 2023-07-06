<template>
    <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#18222c"
            text-color="#E5EAF3"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>没什么用的侧栏</span>
              </template>
              <el-menu-item-group title="没什么用的子栏">
                <el-menu-item index="1-1">没什么用的子栏1</el-menu-item>
                <el-menu-item index="1-2">没什么用的子栏2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="也没什么用的子栏">
                <el-menu-item index="1-3">没什么用的子栏3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>还是没什么用的子栏</template>
                <el-menu-item index="1-4-1">没什么用的子栏4</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>不知道要干嘛</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>放在这里就行</span>
            </el-menu-item>
            <el-menu-item index="4" >
              <el-icon><setting /></el-icon>
              <upload/>
            </el-menu-item>
          </el-menu>
        </el-col>
    </el-row>
  </template>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>


<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';
import {Document,Menu as IconMenu,Location,Setting,} from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import upload from '@/views/upload.vue'

export default defineComponent({
    name:'mainSidebar',
    components:{
      upload
    },
    setup(){
        
        const isCollapse = ref(true)
        const handleOpen = (key, keyPath) => {
          console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
          console.log(key, keyPath)
        }

        
        return{
            handleOpen,
            handleClose,
            isCollapse
        }
    
    }

})
</script>