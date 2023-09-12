import React from "react";
import { navElements } from "./Header";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <button onClick={() => setIsSidebarOpen(false)}>X</button>
      <ul>
        {navElements.map(({ label, route }) => {
          if (label === "Menu") return null;
          return (
            <li
              key={route}
              onClick={() => {
                navigate(route);
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
