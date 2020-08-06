import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'liquid-loading'
import { Store, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppState } from './store/model'
import { AppAction, reducer } from './store/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store: Store<AppState, AppAction> = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
