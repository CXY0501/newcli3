<template>
  <div>
    <h2>MY PROFILE</h2>
    <p>Welcome, Mr {{userId}}</p>
  </div>
</template>

<script>
export default{
  name:'profile',
  data(){
    return{}
  },
  // created(){
  //   document.title= 'PROFILE'
  // },
  computed:{
    userId(){
      return this.$route.query.name
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
