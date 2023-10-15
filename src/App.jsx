import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />

      {/* <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}

      <Routes>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={450} classNames="fade">
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </CSSTransition>
        </TransitionGroup>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
