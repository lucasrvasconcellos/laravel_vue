import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from '../pages/UsersPage.vue'

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: UsersPage, name: 'users' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
