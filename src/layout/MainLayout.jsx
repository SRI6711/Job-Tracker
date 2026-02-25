import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {

  return (
    <div className="layout">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;