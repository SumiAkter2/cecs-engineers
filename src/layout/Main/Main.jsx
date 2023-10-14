import { Outlet } from "react-router-dom";
import Header from "../../Component/Shared/Header";
import Footer from "../../Component/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
