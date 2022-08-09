import { useContext } from "react";

import { DropdownContext } from "../../contexts/dropdown.context";

import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(DropdownContext);

  // destructure of the product what I need
  const { name, price, imageUrl } = product;

  // when use clicks "add to cart" button, it fires the function to add item to cart
  // for readability and easier to optimise, instead of being nested in jsx, store onClick addItemToCart functionality to a variable
  const addToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button onClick={addToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
