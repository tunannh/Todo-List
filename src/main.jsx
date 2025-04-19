import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import allReducers from './reducer/index.jsx'
import { Provider } from 'react-redux'

const store = createStore(allReducers);

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)
