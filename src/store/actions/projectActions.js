import axios from 'axios'
import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATING_PROJECT,
  ERROR_RESPONSE,
} from './types'

export const createProject = (payload) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  console.log(payload)
  const firestore = getFirestore()
  dispatch({ type: CREATING_PROJECT })
  firestore
    .collection('projects')
    .add({
      ...payload,
      authorFirstName: 'LOl',
      authorLastName: 'Rad',
      autorId: 12345,
      createdAt: new Date(),
    })
    .then(() => dispatch({ type: CREATE_PROJECT, payload }))
    .catch((error) => dispatch({ type: ERROR_RESPONSE, error }))
}

export const getProjects = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
  dispatch({ type: FETCH_PROJECTS, response })
}
