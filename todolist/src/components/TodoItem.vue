<template>
  <ul>
  	<li v-for="(item ,index) of list">{{item.name}}</li>
  </ul>
</template>
<script>

export default {
 data(){
	return {
    inputValue:"111",
    list: [{
	    "gradeId": 1,
	    "name": "学前班",
	    "age":12
	  }, {
	    "gradeId": 2,
	    "name": "一年级",
	    "age":12
	  }, {
	    "gradeId": 3,
	    "name": "二年级",
	    "age":12
	  }, {
	    "gradeId": 4,
	    "name": "三年级",
	    "age":12
	  }, {
	    "gradeId": 5,
	    "name": "四年级",
	    "age":12
	  }, {
	    "gradeId": 6,
	    "name": "五年级（全国）",
	    "age":12
	  }, {
	    "gradeId": 7,
	    "name": "五年级（上海）",
	    "age":12
	  }, {
	    "gradeId": 8,
	    "name": "六年级（全国）",
	    "age":12
	  }, {
	    "gradeId": 9,
	    "name": "预升初",
	    "age":12
	  }, {
	    "gradeId": 10,
	    "name": "初一",
	    "age":12
	  }, {
	    "gradeId": 11,
	    "name": "初二",
	    "age":12
	  }, {
	    "gradeId": 12,
	    "name": "初三",
	    "age":12
	  }, {
	    "gradeId": 13,
	    "name": "高一",
	    "age":12
	  }, {
	    "gradeId": 14,
	    "name": "高二",
	    "age":12
	  }, {
	    "gradeId": 15,
	    "name": "高三",
	    "age":12
	  }]
	
  }
 }
}
</script>
<!---scoped 修饰符样式作用于-->
<style scoped>

</style>
