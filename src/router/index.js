import { createApp } from 'vue'
import App from '@/App'
import Router, { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home'
import City from '@/components/City'
import Detail from '@/components/Detail'

createApp(App).use(Router)

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:title',
      name: 'Detail',
      component: Detail
    }
  ],

  scrollBehavior (to, from, savePosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
