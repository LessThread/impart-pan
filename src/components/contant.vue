<template>
    <div class="contant">
        <div class="side">
            <mainSidebar/>
        </div>
        <!-- <div class="display" v-for="(item,index) in filelist" :key="index">
            <displayCard :name='item' />
        </div> -->

        <div  class="file-tab">
            <el-table :data="filelist" style="width: 100%">
                <el-table-column prop="num" label="序号" width="56" />
                <el-table-column prop="filename" label="文件名" width="400" />

                <el-table-column label="下载" width="120" prop="link">
                    <template #default="link">
                      <!-- <el-button link type="primary" size="small" @click="handleClick">Download</el-button> -->
                      <el-link :href="link.row.link" target="_blank" type="primary">Download</el-link>
                    </template>
                </el-table-column>
              </el-table>
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
.file-tab{
    position: relative;
    height: 100%;
    min-height: 800px;
    background-color: #18222c;
    left: 15%;
    max-width:50%;
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
import mainSidebar  from "@/components/sidebar.vue";
import displayCard from "@/components/card.vue";
import {getFileList} from '@/api/api.ts';
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    name:'mainContant',
    components: {
        mainSidebar,
        displayCard,
    },
    setup(){
        const filelist = ref([]);
        
        let getfilelink = function (filename){
            console.log(filename)
            return "http://140.210.195.77:8000/files/"+filename
        };

        const open = () => {
        ElMessageBox.alert('出现错误，现在可能正在维护或服务器故障', 'Error', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: 'OK',
            // callback: (action) => {
            // ElMessage({
            //     type: 'info',
            //     message: `action: ${action}`,
            // })
            // },
        })
        };

        let testLink = function(){
            fetch('http://140.210.195.77:8000/')
            .catch(err => {
                console.log('Request Failed', err)
                open()
            }); 
        }
        
        onMounted(()=>{
            getFileList(filelist);
            testLink();
        });


        return{
            filelist,
            getfilelink
        }
    
    }

})
</script>