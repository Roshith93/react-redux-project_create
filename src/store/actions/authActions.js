import { LOGGED_IN } from './types'

export const isSignedIn = (payload) => {
  return {
    type: LOGGED_IN,
    payload,
  }
}
