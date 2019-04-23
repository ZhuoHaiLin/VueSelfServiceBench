<template>
    <div id="main">
        
    
      <template v-for="(item,index) in menus" >
          <div @click="Mainclick(item.patn)"  :key="index"  >

             
 <Main  :isActive="item.isActive" :title="item.title" :secTitle="item.secTitle" :count="item.count" :imgSrc="item.imgSrc" :key="item.title"/>
           <!-- <br v-if="index==3" :key="index" > -->
          
           </div >
        </template>

  <button @click="btn(this)">单击</button>


    </div>
</template>

<script>
    export default {
        //  name:'main',
        components:{
           // Top:()=>import('./publicvue/M_Top.vue'),
             Main:()=>import('../vuessb/Main.vue'),
          //  Bottom:()=>import('./publicvue/M_Bottom.vue'),           
        },
        data() {
            return {
                // isActive:true,
                menus:[
                    {title:'派工任务',secTitle:'待派工',count:1,imgSrc:'/image/L_BillList.png',patn:'/atask',isActive:true},
                    {title:'完工报科',secTitle:'待检验',count:2,imgSrc:'/image/L_BillCheck3.png',patn:'/section',isActive:true},
                    {title:'完工汇报',secTitle:'待汇报',count:3,imgSrc:'/image/L_Bill.png',patn:'/completion',isActive:true},
                    {title:'我的报表',secTitle:'报表数',count:4,imgSrc:'/image/L_Chart.png',patn:'/m_top',isActive:true},                   
                    {title:'生产领料',secTitle:'任务数',count:5,imgSrc:'/image/L_Cart4.png',patn:'/atask',isActive:true},
                    {title:'质量检验',secTitle:'待检验',count:6,imgSrc:'/image/L_Ruler.png',patn:'/atask',isActive:true},
                    {title:'库存查询',secTitle:'缺料类',count:7,imgSrc:'/image/L_Stock.png',patn:'/atask',isActive:true},
                    {title:'条码打印',secTitle:'待检验',count:8,imgSrc:'/image/L_Scan.png',patn:'/setthestyle',isActive:true},
                ],
               
            }
        },

methods: {
   Mainclick:function(path){
 
      this.$router.push(path)
   },
  btn:function(obj){

    //   var a = "<%=xmpfs()%>";
    //   document.write(s);
  var hello='你好好'
   jsObj.MessageText = "hello";
   jsObj.ShowTest(hello);

  }
},
  

    }
</script>





<style  scoped>

    #main  div{
          display:  inline-flex;
         /* display: inline-flex; */
         /* flex-wrap: nowrap  wrap  wrap-reverse; */
         flex-direction:row;
         flex-wrap:wrap; 
         justify-content:space-around ; 

    }

</style>