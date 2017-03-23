<template>
<transition  ><!-- enter-active-class="animated slideInLeft" leave-active-class="animated slide" -->
  <div class="signin" >
        <top-header></top-header>
  </div>
</transition>
</template>
<script>
import topHeader from '../../components/top/top';
export default {
  name: 'signin',
  data () {
    return {
      title:'签到'

    }
  },
  computed:{
     
  },
  // computed: {
  //   personal () {
  //     return this.$store.getters.getPersonalMessage
  //   }
  // },
  created: function () {
      this.$store.commit('UPDATE_TITLE', this.title);
  },
  methods: {
  
  },
  components: {
    topHeader
  }
}
</script>
<style lang="scss">
    @import './signin.scss';
</style>