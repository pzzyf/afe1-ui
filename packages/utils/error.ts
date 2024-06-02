import { isString } from './types'

class Afe1UiError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'Afe1UiError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new Afe1UiError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new Afe1UiError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
