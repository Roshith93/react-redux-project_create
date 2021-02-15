import axios from 'axios'
import { CREATE_PROJECT, FETCH_PROJECTS } from './types'

export const createProject = (payload) => {
  return {
    type: CREATE_PROJECT,
    payload,
  }
}

export const getProjects = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
  dispatch({ type: FETCH_PROJECTS, response })
}
