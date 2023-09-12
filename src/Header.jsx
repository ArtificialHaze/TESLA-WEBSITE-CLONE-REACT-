import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRecoilValue } from "recoil";
import { cartState } from "./cartItems";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";

export const navElements = [
  {
    label: "TESLA",
    route: "/",
    style: { marginRight: "auto" },
  },
  {
    label: "Model S",
    route: "/model_s",
  },
  {
    label: "Model X",
    route: "/model_x",
  },
  {
    label: "Cybertruck",
    route: "/cybertruck",
  },
  {
    label: "Menu",
    route: null,
    style: { marginLeft: "auto" },
  },
  { label: "Shop", route: "/shop" },
  { label: <ShoppingCartIcon />, route: "/cart" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cartItems = useRecoilValue(cartState);

  const onClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {isSidebarOpen && (
        <>
          <Backdrop onClick={onClick} />
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </>
      )}

      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => {
            if (route === "cart") {
              return (
                <li
                  onClick={() => {
                    navigate(`${route}`);
                  }}
                  key={route}
                  style={style}
                >
                  <span className="cart-items-count">{cartItems.length}</span>
                  {label}
                </li>
              );
            }
            return (
              <li
                style={style}
                key={label}
                onClick={() => {
                  if (label === "Menu") {
                    setIsSidebarOpen(true);
                  } else {
                    navigate(`${route}`);
                  }
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
