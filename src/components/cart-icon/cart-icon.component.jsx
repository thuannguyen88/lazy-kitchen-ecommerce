import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping_bag.svg";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingCartIcon className="cart-icon" />
      <span className="item-count">1</span>
    </div>
  );
};

export default CartIcon;
