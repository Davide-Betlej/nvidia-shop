import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Nav.css";
import Drawer from "@mui/material/Drawer";
import { React, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";

const Nav = (props) => {
  const { cartItems } = props;
  const [openSidebar, setOpenSidebar] = useState(false);

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.ammount, 0);

  return (
    <div className="navWrapper">
      <nav className="navigation">
        <div className="logoH1">
          <Link to="/nvidia-shop">
            <img src={`${logo}`} alt="" style={{ height: "75px" }} />
          </Link>
        </div>
        <div className="navListItems">
          <ul>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div className="cartButton">
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <ShoppingBagIcon
              className="navIcon"
              onClick={() => setOpenSidebar(true)}
            />
          </Badge>
        </div>
        <Drawer
          open={openSidebar}
          anchor="right"
          onClose={() => setOpenSidebar(false)}
        >
          <div>Test</div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Nav;
