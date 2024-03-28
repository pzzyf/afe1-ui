import { withInstall, withNoopInstall } from '@afe1-ui/utils'

import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const ARadio = withInstall(Radio, {
  RadioGroup,
})
export default ARadio
export const ARadioGroup = withNoopInstall(RadioGroup)
