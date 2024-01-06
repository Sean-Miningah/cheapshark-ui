import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css'

import { store } from './app/store';
import { ThemeProvider } from '@/components/theme-provider';
import Deals from './routes/Deals';
import DealPage from '@/routes/DealPage';
import Games from '@/routes/Games';
import Game from '@/routes/Game/id';
import Layout from './routes/Layout';
import Error from './routes/Error';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index path="/" element={<Deals />} />
              <Route path="/deal/:id" element={<DealPage />} />
              <Route path="/games" element={<Games />} />
              <Route path="/game/:id" element={<Game />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
)
