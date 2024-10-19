import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from './Header.jsx'
import {Nav} from './Navbar.jsx'
import {Container} from "./Container.jsx"
import {Botones} from './Botones.jsx'
import {Footer} from "./Footer.jsx"

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav/>
    <Container/>
    <Botones/>
    <Footer/>
  
  </StrictMode>,
)
