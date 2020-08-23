<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="home-box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

.home {
  background-color: #eee;
}

.home-box {
  display: inline-block;
  margin: 30px auto 200px;
  width: 100px; height: 100px;
  background-color: #eee;
  border-radius: 16px;
  box-shadow:
   -6px -6px 12px rgba(255,255,255,1),
   6px 6px 12px rgba(0,0,0,0.1);
   transition: 0.3s;
}
  
</style>