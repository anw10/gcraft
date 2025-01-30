import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/repair',
      name: 'repair',
      component: () => import('../views/RepairCustom.vue')
    },
    {
      path: '/craft',
      name: 'craftWork',
      component: () => import('../views/CraftWork.vue')
    },
    {
      path: '/recTech',
      name: 'recTech',
      component: () => import('../views/RecTech.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductList.vue')
    },
    {
      path: '/equipment',
      name: 'eqList',
      component: () => import('../views/Equipment.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue')
    }
  ]
})

export default router
