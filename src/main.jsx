import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EvenHandeling from './EvenHandeling.jsx'
import { LiftState } from './components/LiftState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <EvenHandeling/> */}

    <LiftState/>
  </StrictMode>
)
