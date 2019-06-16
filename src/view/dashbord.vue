<template>
  <el-container>
    <el-header class="header-contain">
      <vHeader></vHeader>
    </el-header>
    <el-container class="main-contain">
      <el-aside width="150px">
        <vAside></vAside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>© 2020-2019   · 皖ICP备17009202号</el-footer>
  </el-container>
</template>

<script>
import vHeader from "@/components/layout/header";
import vAside from "@/components/layout/aside";
export default {
  components: {
    vHeader,
    vAside
  },
  data() {
    return {
      head: "pmq"
    };
  }
};
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  height: 60px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.header-contain {
  padding: 0 40px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-contain {
  height: calc(100vh - 120px);
}

.el-aside {
  height: 100%;
  background-color: rgb(84, 92, 100);
  text-align: left;
  // overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>