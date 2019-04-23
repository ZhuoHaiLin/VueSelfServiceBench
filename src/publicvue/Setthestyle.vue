<template>
    <div>


<el-container>



 <el-header>设置全局样式</el-header>

<el-main>

  <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-form-item label="字体大小">
    <el-input v-model="formInline.size" placeholder="字体大小">
    </el-input>
  </el-form-item>
  <el-form-item label="表头宽度">
     <el-input v-model="formInline.width" placeholder="表头宽度"></el-input>
  </el-form-item>
  <el-form-item>
    
  </el-form-item>
 <el-button type="primary" @click="SetSubmit">设置</el-button>




</el-form>

</el-main>

</el-container>




    </div>
</template>

<script>
    export default {

        data() {
            return {
                 formInline: {
                     size:localStorage.getItem('Size')==null?" ":localStorage.getItem('Size'),
                      width:localStorage.getItem('Width')==null?" ":localStorage.getItem('Width')
                    }
            }
        },
        methods: {
            SetSubmit(){
               
       var Size= this.formInline.size
       var width=this.formInline.width
        
         localStorage.setItem('Size', Size);
         localStorage.setItem('Width', width);
   
         this.$router.go(0);

            }

           
        },

     
    }
</script>

<style  scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   
  }

</style>