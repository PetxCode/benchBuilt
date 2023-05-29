import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomeScreen from './pages/HomeScreen.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  </React.StrictMode>,
)
