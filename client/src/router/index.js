import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Furniture from '../views/Furniture.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/furniture',
    name: 'Furniture',
    component: Furniture
  },
  {
    path: '/furniture/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
