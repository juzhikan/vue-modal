<template>
  <div class="container">
    <div  @click="show1">container1</div>
    <div  @click="show2">container2</div>
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
    display: flex;
  }
  img {
    width: 80px;
    height: 80px;
  }
</style>


