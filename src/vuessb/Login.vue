<template >

<div id="app" class="margin">


    <Top  :mess='mess' :classObject='classObject'> </Top> 

    <el-row >
    <el-main class="el-main">
     <el-row >
      <el-col :span="8"> <div> &nbsp;</div></el-col> 
      
      <el-col :span="8"> <div> <el-input placeholder="请输入内容"  v-model="input10" clearable>
       <template slot="prepend">用户账号</template>
      </el-input></div> </el-col>
    
     </el-row>
<el-row>
    <el-col :span="8"> <div> &nbsp;</div></el-col> 
 <el-col :span="8"> <div> <el-input placeholder="请输入密码" v-model="input11" show-password>
       <template slot="prepend" >登录密码</template> 
      </el-input> 
     </div> </el-col>

    <el-col :span="2">  <a href="http://localhost:8080/#/LoginServer">服务器登录</a></el-col>

</el-row>
 <el-row>

     <el-col :span="9">&nbsp;</el-col>
     <el-col :span="1"><el-button class="button" @click="login()">登录</el-button></el-col>
     <el-col :span="3">&nbsp;</el-col>
     <el-col :span="1"><el-button class="button">取消</el-button></el-col>

 </el-row>

    </el-main>
    </el-row>


   <Bottom></Bottom>

</div>
     

</template>

<script>
  //  import Bottom from './publicvue/Bottom.vue'
  //  import Top from './publicvue/Top.vue'
    
//  Vue.component('my-component',{
//    template:'<el-col :span="4">&nbsp;</el-col><el-col :span="16"><el-header class="header" >车间自助工作台</el-header></el-col><el-col :span="4"><span ref="spantop" hidden><i class="el-icon-setting"></i></span> </el-col>'
//  })


    export default {

      data() {
        return {
          input11:'',
          input10:'',
          mess:true,
          classObject:{
             row:true, 
             rows:false
          }
        }
      },

      methods: {
        login:function(){

          this.$router.push({ path: 'main'})
        }
      },
      
         name:'app',
         components:{
          Top:()=>import('../publicvue/Top.vue'),
           Login:()=>('../vuessb/Login.vue'),
          Bottom:()=>import('../publicvue/Bottom.vue')
         
         },



    }


</script>

<style  scoped>



.margin{
  margin-top: 80px;
  /* background-color: #F0F0F0; */
}

.button{
width: 100px;
}

.el-main {
     /* background-color: #E9EEF3;  */
     background-color: white;  
    color: #333;
    text-align: center;
    line-height: 90px;
  }

</style>