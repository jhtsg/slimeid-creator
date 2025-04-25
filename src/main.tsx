import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeWrapper from './ThemeWrapper.tsx'
import DimensionsProvider from './components/contexts/DimensionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DimensionsProvider>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
    </DimensionsProvider>
  </StrictMode>,
)
