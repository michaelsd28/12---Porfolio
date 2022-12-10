import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/home/Layout";
import Contact from "./components/contact/Contact";
import Navbar from "./components/home/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navbar />} />
          <Route path="blogs" element={<Contact />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}