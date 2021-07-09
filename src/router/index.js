/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-05 21:46:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-05 22:03:19
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
