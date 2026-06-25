import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Experiments from './pages/Experiments'

export default function App() {
  return (
    <BrowserRouter basename="/experiments">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/experiments" element={<Experiments />} />
      </Routes>
    </BrowserRouter>
  )
}
