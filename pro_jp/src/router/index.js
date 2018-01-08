import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brand from '@/components/brand'
import Type from '@/components/type'
import Cart from '@/components/cart'
import Mine from '@/components/mine'
import Special from '@/components/special'
import Goods from '@/components/goods'
import Brand_List from '@/components/brand_list'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      redirect:'/home/special',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/home/special',
      children:[
        {
          path:"special", // /film/comingsoon
          component:Special
        },
        {
          path:"goods", // /film/nowplaying
          component:Goods
        },
      ]
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/brand_list',
      name: 'Brand_List',
      component: Brand_List
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '*',
      redirect:'/home/special',
    }
  ]
})
