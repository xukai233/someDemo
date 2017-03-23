<template>
  <div class="zonghui">
    <div class="edit"  v-show="zhshow"  >
        <div class="xiugai">修改</div>
        <input style="width:140px;" type="number" name="points" min="0" max="23" v-model="info.hour" >&nbsp;时
        <input style="width:140px;" type="number" name="points" min="0" max="60" v-model="info.minute" >&nbsp;分<br />
        <textarea type="text" style="width:100%;min-height:100px;margin:15px 0 0  0" class="n-input" v-model="info.content" placeholder="待办事项" ></textarea>
        <button class="editData" @click="editData">确定</button>
    </div>
    <ul>
      <li style="display:block" v-for="(value , index) in getToDo">
      <div class="zhTop">{{value.time}}<span class="x" @click="delToDo(index)" >&times;</span></div>
         <div class="zhli" v-for="(aaa , ind) in value.list">
               <div class="zhliTop">{{aaa.clock}}<span @click="delToDolist(index,ind)" >&times;</span><span @click="edit(index,ind)" >✎</span></div>
               {{aaa.content}}
         
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'zonghui',
  data () {
    return {
      info:{
          content:'',
          hour:'',
          minute:''
      },
      where:{
        lv1:'',
        lv2:''
      },
      zhshow:false
    }
  },
  created: function () {

  },
  methods: {
    delToDo(index){ 
         this.$store.dispatch('delevent',index);
    },
    delToDolist(index,ind){ 
      let params={
        LV1index:index,
        LV2index:ind
      }
         this.$store.dispatch('deleventlist',params);
    },
    edit(index,ind){ 
      this.where.lv1=index
      this.where.lv2=ind
      this.info.content=this.$store.state.event[index].list[ind].content
      this.info.hour=this.$store.state.event[index].list[ind].hour
      this.info.minute=this.$store.state.event[index].list[ind].minute
      //states.event[index].list[ind];
      this.zhshow=true;
    },
    editData(){ 
      // this.where.lv1=index
      // this.where.lv2=ind
      this.$store.state.event[this.where.lv1].list[this.where.lv2].content=this.info.content
      console.log(this.$store.state.event);
      this.$store.state.event[this.where.lv1].list[this.where.lv2].hour=this.info.hour
      this.$store.state.event[this.where.lv1].list[this.where.lv2].minute=this.info.minute
      this.$store.state.event[this.where.lv1].list[this.where.lv2].clock=this.info.hour+'时'+this.info.minute+'分'
      //states.event[index].list[ind];
     
      this.$store.dispatch('edit',this.$store.state);
      this.zhshow=false;
    }
  },
  computed: {
            getToDo(){

                const self = this;
                return self.$store.state.event.filter(function(d){
                        return d;
                });
            }
  }
}
</script>


<style scoped>
.zhTop{
background: #e6e1e1;text-align: center;height: 20px;line-height:  20px;overflow: hidden;text-align: left;padding: 5px;position: relative;margin: 10px 0 0 0
}
.zhTop .x{
  height: 20px;
  width: 20px;line-height: 20px;
  text-align: center;color: #000;font-size:30px;
  display: block;
  position: absolute;top: 5px;right: 0px
}
.zhli{
  border: 1px solid #000;
  background: #eee;
  line-height: 25px;padding: 0 5px;
}
.zhliTop{
  min-height: 25px;
  line-height: 25px;
  border-bottom: 1px dashed #000;padding: 0 5px;
  margin: 0 0 8px 0;
  background: #fff
}
.zhliTop span{
  float: right;font-size: 24px
}
.edit{
  position: absolute;top:0;left: 0;background: #fff;width: 100%;height: 100%;z-index: 999;
}
.xiugai{
  height: 40px;
  line-height: 40px;
  background: #eee;
  padding: 0 5px;
  margin: 0 0 15px 0
}
.editData{
  background: #000cfe;
  height: 40px;text-align: center;
  width: 100%;color: #fff;font-size: 22px;border: 0px
}
</style>
