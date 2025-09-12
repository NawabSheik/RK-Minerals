import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fullpage/react-fullpage"
import "./styles/MainPage.css"
import "./styles/Brand.css";
import './index.css'
import "./App.css";
import "./styles/ProductPages.css"
import "./styles/IndustryPages.css"
import "./styles/Cta.css"
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
