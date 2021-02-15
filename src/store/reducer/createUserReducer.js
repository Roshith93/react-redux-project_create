import { SIGN_UP } from '../actions/types'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export const createUser = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        password: action.payload.password,
      }
    default:
      return state
  }
}
