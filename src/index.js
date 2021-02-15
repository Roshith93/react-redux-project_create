import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getFireStore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './store/reducer/rootReducer'
import {firebaseConfig } './config/firebaseConfig'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const thunkMiddleware = applyMiddleware(
  thunk.withExtraArgument({ getFireStore, getFirebase })
)
const store = createStore(
  rootReducer,
  composeEnhancers(thunkMiddleware, reduxFirestore(firebaseConfig), reactReduxFirebase(firebaseConfig))
)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
