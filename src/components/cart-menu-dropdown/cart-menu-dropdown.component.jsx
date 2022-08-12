import { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../../contexts/dropdown.context";

import "./cart-menu-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdownMenu = () => {
  const { cartItems } = useContext(DropdownContext);

  // render each cartItem component from carItems array
  return (
    <div className="cart-menu-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
        <Link className="checkout-link" to="/checkout">
          <Button buttonType="checkout">CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdownMenu;
