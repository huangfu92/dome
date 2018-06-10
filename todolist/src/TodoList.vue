<template>
  <div>
     <div>
       <input type="text" v-model="inputValue"/>
       <button @click="habdleSubmit">提交</button>
     </div>
     <ul>
      <todo-item 
        v-for="(item,index) of list"
        :key = "index"
        :content="item" 
        :index = "index"
        :delete = "habdleDele"
      >
        
      </todo-item> 
       
     </ul>  
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem"
export default {
  components:{
  "todo-item" : TodoItem
 },
 data(){
  return {
    inputValue:"111",
    list:[]
  }
 },
 
methods:{
  habdleSubmit(){
   this.list.push(this.inputValue)
   this.inputValue = ""
  },
  habdleDele(index){
    console.log(index)
    this.list.splice(index,1)
  }
}

}
</script>

<style>

</style>
