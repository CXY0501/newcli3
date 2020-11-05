<template>
  <div>
    <h2>HOME PAGE</h2>
    <p>This is Home Page, Welcome</p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'home',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
