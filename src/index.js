import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import createStore from './store'
import AppRouter from './components/AppRouter'
import './index.css'

const store = createStore()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
