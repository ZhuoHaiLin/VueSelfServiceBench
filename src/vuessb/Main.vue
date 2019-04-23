<template>

<div id="app" class="margin">


    <el-main class="elmains">  
   <el-row>
 
       <div  >
         <img :src="imgSrc" class="image"  >
         <h3> {{title}}</h3>
         <p v-bind:class="{soid:isActive }"></p> 
          <div><p>{{secTitle}} &nbsp; {{count}}</p></div>
       </div>

   </el-row>
    </el-main>

</div>
     

</template>

<script>
import BottomVue from '../publicvue/Bottom.vue';

    export default {
data() {
  return {
   // isActive:false
  }
},
 props:{
            imgSrc:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            secTitle:{
                type:String,
                required:true
            },
            count:{
                type:Number,
                required:true
            },
           isActive:{
             type:Boolean,
              required:true
           }
            
        }



   
   
   
   }


</script>

<style  scoped>


.margin{
margin-top: 80px
}


.soid{
  /* display: none; */
  /* width: 100%;
  height: 5px;
  border: 0 0 1px 0px solid #F0F0F0 */
   width: 120px;
   text-align: center;
  border-bottom:1px solid #D7D7D7;
  margin: 0 auto;
}
.image{
width: 80px;
}

.elmains {
    background-color: white; 
    color: #333;
    text-align: center;
    line-height:0px;
  }

</style>