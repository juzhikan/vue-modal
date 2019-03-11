<template>
  <div class="container">
    <div  @click="show1">container1</div>
    <div  @click="show2">container4</div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      show1 () {
        this.$toast(111111)
      },
      show2 () {
        this.$toast(222222222)
      }
    }
  }
</script>

<style scoped>
  .container {
    
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>


