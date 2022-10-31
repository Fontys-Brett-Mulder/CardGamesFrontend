import { createApp } from 'vue'
import router from './plugins/router'
import App from '@/App.vue'
import "./icons";

// Import css
import './styles/main.css'
import './styles/defaultStyles.css'

// Icons
import {OhVueIcon} from "oh-vue-icons";

createApp(App).component("v-icon", OhVueIcon).use(router).mount('#app')
