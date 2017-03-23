<template>
  <div class="my" >
        <div class="my-top">
          <img :src="personal.photo" class="photo">
          <div class="phoneNumber">
          {{personal.phoneNumber}}
          </div>
          <div class="yue"><i class="el-icon-star-off"></i>&nbsp;{{personal.points*0.01}}</div>
        </div>   
        <div id="my-cardMenu" class="row noBorderMarginPadding">
          <el-row :gutter="20">  
            <el-col :span="6"><router-link  :to="{name:'signin',params:yidui}"><img src="../../common/img/tab-my/qdicon.png"/><span>签到</span></router-link></el-col>
            <el-col :span="6"><img src="../../common/img/tab-my/gwcicon.png"/><span>购物车</span></el-col>
            <el-col :span="6"><img src="../../common/img/tab-my/scicon.png"/><span>收藏</span></el-col>
            <el-col :span="6"><img src="../../common/img/tab-my/zjicon.png"/><span>足迹</span></el-col>
          </el-row>
        </div>
        <div class="myList" @click="dialogVisible = true"><i class="el-icon-setting"></i>注销登录</div>
        <el-dialog title="提示" v-model="dialogVisible" size="large">
          <span>确定注销吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="logout()">确 定</el-button>
          </span>
        </el-dialog>
  </div>
</template>
<script>

import { mapState,mapGetters } from 'vuex'
export default {
  name: 'my',
  data () {
    return {
      dialogVisible: false,
      yidui:{
        qq:1,
        xx:2,
        ww:"dsdsdsddd"
      }
    }
  },
  computed:{
    ...mapState([
      'personal'
    ]),
    ...mapGetters([
      // 'getPersonalMessage'
    ])
  },
  // computed: {
  //   personal () {
  //     return this.$store.getters.getPersonalMessage
  //   }
  // },
  created: function () {
        if(!this.$store.getters.getPasswordOk){
          this.$router.push('/login');
        }else{  
          this.$router.push('/my');
        }

  },
  methods: {
      logout(){
        this.$store.dispatch('POST_CLEAR')
      }  
  },
  components: {

  }
}
</script>
<style lang="scss">
    @import './my.scss';
</style>