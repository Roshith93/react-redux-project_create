import { LOGGED_IN, LOGIN_FAILED } from './types'

export const isSignedIn = (credentials) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((res) => dispatch({ type: LOGGED_IN, res }))
    .catch((error) => dispatch({ type: LOGIN_FAILED, error }))
}
