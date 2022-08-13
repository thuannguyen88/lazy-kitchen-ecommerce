import "./bag-cart-item.styles.scss";

import { useContext } from "react";

import Button from "../button/button.component";
import { ReactComponent as FaveIcon } from "../../assets/fave_icon.svg";
import { DropdownContext } from "../../contexts/dropdown.context";

const BagCartItem = ({ cartItem }) => {
  const { updateCartItemQuantity, removeCartItem } =
    useContext(DropdownContext);

  // destructure variables to use from cartItem prop
  const { name, imageUrl, price, quantity } = cartItem;

  // for readability and easier to optimise, instead of being nested in jsx, store onClick addItemToCart functionality to a variable
  const updateCartQuantity = (option) => {
    try {
      updateCartItemQuantity(cartItem, option);
    } catch (err) {
      console.log(err);
    }
    console.log(cartItem, "cartItem");
    console.log(option, "option");
  };

  const removeItemFromCart = () => removeCartItem(cartItem);

  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} className="item-image" />

      <div className="item-description">
        <span className="item-description-price">£{price}.00</span>
        <span className="item-description-name">{name}</span>
        <div className="item-quantity-wrapper">
          <span className="item-description-quantity">
            Qty{" "}
            <div className="counter-container">
              <Button
                onClick={() => updateCartQuantity("decrement")}
                buttonType="counter"
              >{`- `}</Button>
              {quantity}
              <Button
                onClick={() => updateCartQuantity("increment")}
                buttonType="counter"
              >{`  +`}</Button>
            </div>
          </span>
        </div>

        <Button buttonType="save">
          <FaveIcon className="favourite-icon" fill="red" />
          Save for later
        </Button>
      </div>
      <div className="delete-item">
        <Button onClick={removeItemFromCart}>X</Button>
      </div>
    </div>
  );
};

export default BagCartItem;
