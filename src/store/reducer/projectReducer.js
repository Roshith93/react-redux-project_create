import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATING_PROJECT,
  ERROR_RESPONSE,
} from '../actions/types'

const initialState = {
  loading: false,
  error: null,
  projects: [],
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        loading: false,
        title: action.payload.title,
        content: action.payload.content,
      }
    case CREATING_PROJECT:
      return { ...state, loading: true }
    case ERROR_RESPONSE:
      return { ...state, error: action.error }
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    default:
      return state
  }
}
