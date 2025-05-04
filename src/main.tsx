import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global/styles/baseStyle.css"
import { CssBaseline } from '@mui/material'
import { AppRouter } from '@global/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <AppRouter />
  </StrictMode>,
)