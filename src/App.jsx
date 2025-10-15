import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import { TutorProfilePage } from './pages/TutorProfilePage'
import { BookingPage } from './pages/BookingPage'
import { DashboardPage } from './pages/DashboardPage'
import { Layout } from './components/Layout'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/tutors/:tutorId" element={<TutorProfilePage />} />
          <Route path="/booking/:tutorId" element={<BookingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


