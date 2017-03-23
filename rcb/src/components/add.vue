<template>
  <div class="add">
    <div class="event-add"><span style="font-size:10px;">*注意：Internet Explorer 或 Firefox 不支持日期选择，输入时请保证如2017-02-28这种格式↓</span><br /> 
        <input type="date" name="user_date"  class="n-input" v-model="time" placeholder="日期" /><br /> 
        <input type="number" name="points" min="0" max="23" class="n-input" v-model="hour" placeholder="输入几点" />&nbsp;时
        <input type="number" name="points" min="0" max="60" class="n-input" v-model="minute" placeholder="输入几分" />&nbsp;分<br />
        <textarea style="width:100%;min-height:100px;margin:15px 0 0  0"  type="text" class="n-input" v-model="content" placeholder="待办事项" @keyup.enter="submit"></textarea>
        <button class="add-btn " @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      hour:'',
      minute:'',
      list:[
        {
          content: '',
          clock:''
        }
      ],
      time: '',
      content:'',
      clock:''
    }
  },
  methods: {
            submit () {
                let self = this,
                    params = {
                        id: 0,
                        type: 1,
                        list:[
                          {
                            content: '',
                            clock:'',
                            hour:'',
                            minute:''
                          }
                        ],
                        time: '',
                        yAm:'',
                        day:''
                    };
                    self.content = self.content.trim();
                    self.time = self.time.trim();
                    self.clock = self.hour+'时'+self.minute+'分';
                    
                    if(self.content!==''&&self.hour!==''&&self.minute!==''&&self.time!==''){
                        params.list[0].content = self.content;
                        params.list[0].clock = self.clock;
                        params.list[0].hour = self.hour;
                        params.list[0].minute = self.minute;
                        params.time = self.time;
                        console.log(self.time.split('-'));
                        let arr = self.time.split('-')
                        params.yAm = arr[0]+'-'+arr[1]+'-'
                        params.day = arr[2]
                        for (let i = 0; i < self.$store.state.event.length; i++) {
                           if(self.time.trim()==self.$store.state.event[i].time){
             
                              self.$store.dispatch('addlistevent',params);
                              alert("添加成功")
                              return
                           }
                          
                        }


                        
                        self.$store.dispatch('addevent',params);
                        alert("添加成功")
                        this.time=''
                        this.hour=''
                        this.minute=''
                        this.content=''
                    }else{
                      alert("请正确填写！")
                    }



            }
  }
}
</script>


<style scoped>
.event-add input{
  margin: 5px 0;
  min-width: 140px;
}
.add-btn{
  background: #000cfe;
  height: 40px;text-align: center;
  width: 100%;color: #fff;font-size: 22px;border: 0px
}
</style>
