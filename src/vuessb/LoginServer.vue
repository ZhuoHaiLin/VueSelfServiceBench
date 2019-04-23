<template>

<div id="app" class="margin">

    <Top :mess='mess' :classObject='classObject'> </Top> 


    <el-row >
    <el-main class="el-main">
     <el-row >
      
       <el-col :span="4"> <div> &nbsp;</div></el-col> 
      <el-col :span="14"> <div> <el-input placeholder="请输入内容"  v-model="input10" clearable>
       <template slot="prepend">服务器地址</template>
      </el-input></div> </el-col>    
   <el-col :span="2">
          <el-button class="button">保存</el-button>
   </el-col>

     </el-row>

 <el-row>

     <el-col :span="9">&nbsp;</el-col>
     <el-col :span="1"><el-button class="button">登录</el-button></el-col>
     <el-col :span="3">&nbsp;</el-col>
     <el-col :span="1"><el-button class="button">取消</el-button></el-col>

 </el-row>

    </el-main>
    </el-row>


   <Bottom></Bottom>

</div>
     

</template>

<script>


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
background-color: #F0F0F0;
}

.button{
width: 100px;
}

.el-main {
    /* background-color: #E9EEF3; */
    background-color: white; 
    color: #333;
    text-align: center;
    line-height: 90px;
  }

</style>