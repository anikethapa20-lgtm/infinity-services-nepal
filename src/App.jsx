import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import OurWork from './pages/OurWork'
import Award from './pages/Award'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/global-authors-award" element={<Award />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
