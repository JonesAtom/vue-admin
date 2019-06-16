<template>
  <div class="header">
    <div class="header-logo">
      <img class="logo-icon" src="../../assets/logo.png">
      <span class="logo-name">VISTAR</span>
    </div>
    <div class="header-tips">
      <span class="tips-hd">系統公告：</span>
      <span>受市場寒流影響，今夜暫停金融兌換業務</span>
    </div>
    <div class="header-user">
      <img class="user-avator" src="../../assets/logo.png">
      <span class="user-name">ATOM</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "@/assets/logo.png"
    };
  }
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-logo {
    display: flex;
    align-items: center;
    .logo-icon {
      width: 20px;
      height: 20px;
    }
    .logo-name {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      padding-left: 10px;
    }
  }
  .header-tips {
    width: 400px;
    font-size: 15px;
    color: aqua;
    opacity: 0.8;
    .tips-hd{
      color: #ffe;
    }
  }
  .header-user {
    display: flex;
    align-items: center;
    .user-avator {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 15px;
      padding-left: 10px;
      color: white;
    }
  }
}
</style>