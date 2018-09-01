import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Android from '@/components/Android'
import Design from '@/components/Design'
import Hillarious from '@/components/Hillarious'
import Humor from '@/components/Humor'
import Javascript from '@/components/Javascript'
import SEO from '@/components/SEO'
import UIUX from '@/components/UIUX'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/design',
    name: 'Design',
    component: Design
    },
    {
      path: '/android',
      name: 'Android',
      component: Android
    },
    {
    path: '/hillarious',
    name: 'Hillarious',
    component: Hillarious
    },
    {
    path: '/humor',
    name: 'Humor',
    component: Humor
    },
    {
    path: '/javascript',
    name: 'Javascript',
    component: Javascript
    },
    {
      path: '/seo',
      name: 'SEO',
      component: SEO
    },
    {
      path: '/uiux',
      name: 'UIUX',
      component: UIUX
    }
  ]
})
