<template>
    <div class="contant">
        <div class="side">
            <mainSidebar/>
        </div>
        <div class="display">
            <el-row>
                <el-col
                    v-for="(o, index) in 2"
                    :key="o"
                    :span="8"
                    :offset="index > 0 ? 2 : 0"
                    >
                    <el-card :body-style="{ padding: '0px',width:'200px' }">
                        <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                        />
                        <div style="padding: 14px;background-color: #213d5b;">
                        <span style="color: white;">Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                        </div>
                        </div>
                    </el-card>
                    </el-col>
                </el-row>
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
    width: 20%;
    

}
.display{
    position: relative;
    width: 80%;
    height: 80%;
    min-height: 900px;
    background-color: #18222c;

}
</style>


<style scoped>
.time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
</style>

<style>
.is-always-shadow{
    margin-top: 10px;
    max-width: 200px !important;
}
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