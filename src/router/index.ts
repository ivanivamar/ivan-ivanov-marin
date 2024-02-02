import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Ivan Ivanov Marin - Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'Ivan Ivanov Marin - About me',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = <string>to.name
  next()
})

export default router
