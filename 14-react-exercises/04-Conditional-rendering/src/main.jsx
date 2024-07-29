import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserGreet from './UserGreet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserGreet isLoggedIn={false} userName="Sumant" />
    <UserGreet isLoggedIn={true} userName="Sumit" />
    <UserGreet isLoggedIn={true} />
    <UserGreet />
  </React.StrictMode>,
)
