<template>
  <div>
    <el-container style="height:100%">
  <el-aside width="200px">
  <test-aside></test-aside>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>{{$route.params.name}}
      <div>
        {{$store.state.counter}}
      </div>
      <div>
        <button @click='increment(20)'>提交mutation更改state</button>
        <!-- <button @click='decrement(50)'>getters属性的使用</button> -->
        <!-- {{$store.getters.change}} -->
        <button @click="change(20)">异步更改state</button>
      </div>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import TestAside from './Aside/TestAside.vue'
export default {
  name: "Main",
  components:{
    TestAside
  },methods: {
    increment(num){
      // this.$store.commit('add')
      this.$store.commit('add',num)
    },
    // decrement(num){
    //   this.$store.getters.sub(num)
    // }
    change(num){
      this.$store.dispatch('changeCounter',num)
    }
    },
};
</script>

<style scoped>
.el-container{
  height: 100vh;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>