import { createApp } from 'vue'
import Afe1Ui from '@afe1-ui/components'
import '@afe1-ui/theme-chalk/src/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(Afe1Ui).mount('#app')
