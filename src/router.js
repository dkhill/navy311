import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/homepage.vue'
import ResourcePage from './components/resources.vue'
import FAQsPage from './components/faqs.vue'
import ServicesPage from './components/service.vue'
import NIAPSPage from './components/niaps.vue'
import TextingPage from './components/texting.vue'
import FlankSpeedPage from './components/flankspeed.vue'
import PublicDocuments from './components/publicDocuments.vue'

Vue.use(Router)
/*function lazyLoad(view){
  return() => import(`@/components/${view}.vue`)
}*/

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/resources',
      name: 'ResourcePage',
      component: ResourcePage
    },
    {
      path: '/faqs',
      name: 'FAQsPage',
      component: FAQsPage
    },
    {
      path: '/flankspeed',
      name: 'FlankSpeedPage',
      component: FlankSpeedPage 
    },
    {
      path: '/service',
      name: 'ServicesPage',
      component: ServicesPage
    },
    {
      path: '/niaps',
      name: 'NIAPSPage',
      component: NIAPSPage
    },
    {
      path: '/texting',
      name: 'TextingPage',
      component: TextingPage
    },
    {
      path: '/publicdocuments',
      name: 'PublicDocuments',
      component: PublicDocuments
    }
  ]
})
