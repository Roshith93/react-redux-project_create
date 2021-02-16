import firebase from 'firebase/app'
import 'firebase/firestore' // =  db
import 'firebase/auth' // = authentication

const config = {
  apiKey: 'AIzaSyDQl783kX4kn0aZr2jdmw7v23sw8l2Jqkc',
  authDomain: 'react-redux-firebase-netninja.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-netninja.firebaseio.com',
  projectId: 'react-redux-firebase-netninja',
  storageBucket: 'react-redux-firebase-netninja.appspot.com',
  messagingSenderId: '599551367451',
  appId: '1:599551367451:web:332210da1703fead37dbbe',
}

firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export default firebase
