import type Link from '@afe1-ui/components/link'

import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ALink: typeof Link
  }
}

export {}
