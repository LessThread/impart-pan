<template>
    <el-card :body-style="{ padding: '0px',width:'200px' }">
        <div style="padding: 20px;background-color: #213d5b;">
        <span style="color: #E5EAF3;">资源1</span>
        <p style="color: #E5EAF3">miaos</p>
        </div>
    </el-card>
</template>
<style scoped>
</style>

<style>
.is-always-shadow{
    margin-top: 10px;
    max-width: 200px !important;
    background-color: #213d5b;
}

.el-card{
    border-color:#6b6d71;
    height: 100px;
    max-height: 300px;
}
</style>


<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';

export default defineComponent({
    name:'displayCard',
    setup(){
        

        return{
        }
    
    }

})
</script>