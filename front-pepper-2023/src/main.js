import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);
app.use(VueRouter);
app.use(VueAxios);
app.mount('#app');