<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-link to="/"></router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        msg: 'Error: 404',
      }
    }
  }
</script>

<style scoped>

</style>
