<template>
  <div class="hello">
    <div class="top">
      <div class="up" @click="up()">&lt;</div>{{fullyear}}年{{month+1}}月<div class="down" @click="down()">   &gt;</div>
    </div>
    
    <ul class="rili" id="rili">
    <li class="riliTop">日</li>
    <li class="riliTop">一</li>
    <li class="riliTop">二</li>
    <li class="riliTop">三</li>
    <li class="riliTop">四</li>
    <li class="riliTop">五</li>
    <li class="riliTop">六</li>
    <li v-for="item in ksz" ></li>
    <li v-for="(x,index) in date" ><div v-bind:class="x" @click="search(index+1)" >{{index+1}}</div></li>
  </ul>
  <div style="clear:both"></div>
  <div v-show="show" class="show"><span @click="close()" class="x">&times;</span>
       
        <div class="showTop">{{benri.time}}</div>
        <ul>
          <li v-for="v in benri.list">
            <div>{{v.clock}}</div>
          {{v.content}}
          </li>
        </ul>
        
  </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      time:{
        mfdzj:'',
        malld:'',
        mthisd:''
      },
      ksz:[],
      date:[],
      yearmonth:'',
      benri:[],
      fullyear:'',
      month:'',
      show:false
    }
  },
  created: function () {
        var myDate = new Date();
        this.fullyear=myDate.getFullYear()
        this.month=myDate.getMonth()
        let v=""
        if(this.month<10){
          v='0'+(this.month+1)
          this.yearmonth=this.fullyear+'-'+v+'-'
        }else{
          v=this.month+1
          this.yearmonth=this.fullyear+'-'+v+'-'
        }
        console.log(this.yearmonth);
        var firDate = new Date(this.fullyear,this.month,1)
        this.time.mfdzj=firDate.getDay()//当月第一天是周几
        this.time.malld=new Date(this.fullyear, this.month+1, 0).getDate();//当月多少天
        // this.time.mthisd =myDate.getDate()
        for (let i = 0; i < this.time.mfdzj; i++) {
            this.ksz.push(i)
        }
        let arr=[]
        for (let i = 0; i < this.$store.state.event.length; i++) {
            if (this.$store.state.event[i].yAm==this.yearmonth) {
                arr.push(this.$store.state.event[i].day)
            }
        }
        for (let i = 0; i < this.time.malld; i++) {
              let num = 0
              for (let n = 0; n < arr.length; n++) {
                  if (arr[n]==(i+1)) {
                    this.date.push("sel")
                    num++
                  }
              }
              if(num==0){
                this.date.push("unsel")
              }
        }

  },
  methods: {
      close(){
        this.show=false //true
      },
      search(x){
        
        console.log(x);
        this.benri=[]
        let v=""
        if(x<10){
          v='0'+x
        }else{
          v=x
        }
        const self = this;
        let ymd=this.yearmonth+v
        for (var i = 0; i < this.$store.state.event.length; i++) {
          if(this.$store.state.event[i].time==ymd){
            this.show=true 
              this.benri=this.$store.state.event[i]
          }
        }
        console.log(this.benri);
      },
      up(){
        if(this.month<1){
          this.fullyear=this.fullyear-1
          console.log(this.fullyear);
          this.month=12
        }

        this.month=this.month-1
        var firDate = new Date(this.fullyear,this.month,1)
        this.time.mfdzj=firDate.getDay()//当月第一天是周几
        this.time.malld=new Date(this.fullyear, this.month+1, 0).getDate();//当月多少天
        this.ksz=[]
        this.date=[]
        for (var i = 0; i < this.time.mfdzj; i++) {
            this.ksz.push(i)
        }

        let v=""
        if(this.month<9){
          v='0'+(this.month+1)
          this.yearmonth=this.fullyear+'-'+v+'-'
        }else{
          v=this.month+1
          this.yearmonth=this.fullyear+'-'+v+'-'
        }
        let arr=[]
        for (let i = 0; i < this.$store.state.event.length; i++) {
            if (this.$store.state.event[i].yAm==this.yearmonth) {
                arr.push(this.$store.state.event[i].day)
            }
        }
        for (let i = 0; i < this.time.malld; i++) {
              let num = 0
              for (let n = 0; n < arr.length; n++) {
                  if (arr[n]==(i+1)) {
                    this.date.push("sel")
                    num++
                  }
              }
              if(num==0){
                this.date.push("unsel")
              }
        }

      },
      down(){

        if(this.month>9){
          this.fullyear=this.fullyear+1
          console.log(this.fullyear);
          this.month=-1
        }
        this.month=this.month+1
        var firDate = new Date(this.fullyear,this.month,1)
        this.time.mfdzj=firDate.getDay()//当月第一天是周几
        this.time.malld=new Date(this.fullyear, this.month+1, 0).getDate();//当月多少天
        this.ksz=[]
        this.date=[]
        for (var i = 0; i < this.time.mfdzj; i++) {
            this.ksz.push(i)
        }
        let v=""
        if(this.month<9){
          v='0'+(this.month+1)
          this.yearmonth=this.fullyear+'-'+v+'-'
        }else{
          v=this.month+1
          this.yearmonth=this.fullyear+'-'+v+'-'
        }
        let arr=[]
        for (let i = 0; i < this.$store.state.event.length; i++) {
            if (this.$store.state.event[i].yAm==this.yearmonth) {
                arr.push(this.$store.state.event[i].day)
            }
        }
        for (let i = 0; i < this.time.malld; i++) {
              let num = 0
              for (let n = 0; n < arr.length; n++) {
                  if (arr[n]==(i+1)) {
                    this.date.push("sel")
                    num++
                  }
              }
              if(num==0){
                this.date.push("unsel")
              }
        }
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.top{
  height: 60px;
  line-height: 60px;
  position: relative;text-align: center;

}
.top .up{
  height: 60px;
  width: 60px;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;font-size: 26px;font-weight: bold;cursor: pointer;
}
.top .down{
  height: 60px;
  width: 60px;
  line-height: 60px;
  position: absolute;
  top: 0;
  right: 0;font-size: 26px;font-weight: bold;cursor: pointer;
}
.rili{
    padding: 10px 2%;

}
.rili li{
    width: 14.28%;
    float: left;
    text-align: center;
   /* background: #f5f5f5;*/
    height: 40px;
    
    color: #666666;
    margin: 0 0 10px 0;
}
.rili li.riliTop{
   background: #f5f5f5;
   height: 35px;
   line-height: 35px;

}
.rili li div.yiqian{
    width:40px;
    height: 40px;
    margin: 0 auto;
    background: #ffdf26;
    border-radius: 40px;
    border: 4px solid #fff4ba;
    color: #fff
}
.rili li div{
    width:40px;
    height: 40px;line-height: 40px;
    margin: 0 auto;
    border-radius: 40px;
    border: 2px dashed #dfdfdf;
    cursor: pointer;
}
.rili li div.sel{
  background: #ff004e;color: #fff;border: 2px dashed #fff;
}
.show{
  position: absolute;
  top: 0;left: 0;
  width: 100%;height: 100%;opacity: 1;width: 100%;background: #fff;color: #000
}
.show .x{
  height: 30px;
  width: 30px;line-height: 30px;
  text-align: center;color: #1200ff;font-size: 30px;
  border: 2px solid #1200ff;
  border-radius: 40px;
  display: block;
  position: absolute;top: 10px;right: 10px
}
.showTop{
  margin: 60px 0 0 0;text-align: center;height: 30px;background: #b37673;line-height: 30px;color: #fff;opacity: 1
}
.show ul li{
  display: block;
  text-align: center;
  line-height: 30px;
  mmin-height: 30px;
  border-bottom: 1px solid #5e5d5d;padding:0;text-align: left;position: relative;
}
.show ul li div{
  background: #eee;text-align: center;height: 20px;line-height:  20px;overflow: hidden;text-align: left;padding: 5px;
}
</style>
