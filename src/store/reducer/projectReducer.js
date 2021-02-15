import { CREATE_PROJECT } from '../actions/types'

const initialState = {
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
        title: action.payload.title,
        content: action.payload.content,
      }
    default:
      return state
  }
}
