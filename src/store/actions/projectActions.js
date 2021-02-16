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

export const getProjects = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore()
  const response = await firestore.collection('projects').get()
  const mappedResponse = response.docs.map((doc) => doc.data())

  dispatch({ type: FETCH_PROJECTS, payload: mappedResponse })
}
