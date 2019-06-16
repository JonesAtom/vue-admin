<template>
  <div class="aside-contain">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-submenu index="/pages">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>页面配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/mine">个人中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/goods">
        <i class="el-icon-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

      <el-menu-item index="/manage">
        <i class="el-icon-goods"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>

      <el-submenu index="/statistics">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/traffic">流量</el-menu-item>
          <el-menu-item index="/trade">交易</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">店铺设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("handleOpen", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='scss' scoped>
.aside-contain {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.el-menu-vertical-demo {
  width: 100%;
  text-align: left;
  display: inline-block;
}
.el-menu {
  overflow: hidden;
  border-right: 0;
}
</style>