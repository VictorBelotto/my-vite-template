import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col'>
      <AppRoutes/>
    </div>
  </React.StrictMode>,
)
