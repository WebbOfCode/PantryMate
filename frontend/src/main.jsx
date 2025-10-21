import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ProfilesProvider } from './context/ProfilesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProfilesProvider>
        <App />
      </ProfilesProvider>
    </BrowserRouter>
  </StrictMode>,
)
