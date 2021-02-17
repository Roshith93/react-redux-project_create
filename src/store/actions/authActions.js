import { LOGGED_IN, LOGIN_FAILED, SIGNED_OUT, SIGNED_OUT_FAILED } from './types'

export const isSignedIn = (credentials) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => dispatch({ type: LOGGED_IN }))
    .catch((error) => dispatch({ type: LOGIN_FAILED, error }))
}

export const logOut = (payload) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signOut()
    .then(() => dispatch({ type: SIGNED_OUT }))
}
