import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import( '../views/ProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/LoginView.vue')
  },
  {
   path: '/pathMatch(.*)*',
   name: 'NotFoundPage',
   component:()=> import ('../views/NotFoundPage.vue')
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component:()=> import ('@/components/AddProduct.vue')
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
