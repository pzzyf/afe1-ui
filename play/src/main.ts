import { createApp } from 'vue'
import './style.css'
import Afe1Ui from '../../packages/afe1-ui'
import App from './App.vue'

const app = createApp(App)
app.use(Afe1Ui).mount('#app')
