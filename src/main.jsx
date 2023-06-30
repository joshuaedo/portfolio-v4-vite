import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './main.css'
import ScrollToTop from "./components/smooth-scroll/scrollToTop.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ScrollToTop />
    <App />
  </React.StrictMode>,
)
