import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";

import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Project from "./Component/Project/Project";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
