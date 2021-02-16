import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { projectReducer } from './projectReducer'
import { createUser } from './createUserReducer'
import { firestoreReducer } from 'redux-firestore'

export const rootReducer = combineReducers({
  auth: authReducer,
  projectReducer,
  createUser,
  firestore: firestoreReducer,
})
