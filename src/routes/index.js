import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Products from '../views/ProductsPage.vue'
import Product from '../components/ProdusctsIdDirectory/ProductsIdComponent.vue'
import ProductCatalog from '../components/ProdusctsIdDirectory/ProductIdCatalogComponent.vue'
import ProductId from '../components/ProdusctsIdDirectory/ProductId.vue'
import NotFound404Page from '../views/NotFound404Page.vue'
import AboutUs from '../components/AboutUsComponent.vue'

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
    },
    {
        path: '/product/',
        name: 'Product',
        component: Product,
        children: [
            {
                path: 'catalog/',
                name: 'ProductCatalog',
                component: ProductCatalog
            },
            {
                path: 'id/:id/',
                name: 'ProductId',
                component: {
                    ProductId: ProductId,
                },
            }
        ]
    },
    {
        path: '/about/',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/error-not-found/'
    },

    {
        path: '/error-not-found/',
        name: 'NotFoundPage404',
        component: NotFound404Page,
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;