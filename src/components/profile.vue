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
  created(){
    console.log('profile created')
  },
  destroyed(){
    console.log('profile destroyed')
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
