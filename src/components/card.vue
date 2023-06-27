<template>
    <el-card :body-style="{ padding: '0px',width:'200px' }">
        <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
        />
        <div style="padding: 20px;background-color: #213d5b;">
        <span style="color: #E5EAF3;">Yummy hamburger</span>
        </div>
    </el-card>
</template>
<style scoped>
</style>

<style>
.is-always-shadow{
    margin-top: 10px;
    max-width: 200px !important;
}

.el-card{
    border-color:#6b6d71;
    height: 300px;
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