import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categories from './views/Categories.vue'
import requestedCategory from './views/requestedCategory.vue'
// import Programming from './views/Programming.vue'
import subCategory from './views/subCategory.vue'
import Zstore from './views/Zstore.vue'
import ZstoreSub from './views/ZstoreSub.vue'
import Zplayer from './views/Zplayer.vue'
import Zdocs from './views/Zdocs.vue'
import Zdocsrequested from './views/Zdocsrequested.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Zandari',
      component: Home
    },
    {
      path: '/ZCategories',
      name: 'ZCategories',
      component: Categories
    },
    {
      path: '/requestedCategory/:requested',
      name: 'requestedCategory',
      component: requestedCategory
    },
    // {
    //   path: '/Programming',
    //   name: 'Programming',
    //   component: Programming
    // },
    {
      path: '/subCategory/:requested',
      name: 'subCategory',
      component: subCategory
    },
    {
      path: '/Zstore',
      name: 'Zstore',
      component: Zstore
    },
    {
      path: '/ZstoreSub/:requested',
      name: 'ZstoreSub',
      component: ZstoreSub
    },
    {
      path: '/Zplayer',
      name: 'Zplayer',
      component: Zplayer
    },
    {
      path: '/Zplayer:requestedVideo:channelProvider',
      name: 'Zplayer',
      component: Zplayer
    },
    {
      path: '/Zdocs',
      component: Zdocs,
      name: 'zdocs',
    },
    {
      path: '/Zdocsrequested/:requested',
      component: Zdocsrequested,
      name: 'zdoc',
    }


  ]
})
