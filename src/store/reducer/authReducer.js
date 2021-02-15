import { LOGGED_IN } from '../actions/types'

const initialState = {
  email: '',
  password: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
      return state
  }
}
