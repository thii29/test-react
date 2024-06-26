import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcome from './Welcome'

const root = ReactDOM.createRoot(document.getElementById('root'))
/**
 * <React.StrictMode>
 * <App />
 *</React.StrictMode> */
const element = (
  <div>
    <Welcome name='Tony' age={24} />
    <Welcome name='Shi' age={24} />
  </div>
)
root.render(element)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
