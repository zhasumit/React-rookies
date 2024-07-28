import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <Body />
      <Footer />
    </>
  </React.StrictMode>,
)
