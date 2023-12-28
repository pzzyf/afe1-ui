// import type { auPropInput } from './type'
import type { ComponentObjectPropsOptions, PropType } from 'vue'

export const definePropType = <T>(val: any): PropType<T> => val

export const booleanProp = {
  type: Boolean,
  default: null,
}

type Afe1Props<T> = {
  [P in keyof T]: T[P] extends PropType<infer I>
    ? PropType<I & object>
    : T[P] extends { type: PropType<infer I> }
    ? PropType<I & object>
    : T[P]
}

export type Expand<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

export function buildProps<T extends ComponentObjectPropsOptions>(props: T) {
  const common = {
    inherit: booleanProp,
  }

  return Object.freeze({ ...common, ...props }) as Expand<
    Afe1Props<typeof common & T>
  >
}
