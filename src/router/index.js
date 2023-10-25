import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'


const routes = [
  {
    path: '/',
    name: 'Public',
    component: DefaultLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {layout: 'default'},
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
