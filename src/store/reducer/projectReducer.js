import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATING_PROJECT,
  ERROR_RESPONSE,
} from '../actions/types'

const initialState = {
  loading: false,
  error: null,
  projects: [
    { id: 1, title: 'New Music out', content: 'This is a new music title' },
    {
      id: 2,
      title: 'Come on your',
      content: 'Old Favorite is a new music title',
    },
  ],
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
      console.log(action.payload)
      return {
        ...state,
        projects: action.payload,
      }
    default:
      return state
  }
}
