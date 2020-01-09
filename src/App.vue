<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import './style/index.css';
  @import './style/custom.css';
  #app{
    overflow-y:visible;
  }
</style>
