<template>
  <div>
   <ul class="ul">
     <router-link to="/UserList" @click="goBack">用户列表</router-link>
     <router-link to="/UserItem">用户利益</router-link>
   </ul>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
 
 computed:{
  username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
},
 methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
.ul{
  width:100%;
  border-bottom:1px solid #e3e3e3;
  overflow:hidden;
}
.ul li{
    float:left;
    height:30px;
    line-height:30px;
    margin: 0 10px;
    list-style-type:none;
    cursor: pointer;
  }
</style>
