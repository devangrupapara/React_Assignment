import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Fakeapi from './Fakeapi.jsx'
import ApiJsonServer from './ApiJsonServer.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    {/* <App /> */}
    {/* <Fakeapi/> */}
    <ApiJsonServer/>
    </BrowserRouter>
  // </StrictMode>,
)
