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
