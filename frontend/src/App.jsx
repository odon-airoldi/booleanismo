
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import AppLayout from './layouts/AppLayout'
import AppHomePage from './pages/AppHomePage'
import AppContactPage from './pages/AppContactPage'
import { GlobalProvider } from './context/GlobalContext'

import './App.css'


function App() {

  return (
    <>

      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<AppHomePage />} />
              <Route path="/contact" element={<AppContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
