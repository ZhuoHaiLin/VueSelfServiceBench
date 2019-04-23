<template>
<div>

<el-container>
  <el-header>
    
    <el-row>
       <el-col :span="12" > <div > 
         <el-button type="info" id="btn" icon="el-icon-back">派工任务</el-button></div> </el-col>
         <el-col :span="11"> <div><span style="float:right">{{DateTime}} </span>   </div> </el-col>
         <el-col :span="1"><img :src="imgSrc" id="image"  > </el-col>
         
    </el-row>
    
  </el-header>



    <el-tabs type="border-card">
  <el-tab-pane label="待接收"  > 


<el-row class="row">
<el-table
    :data="tableData.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
      
    :cell-style="{'font-weight': '800'}"

    border  :style="stylesize"
    :default-sort = "{prop: 'date', order: 'ascending'}"
    style="width: 100%;">
    <el-table-column
    
      prop="date"
      sortable
      label="派工单号"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      sortable
      label="设备/生产线"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      sortable
      
      label="开工/完工时间">
    </el-table-column>
     <el-table-column
      prop="address"
   
      sortable
      label="产品">
    </el-table-column>
     <el-table-column
      prop="address"
      sortable
    
      
      label="计划数量">
    </el-table-column>
      <el-table-column   label="操作" >
      <template slot-scope="scope">

     
           <el-button  @click="handleEdit(scope.$index, scope.row)" round>接收</el-button>
 
          <el-button   type="danger"  @click="handleDelete(scope.$index, scope.row)"  round>取消</el-button>
      </template>
    </el-table-column>
  </el-table>

 <div >
  
    <el-row>

      <span > &nbsp;</span>

      <el-col :span="5"> <span class="spanname">操作员:1001/张三</span> </el-col>

      <el-col :span="12">
         
         <div class="IDF"> 
      <el-pagination  
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"  
      :page-size="pagesize"
      
       background
       layout=" prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div></el-col>
      <el-col :span="5">  <input type="checkbox"  class="check" > <span  class="spanname"> 自动选择</span> </el-col>
    </el-row>
    




   
   
  </div>

  <div>{{Datames}}</div>
 
</el-row>



  </el-tab-pane>
<el-tab-pane label="待汇报">
     第三方士大夫
  </el-tab-pane>

</el-tabs>

</el-container>



 

</div>
 
</template>

<script>

import header from './tableheaderA';

  export default {


    data() {
      return {
         checked: true,
         multipleSelection: [],
        stylesize:{
          fontSize:localStorage.getItem('Size'),    
        },
        width:localStorage.getItem('Width')==null?" ":localStorage.getItem('Width'),  
        input:'',
        input4:'',
        small:false,
        border:false,
        total:7,//默认数据总数
        currentPage1: 1,//默认开始页面
        currentPage4:1,
        DateTime:this.moment().format("YYYY年MM月DD日 hh:mm:ss"),
        pagesize:3,//每页的数据条数
        Datames:'',
        imgSrc:'/image/L_Shutdown2.png',

        

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎6666',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎666',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎111',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        header:header
      }
    },
    methods: {
     
      handleEdit(index, row) {


        var then=this;
      
        this.axios.get('http://localhost:21021/Home/GetList')
        .then(function (response) {    
         then.Datames=response.data.result;//response.data.result;

         //console.log(response.data.result)   
        })
        //  .then(response => (this.Datames = response.data.result))
        .catch(function (error) {
        console.log(error);
        });

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
     
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.currentPage4 = val;
      },
    

    }
  }
</script>

<style scope>


.check{
  width: 25px;
  height: 25px;
    position: relative;
    top: 26px;
}

.spanname{
  position: relative;
    top: 20px;
    font-size: 24px;
}


.IDF{
  margin-top: 10px;
}


#image{
  height: 40px;
  margin-top: 10px;
  float: right;
}

#btn{
      height: 50px;
    font-size: 25px;
    line-height: 0;
    margin-top: 3px;
    float: left;
}

.el-table > .el-table__body-wrapper >.el-table td, .el-table th{

 text-align: center;

}

.el-table > .el-table__body-wrapper > .el-table__body >.el-table__row,.el-table td {

 text-align: center;

}

 .el-header, .el-footer {
    background-color: #909399;
    color: #333;
    text-align: center;
    line-height: 60px;
  }






.row{
  margin-top: 10px
}
  .group{

    display: block;
    margin-left: 10px
  }


  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{

    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    height: 50px;
    width: 45px;
    line-height: 50px;
}  

 .IDF > .el-pagination .is-background >  .el-pagination button, .el-pagination span:not([class*=suffix]) {

   font-size: 40px;
    margin-top: 8px;
   } 

 .IDF > .el-pagination .is-background > .el-pagination button, .el-pagination span:not([class*=suffix])>
 .el-pagination__editor.el-input > .el-input__inner  {

       height: 48px;
    position: relative;
   top: -4px;
    font-size: 30px;
   } 

</style>