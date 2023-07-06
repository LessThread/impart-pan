<template>
    <div class="contant">
        <div class="side">
            <mainSidebar/>
        </div>
        <div class="display" v-for="(item,index) in filelist" :key="index">
            <displayCard :name='item' />
        </div>
        <div class="logo">
            <img src="../assets/bq.webp" style="opacity:0.6;"/>
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
    height: 80%;
    min-height: 800px;
    background-color: #18222c;
    display: flex;
    left: 10%;
    max-width: 90%;

}

.logo{
    pointer-events: none;
    width: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
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
import displayCard from "@/components/card.vue";
import {getFileList} from '@/api/api.ts';

export default defineComponent({
    name:'mainContant',
    components: {
        mainSidebar,
        displayCard,
    },
    setup(){
        const filelist = ref([]);
        onMounted(()=>{
            getFileList(filelist);
        });


        return{
            filelist,
        }
    
    }

})
</script>