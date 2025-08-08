import { createRouter, createWebHistory } from 'vue-router'
import Users from '../pages/Users.vue'

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: Users, name: 'users' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
