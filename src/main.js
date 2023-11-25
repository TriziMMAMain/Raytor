import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// - router
import router from './routes'

// - app
const app = createApp(App)

// - toast
import Toast from './plugins/toast.js'

// Vuetify
import { vuetify } from "./plugins/vuetify.js";

// -
app.use(createPinia())
app.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 2,
    newestOnTop: true
})
router.afterEach(() => {
    requestAnimationFrame(() => {
        const top = document.getElementById('app').offsetTop;
        window.scrollTo({
            top,
            behavior: 'auto',
            block: 'start',
        });
    });
});
app.use(router)
app.use(vuetify)
app.mount('#app')