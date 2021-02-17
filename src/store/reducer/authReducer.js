import {
  LOGGED_IN,
  LOGIN_FAILED,
  SIGNED_OUT,
  SIGNED_OUT_FAILED,
} from '../actions/types'

const initialState = {
  // email: '',
  // password: '',
  authError: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      console.log('loggin Success')
      return {
        ...state,
        authError: null,
      }
    case LOGIN_FAILED:
      console.log('loggin failed', action.error)
      return {
        ...state,
        authError: action.error,
      }
    case SIGNED_OUT:
      console.log('sinedout')
      return {
        ...state,
      }
    case SIGNED_OUT_FAILED:
      console.log(action.error)
      return {
        ...state,
      }
    default:
      return state
  }
}
