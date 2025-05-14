import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/home/Estudo/estudo_react/src/index.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
