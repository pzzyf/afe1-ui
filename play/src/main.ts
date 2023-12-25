import { createApp } from 'vue'
import Afe1Ui from '../../packages/afe1-ui'
import '@afe1-ui/theme-chalk/src/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(Afe1Ui).mount('#app')
