import { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../../contexts/dropdown.context";

import "./cart-menu-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdownMenu = () => {
  const { cartItems, setIsDropdownOpen, isDropdownOpen } =
    useContext(DropdownContext);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  // render each cartItem component from carItems array
  return (
    <div
      className="cart-menu-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
        <Link className="view-bag-link" to="/checkout">
          <Button buttonType="checkout">VIEW BAG</Button>
        </Link>
        <Link className="checkout-link" to="/checkout">
          <Button buttonType="secondary">CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdownMenu;
