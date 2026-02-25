import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/applications">Applications</NavLink>
      <NavLink to="/questions">Questions</NavLink>
      <NavLink to="/skills">Skills</NavLink>
    </div>
  );
};

export default Sidebar;