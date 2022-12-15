import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/home/Layout'
import Contact from './components/contact/Contact'
import About from './components/about/About'

import HomeContainer from './components/home/HomeContainer'
import Footer from './components/footer/Footer'
import Page404 from './components/404 not found/Page404'

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="home" element={<HomeContainer />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='*' element={<Page404 />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
