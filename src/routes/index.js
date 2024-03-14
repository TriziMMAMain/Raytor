import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Products from '../views/ProductsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home page',
        component: HomePage,
    },
    {
        path: '/products/',
        name: 'Products',
        component: Products
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;