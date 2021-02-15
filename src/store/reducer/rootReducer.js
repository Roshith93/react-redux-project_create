import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { projectReducer } from './projectReducer'
import { createUser } from './createUserReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  projectReducer,
  createUser,
})
