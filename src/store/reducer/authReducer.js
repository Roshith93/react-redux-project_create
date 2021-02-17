import { LOGGED_IN, LOGIN_FAILED } from '../actions/types'

const initialState = {
  // email: '',
  // password: '',
  authError: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      console.log('loggin Success', action.res)
      return {
        ...state,
        authError: null,
      }
    case LOGIN_FAILED:
      console.log('loggin failed', action.error)
      return {
        ...state,
        authError: 'error',
      }
    default:
      return state
  }
}
