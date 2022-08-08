import "./cart-menu-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdownMenu = () => {
  return (
    <div className="cart-menu-container">
      <div className="cart-items">
        <Button buttonType="checkout">CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdownMenu;
