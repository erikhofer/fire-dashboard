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
import { initalState } from './store/dev'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store: Store<AppState, AppAction> = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware())
)

const persistor = persistStore(store as any)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<liquid-loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
