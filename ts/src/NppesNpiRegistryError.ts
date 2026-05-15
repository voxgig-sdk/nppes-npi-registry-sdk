
import { Context } from './Context'


class NppesNpiRegistryError extends Error {

  isNppesNpiRegistryError = true

  sdk = 'NppesNpiRegistry'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NppesNpiRegistryError
}

