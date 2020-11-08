<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>HOME</router-link>
    <router-link to="/about" tag="button" replace>ABOUT</router-link>
    <router-link :to="{path:'/profile', query:{name:'Chen XY', height:'1.75', weight:'67.5'}}" tag="button" replace>PROFILE </router-link>
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      userid: 'Chen XY'
    }
  }
}
</script>

<style>
  a{
    margin-right: 10px;
  }
  .router-link-active{
    color: red;
  }
</style>
