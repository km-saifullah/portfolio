import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <main className="bg-mainBg">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
