import { useContext } from "react";

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
        {cartItems.map((item)=> <CartItem cartItem={item} key={item.id}/>)}
        <Button buttonType="checkout">CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdownMenu;
