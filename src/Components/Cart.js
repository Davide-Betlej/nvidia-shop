import React, { useState } from "react";

const Cart = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log(openSidebar);
  };

  return <button onClick={handleSidebar}>Test</button>;
};

export default Cart;
