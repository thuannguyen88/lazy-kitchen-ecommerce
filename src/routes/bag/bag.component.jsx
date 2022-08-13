import "./bag.styles.scss";

import BagCartItem from "../../components/bag-cart-item/bag-cart-item.component";
import BagCartTotal from "../../components/bag-cart-total/bag-cart-total.component";

import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

// map over the cartItems data and render all cart items to the mybag page

// calculate the total price of all items in cartItems and render on the mybag page
// set up a state that tracks the total amount in cartItems
// set up functionality using reduce to find total

// each time use clicks on more or less than icon cartItems quantity will either increase or decrease by 1

// connect the delete 'X' so when clicked the item is removed from cartItems
  // filter out cartItems where id !== so you get an array with all items except the one we're trying to remove

const Bag = () => {
  // pull in the states and setter functions from DropdownContext
  const { cartItems, cartTotal } = useContext(DropdownContext);

  // why was we getting error of undefined reading map after onClick increment?
  return (
    <section className="section-container">
      <div className="my-bag-container">
        <div className="bag-item-container">
          <div className="bag-header">
            <h3 className="heading">MY BAG</h3>
          </div>
          
          {cartItems?.map((cartItem) => (
            <BagCartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="bag-total-wrapper">
          <BagCartTotal cartTotal={cartTotal} />
        </div>
      </div>
    </section>
  );
};

export default Bag;
