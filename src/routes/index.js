import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Catalog from '../views/CatalogPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home page',
        component: HomePage,
    },
    {
        path: '/catalog/',
        name: 'Catalog',
        component: Catalog
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;