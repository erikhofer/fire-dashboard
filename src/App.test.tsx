import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { Store, createStore } from 'redux'
import { AppState } from './store/model'
import { AppAction, reducer } from './store/reducer'

const store: Store<AppState, AppAction> = createStore(reducer)

test('app renders', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
