import Vue from 'vue'
import VueRouter from 'vue-router'
import location from '../views/location/location.vue'
import map from '../views/location/map.vue'
import profile from '../views/location/profile.vue'
import mystory from '../views/home/mystory.vue'
import post from '../views/home/post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mystory',
    component: mystory
  },
  {
    path: '/post',
    name: 'post',
    component: post
  },
  {
    path: '/location',
    name: 'location',
    component: location
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/map',
    name: 'map',
    component: map
  }

]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        return false
      }
    }
  },
  routes
})

export default router
