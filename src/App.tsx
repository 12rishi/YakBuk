import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./index.css";
import { lazy, Suspense } from "react";
import Spinner from "./components/layout/Spinner";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

const Venture = lazy(() => import("./pages/Venture/Venture"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const Menu = lazy(() => import("./pages/Menu/Menu"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/venture" element={<Venture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
