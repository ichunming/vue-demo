import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login';
import Home from '@/components/home/Home';

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      //name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      //name: 'HelloWorld',
      component: Home
    },
    {
      path: '/login',
      //name: 'Login',
      component: Login
    }
  ]
})
