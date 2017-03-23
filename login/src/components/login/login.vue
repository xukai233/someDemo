<template>
<div class="login">
登录
        <div>
            <div class="item item-input">
           
                <input type="number" v-model="user.phoneNumber" placeholder="请输入手机号码"></div>
            <div class="item item-input">
              
                <input type="password" v-model="user.passwd" placeholder="请输入密码"></div>
        </div>
        <div>
            <button class="button button-positive" @click="login()"><b>登 录</b></button>
        </div>
</div>



</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        user:{
          phoneNumber:'',
          passwd:''
        }
    }
  },
  created: function () {
   
  },
  methods: {
    login(){
      let _self=this
      this.$store.dispatch('POST_LOGIN',_self.user)
    }
  },
  components: {

  }
}
</script>


<style >

</style>