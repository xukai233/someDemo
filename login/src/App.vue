<template>
  <div id="app">

    
    	<router-view></router-view>
    

      <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from './components/footer/footer';
export default {
    name: 'app',
    components: {
      vFooter
    },
    data() {
      return {
        
      };
    },
    computed: {
      
    },
    methods: {
    
    }
  };
</script>

<style>

</style>
