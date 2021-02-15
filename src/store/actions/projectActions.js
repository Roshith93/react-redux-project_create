import { CREATE_PROJECT } from './types'

export const createProject = (payload) => {
  return {
    type: CREATE_PROJECT,
    payload,
  }
}
