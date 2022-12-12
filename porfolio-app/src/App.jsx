import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/home/Layout";
import Contact from "./components/contact/Contact";
import Landing from "./components/home/Landing";
import HomeContainer from "./components/home/HomeContainer";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContainer />} />
          <Route path="home" element={<HomeContainer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}