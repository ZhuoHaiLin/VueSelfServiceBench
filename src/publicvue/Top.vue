<template>
 
<!-- class="row" -->
 <el-row v-bind:class="classObject"  >



      <el-col :span="4">&nbsp;</el-col>
    <el-col :span="16"><el-header class="header" >车间自助工作台
    </el-header></el-col>

    

     <el-col :span="4" v-if='mess'>    

     <span ><i class="el-icon-setting"></i></span> 
         
     </el-col> 


 </el-row> 
 
   
</template>

<script>
    export default {
        data() {
            return {
                 mess:false,     
                classObject:{
                      
                     row:false, 
                     rows:false

                }
            }
        },
      props:{mess:Boolean,classObject:{Boolean,Boolean}}
    }
</script>

<style  scoped>

.rows{

    background-color:#F0F0F0;
}

.row{

    background-color: #0078D7;
}



.header{
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
}



.el-icon-setting{

font-size: 25px;
margin-top: 15px;
    float: left;
}


</style>