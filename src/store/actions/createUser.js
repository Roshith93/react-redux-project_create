import { SIGN_UP } from './types'

export const createUser = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  }
}
