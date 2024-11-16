import { createRouter, createWebHistory } from 'vue-router'
import { loginRoutes } from '~/route/routes/login.routes'

const routes = [...loginRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
