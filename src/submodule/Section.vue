<template>
<div>


<el-tabs type="border-card">
  <el-tab-pane label="待接收"  > 


<el-row class="row">
<el-table
    :data="tableData"
    border
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      sortable
      label="派工单号"
      
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      sortable
      label="设备/生产线"
      width="180">
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
      <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

 <div >
    <span class="demonstration"> &nbsp;</span>
    <div class="IDF"> 
      <el-pagination 

      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"  
      :page-size="100"
      
       background
       layout=" prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
   
  </div>
 
</el-row>



  </el-tab-pane>
  <el-tab-pane label="待汇报">待汇报&nbsp;3</el-tab-pane>
  <el-tab-pane label="已汇报">已汇报&nbsp;3</el-tab-pane>

</el-tabs>


   





 

</div>
 
</template>

<script>

//import 'element-ui/lib/theme-chalk/paginationtest.css'

  export default {
    data() {
      return {
        input:'',
        input4:'',
        small:false,
        border:false,
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
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
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
     
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }

    }
  }
</script>

<style scope>
.demonstration {
  margin-top: 10px
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

/* .page{

  margin-top: 100px;
} */

 /* .el-pagination button, .el-pagination span:not([class*=suffix]) {

  display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 10px;
    font-size: 40px;
}
.el-input {
    position: relative;
    font-size: 30px;
    display: inline-block;
    width: 100%;
    margin-top: -10px;
}

.el-pagination__editor.el-input .el-input__inner {
    height: 48px;
        padding-top: 8px;
}  */

</style>