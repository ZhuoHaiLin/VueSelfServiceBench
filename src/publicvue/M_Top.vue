<template>
    <div>
     <h2>我是在页面上获取的值：{{this.$store.state.count}}</h2>
     <h2>我是从Getters获取的计算后的值：{{this.$store.getters.getStateCount}}</h2>
     <p>count的值：{{this.$store.state.count}}</p>
     <button @click="addFun">+</button>
     <button @click="reductionFun">-</button>



    </div>
</template>

<script>
    export default {
      methods:{
        addFun(){
          //this.$store.commit("add")
          this.$store.dispatch("addFun")

        },
        reductionFun(){
          //this.$store.commit("reduction")
           this.$store.dispatch("reductionFun")
        }
      }
        
    }
</script>

<style lang="scss" scoped>

</style>