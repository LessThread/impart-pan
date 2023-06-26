<template>
    <div class="header">
        <img src="../assets/logo_transparent.svg" style="width: 10%;"/>
        <p class="header-title" style="margin: auto">
            TJU-ImpartPan
        </p>
        
    </div>


</template>
<style scoped>
.header{
    width: 100%;
    height: 100px;
    background-color: #213d5b;
    color: #E5EAF3;
    display: flex;
}

.header-title{

}
</style>


<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';

export default defineComponent({
    name:'mainHeader',
    setup(){
        

        return{
        }
    
    }

})
</script>