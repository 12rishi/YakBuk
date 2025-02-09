import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./index.css";
import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import Venture from "./pages/Venture/Venture";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/venture" element={<Venture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
