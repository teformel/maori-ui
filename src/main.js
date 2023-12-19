import { createApp } from 'vue'
import App from './App.vue'
import MrButton from './components/button.vue'

createApp(App).component(MrButton.name, MrButton).mount('#app')
