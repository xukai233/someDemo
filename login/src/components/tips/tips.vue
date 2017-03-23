<template>
  <div class="tips" >
        <el-dialog title="提示" v-model="dialogVisible" size="large" >
          <span>确定注销吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()">取 消</el-button>
            <el-button type="primary" @click="logout()">确 定</el-button>
          </span>
        </el-dialog>
  </div>
</template>
<script>

export default {
  name: 'tips',
  data () {
    return {


    }
  },
  computed:{
     
  },
  props: ['dialogVisible'],
  // computed: {
  //   personal () {
  //     return this.$store.getters.getPersonalMessage
  //   }
  // },
  created: function () {

  },
  methods: {
    logout: function () {
      this.$emit('tips-cancel',true);
    },
    cancel: function () {
      this.$emit('tips-cancel',false);
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
    @import './tips.scss';
</style>