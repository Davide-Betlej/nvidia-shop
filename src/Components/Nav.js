import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Nav.css";
import Drawer from "@mui/material/Drawer";
import { React, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";

const Nav = (props) => {
  const { cartItems, handleAddToCard, getTotalItems, handleRemoveFromCart } =
    props;
  const [openSidebar, setOpenSidebar] = useState(false);

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
          <h2>Your shopping cart</h2>
          {cartItems.length === 0 ? <p>No items in cart.</p> : null}
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.ammount * item.price).toFixed(2)}</p>
              </div>
              <div className="buttons">
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  {" "}
                  -{" "}
                </Button>
                <p>{item.ammount}</p>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => handleAddToCard(item)}
                >
                  {" "}
                  +{" "}
                </Button>
              </div>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </Drawer>
      </nav>
    </div>
  );
};

export default Nav;
