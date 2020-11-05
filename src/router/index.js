import Vue from 'vue'
import VueRouter from 'vue-router'
import location from '../views/location.vue'
import map from '../views/map.vue'
import profile from '../views/profile.vue'
import mystory from '../views/mystory.vue'
import post from '../views/post.vue'
import test from '../views/test.vue'
import three from '../views/3.vue'
import three1 from '../views/3-1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'test',
    component: test,
    children: [
      {
        path: '/three',
        name: 'three',
        component: three
      }
    ]
  },
  {
    path: '/three1',
    name: 'three1',
    component: three1
  },
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
  routes
})

export default router
