import { withInstall } from '@afe1-ui/utils'
import Switch from './src/switch.vue'

// 通过 withInstall 方法给 Button 添加了一个 install 方法
const ASwitch = withInstall(Switch)

// 可以通过 app.use 来使用，也可以通过 import 方式单独使用
export default ASwitch
