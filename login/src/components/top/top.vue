<template>
  <div class="top" >
        <i @click="goback(-1)" class="el-icon-arrow-left"></i> {{headerTitle}}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'top',
  data () {
    return {


    }
  },
  computed:{
    ...mapState([
      'headerTitle'
    ])
  },
  // computed: {
  //   personal () {
  //     return this.$store.getters.getPersonalMessage
  //   }
  // },
  created: function () {

  },
  methods: {
      goback(k){
        this.$router.go(k)
      }
  },
  components: {

  }
}
</script>
<style lang="scss">
    @import './top.scss';
</style>