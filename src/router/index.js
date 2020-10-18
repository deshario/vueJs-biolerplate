import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Employees from '@/components/Employees'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
