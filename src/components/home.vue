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
    return{
      path: 'home/news'
    }
  },
  // created(){
  //   document.title= 'HOME'
  // },
  methods:{
  },
  // created(){
  //   this.$router.push('/home/news')
  // }
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>
