import Vue from 'vue'
import Router from 'vue-router'
import Todoitem from '@/components/Todoitem'
import UserList from '@/components/UserList'
import UserItem from '@/components/UserItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Todoitem
    },
    {
      path: '/UserList',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/UserItem',
      name: 'UserItem',
      component: UserItem
    }
  ]
})
