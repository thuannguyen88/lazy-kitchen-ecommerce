import { useContext } from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping_bag.svg";

import { DropdownContext } from "../../contexts/dropdown.context";

const CartIcon = () => {
  // use DropdownContext to set up toggling function when cart icon is clicked.
  const { isDropdownOpen, setIsDropdownOpen, cartQuantity } =
    useContext(DropdownContext);

  // dropdown handler function. When cart icon is clicked set isDropdownOpen to the opposite of what it is. So if its true, set it to false. And if its false, set it to true.
  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="cart-icon-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ShoppingCartIcon className="cart-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
