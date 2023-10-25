import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
app.component('scroll-parallax', ScrollParallax);
