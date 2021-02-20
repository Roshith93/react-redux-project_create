import {
  LOGGED_IN,
  LOGIN_FAILED,
  SIGNED_OUT,
  SIGNED_OUT_FAILED,
  SIGN_UP,
  SIGN_UP_ERROR,
} from '../actions/types'

const initialState = {
  // email: '',
  // password: '',
  authError: null,
  error: null,
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

    case SIGN_UP:
      console.log(action.payload)
      return { ...state }

    case SIGN_UP_ERROR:
      console.log(action.error)
      return { ...state, error: action.error }
    default:
      return state
  }
}
