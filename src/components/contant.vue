<template>
    <div class="contant">
        <div class="side">
            <mainSidebar/>
        </div>
        <div class="display">
            <displayCard/>
        </div>
    </div>


</template>
<style scoped>
.contant{
    position: absolute;
    display: flex;
    width: 100%;
}
.side{
    position: relative;
    width: 15%;
    min-width: 200px;
}
.display{
    position: relative;
    width: 80%;
    height: 80%;
    min-height: 800px;
    background-color: #18222c;
    display: flex;

}
</style>


<style scoped>

</style>

<style>
</style>

<script>
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';
import mainSidebar  from "@/components/sidebar.vue"
import displayCard from "@/components/card.vue"

export default defineComponent({
    name:'mainContant',
    components: {
        mainSidebar,
        displayCard,
    },
    setup(){
        

        return{
        }
    
    }

})
</script>