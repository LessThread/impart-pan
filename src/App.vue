<template>
  <div id="main-background">
  </div>
    <div id="main-body" >
      <mainHeader/>
      <mainContant/>
    </div>
  
</template>

<style scoped>
#main-background{
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: #1d3043;
  top:0;
  left: 0;
}

#main-body{
  position: relative;
  margin:auto;
  width: 90%;
  max-width: 1820px;
  background-color: #18222c;
  height: 90vh;
  min-height: 900px;
  color: #E5EAF3;
  border-radius: 10px;
}
</style>

<script>
import mainHeader from "@/components/header.vue"
import mainContant from "@/components/contant.vue"
import {defineComponent,computed,ref,watch,onMounted,reactive,toRefs,toRef} from 'vue'
import router from '@/router';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
      mainHeader,
      mainContant
  },
    setup(){

        return{
        }
    
    }

})
</script>