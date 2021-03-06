import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './store/reducer/rootReducer'
import firebase from './config/firebaseConfig'

const thunkMiddleware = applyMiddleware(
  thunk.withExtraArgument({ getFirebase, getFirestore })
)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  compose(
    thunkMiddleware,
    reactReduxFirebase(firebase, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
    reduxFirestore(firebase)
  )
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
