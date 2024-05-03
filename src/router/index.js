import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/User/HomeView.vue'
import VendorView from '../views/Vendor/VendorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/User/AboutView.vue')
    }
  ]
})

export default router
