<template>
  <div class="modal-mask">
    <img src="@/assets/logo.png" alt="">
    {{ message_data }}
  </div>
</template>

<script>
  export default {
    props:[ 'message' ],
    data () {
      return {
        
      }
    },
    computed: {
      message_data () {
        console.log();
        return this.message
      }
    },
    mounted () {
      
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed; 
  }
  img {
    width: 80px;
    height: 80px;
  }
</style>


