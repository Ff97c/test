<template>
  <div id="app">
   <router-view></router-view>
   <h3>{{home}}</h3>
  </div>
 
</template>

<script>
import {request} from './network/request'

export default {
  name: 'app',
  components: {
   
  },
  data() {
    return {
        home:''
    }
  },
  created() {
     request({
       url:'/home/data',
       params:{
         type:'sell',
         page:5
       }
     }).then(res=>{
       console.log(res.data)
     })
  },
}
</script>

<style>

</style>
