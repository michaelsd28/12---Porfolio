
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/home/Layout";
import Contact from "./components/contact/Contact";
import About from "./components/about/About"

import HomeContainer from "./components/home/HomeContainer";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomeContainer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<HomeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}