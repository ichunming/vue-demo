<template>
  <div id="container">
    <div class="header">
      <div class="tab-item">
        <router-link to="/login">Login</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home">Home</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
