import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvidor } from './Context/ThemeProvidor.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvidor>
      <App />
    </ThemeProvidor>
  </StrictMode>,
)
