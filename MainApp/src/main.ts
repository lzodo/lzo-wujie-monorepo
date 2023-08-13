import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Wujie)

app.mount('#app')
