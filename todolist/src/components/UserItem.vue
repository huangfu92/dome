<template>
  <div>这是用户利益</div>
</template>

<script>

export default {
 props:["content","index"],
  methods:{
    handleClick(){
     this.$emit("delete",this.index)
    }
  }

}
</script>
<!---scoped 修饰符样式作用于-->
<style scoped>

</style>
