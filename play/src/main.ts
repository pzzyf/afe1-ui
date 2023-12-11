import { createApp } from 'vue'
import './style.css'
import Afe1Ui from '@afe1-ui/components'
import App from './App.vue'

const app = createApp(App)
app.use(Afe1Ui).mount('#app')
