<template>


<div class="tabs-icon-top tabs-color-active-positive">

    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/home">首页</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">门店</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div>购物车</el-col>
      <el-col :span="6"><div @click="tiao" class="grid-content bg-purple-light">我的</div></el-col>
    </el-row>
</div>



</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
 
    }
  },
  created: function () {
     

  },
  methods: {
    tiao(){
      // alert(this.$store.getters.getPasswordOk)
        if(!this.$store.getters.getPasswordOk){
          this.$router.push('/login');
        }else{  
          this.$router.push('/my');
        }

        
      }
  },
  components: {

  }
}
</script>


<style >
  .tabs-icon-top{
    text-align: center;
  }

</style>