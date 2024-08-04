import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './fonts/Copperplate.ttf'
import ScrollToTop from './hooks/scrollToTop'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <ScrollToTop />
  </BrowserRouter>
  // </React.StrictMode>,
)
