import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./index.css";
import Home from "./pages/Home/Home";
import HorizontalButton from "./components/UI/About/HorizontalButton/HorizontalButton";
import People from "./components/UI/About/Detail/People";
import Background from "./components/layout/Background";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
