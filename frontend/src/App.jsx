import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-stone-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}
