<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import fetch from '@/fetch'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    fetch({
      url:'/user/get-user-info',
      data:{name:'atom'},
      method:'GET'
    })
  }
}
</script>
