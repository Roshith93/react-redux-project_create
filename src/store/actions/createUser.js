import { SIGN_UP, SIGN_UP_ERROR } from './types'

export const createUser = (payload) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      return firestore
        .collection('users')
        .doc(userCredential?.user?.uid)
        .set({
          firstName: payload.firstName,
          lastName: payload.lastName,
          initial: payload.firstName[0] + payload.lastName[0],
        })
        .then(() => {
          dispatch({ type: SIGN_UP })
        })
        .catch((error) => dispatch({ type: SIGN_UP_ERROR, error }))
    })
    .catch((error) => dispatch({ type: SIGN_UP_ERROR, error }))
}
