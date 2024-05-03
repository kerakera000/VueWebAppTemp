import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/User/HomeView.vue'
import VendorView from '../views/Vendor/VendorView.vue'
import EditPage from '../views/Vendor/EditPage/EditPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // メインページ
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/User/AboutView.vue')
    },

    // 管理者ページ
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorView
    },

    {
      path: '/editpage',
      name: 'editpage',
      component: EditPage
    },
  ]
})

export default router
