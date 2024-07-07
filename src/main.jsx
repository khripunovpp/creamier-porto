import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import {atom} from "jotai";

import {toastConfig} from 'react-simple-toasts'

toastConfig({
    theme: 'light',
})
export const dialog = atom(false)

const hasCalcInURL = window.location.search.includes('calc')
export const calcMode = atom(hasCalcInURL)
export const cartItems = atom({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
