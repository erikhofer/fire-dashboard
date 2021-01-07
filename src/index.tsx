import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
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
import reportWebVitals from './reportWebVitals'
import { AuthProvider, session } from './services/auth'
import { initSoukai } from './services/soukai'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProjectProvider } from './services/project'

initSoukai(session.fetch as any)

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

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ProjectProvider>
          <Provider store={store}>
            <PersistGate loading={<liquid-loading />} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </ProjectProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
