import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  // destructure of the product what I need
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;