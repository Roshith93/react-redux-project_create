import { CREATE_PROJECT } from '../actions/types'

const initialState = {
  title: '',
  content: '',
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
      }
    default:
      return state
  }
}
