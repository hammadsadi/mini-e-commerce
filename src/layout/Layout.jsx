import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div>
        {/* Dynamic Content */}
        <div>
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
