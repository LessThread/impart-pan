<template>
    <div class="header">
        <img src="../assets/logo_transparent.svg" style="width: 10%;min-width:200px"/>
        <p class="header-title" style="margin: auto">
            <div class="demo-progress">
                <div>
                    容量:{{ usedDiskGB }}GB/{{ allDiskGB }}GB
                </div>
                <el-progress :percentage="ratio" />
              </div>
        </p>
        
    </div>


</template>
<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }


.header{
    width: 100%;
    height: 100px;
    background-color: #213d5b;
    color: #E5EAF3;
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.header-title{

}
</style>


<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';
import {getDisk} from '@/api/api.ts'

export default defineComponent({
    name:'mainHeader',
    setup(){
        const usedDiskGB = ref(0)
        const allDiskGB = ref(0)
        const ratio = ref(0)
        onMounted(()=>{
            getDisk().then(disk =>{
            console.log(disk)
            allDiskGB.value = (disk.all/1024/1024/1024).toFixed(2)
            usedDiskGB.value = (disk.used/1024/1024/1024).toFixed(2)

            ratio.value = ((disk.used/disk.all)*100).toFixed(2)
        })
            
        })

        return{
            ratio,
            allDiskGB,
            usedDiskGB
        }
    
    }

})
</script>