import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Nav.css";
import Drawer from "@mui/material/Drawer";
import { React, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";

const Nav = (props) => {
  const {
    cartItems,
    handleAddToCard,
    getTotalItems,
    handleRemoveFromCart,
    calculateTotal,
  } = props;
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
          className="drawer"
        >
          <h2 className="yourShoppingCart">Your shopping cart</h2>
          {cartItems.length === 0 ? <p>No items in cart.</p> : null}
          {cartItems.map((item) => (
            <div key={item.id} className="drawerProductDiv">
              <div>
                <h3>{item.name}</h3>
                <div className="information">
                  <p>
                    <b>Price:</b> ${item.price}
                  </p>
                  <p>
                    <b>Total:</b> ${(item.ammount * item.price).toFixed(2)}
                  </p>
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
                  <b>
                    <p>{item.ammount}</p>
                  </b>
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
              </div>
              <img src={item.image} alt={item.name} className="drawerProduct" />
            </div>
          ))}
          {cartItems.length === 0 ? null : (
            <div className="checkoutButtonWrapper">
              <div className="totalAmount">
                <h2>Total Amount: ${calculateTotal(cartItems).toFixed(2)}</h2>
              </div>
              <Button
                variant="contained"
                color="success"
                size="large"
                className="checkoutButton"
              >
                Checkout
              </Button>
            </div>
          )}
        </Drawer>
      </nav>
    </div>
  );
};

export default Nav;
