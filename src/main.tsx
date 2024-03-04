import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'

import { Refine } from '@refinedev/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Refine>
      <RouterProvider router={router} />
    </Refine>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
