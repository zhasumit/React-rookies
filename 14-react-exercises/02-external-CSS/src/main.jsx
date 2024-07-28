import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Button from './Button/Button.jsx'
import Btnexternal from './Btnexternal.jsx'
import BtnInline from './BtnInline.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button />
    <Btnexternal />
    <BtnInline />
  </React.StrictMode>,
)
