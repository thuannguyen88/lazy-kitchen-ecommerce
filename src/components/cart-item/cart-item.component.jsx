import "./cart-item.styles.scss";



const CartItem = ({ cartItem }) => {


  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-total-price">
          {quantity} * ${price}
        </span>
      </div>

     
    </div>
  );
};

export default CartItem;
