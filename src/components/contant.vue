<template>
    <div class="contant">
        <mainSidebar/>
        contant
    </div>


</template>
<style scoped>
</style>


<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';
import mainSidebar  from "@/components/sidebar.vue"

export default defineComponent({
    name:'mainContant',
    components: {
        mainSidebar
    },
    setup(){
        

        return{
        }
    
    }

})
</script>