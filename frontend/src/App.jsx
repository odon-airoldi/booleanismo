
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import { TimeProvider } from './context/TimeContext'
import AppLayout from './layouts/AppLayout'
import AppHomePage from './pages/AppHomePage'
import AppContactPage from './pages/AppContactPage'
import AppProjectsPage from './pages/AppProjectsPage'
import AppProjectPage from './pages/AppProjectPage'


import './App.css'


function App() {

  return (
    <>

      <GlobalProvider>
        <TimeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<AppHomePage />} />
                <Route path="/contact" element={<AppContactPage />} />
                <Route path="/projects" element={<AppProjectsPage />} />
                <Route path="/projects/:id" element={<AppProjectPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TimeProvider>
      </GlobalProvider>
    </>
  )
}

export default App
