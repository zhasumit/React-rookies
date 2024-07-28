import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Student from './Student'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Student name="Spongebob" age={30} isStudent={true} />
    <Student name="Patrick" age={34} isStudent={false} />
    <Student name="Squidward" age={44} isStudent={false} />
    <Student name="Mandy" age={14} isStudent={true} />
  </React.StrictMode>,
)