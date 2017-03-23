<template>
  <div class="home" >
   
    <img src="../common/img/tab-home/xuecheRow.png">
    <img src="../common/img/tab-home/xiucheRow.png">
    <img src="../common/img/tab-home/yuecheRow.png">
    <img src="../common/img/tab-home/cheyouRow.png">
    <img src="../common/img/tab-home/yancheRow.png">
    <img src="../common/img/tab-home/chexianRow.png">


  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
 
    }
  },
  created: function () {
     if(localStorage.ucex&&this.$store.getters.getPasswordOk==false){
        console.log("确认了一遍");
        let param=JSON.parse(localStorage.ucex)
        this.$store.dispatch('POST_LOGIN',param)
     }

  },
  methods: {
    
  },
  // computed:{
  //   ...mapGetters([
  //     'getPasswordOk'
  //   ])
  // },
  components: {

  }

}
</script>


<style lang="scss">

</style>
