<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">选项一</span>
      </template> 
      <el-submenu index="1-2">
        <span slot="title">子选项一</span>
        <el-menu-item index="1-2-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航二</span>
      </template> 
      <el-submenu index="1-2">
        <span slot="title">子选项二</span>
        <el-menu-item index="1-2-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    
  </el-menu>
</template>

<script>
export default {
  name: "TestAside",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
   height: 100%;
   background-color: gold;
}
</style>