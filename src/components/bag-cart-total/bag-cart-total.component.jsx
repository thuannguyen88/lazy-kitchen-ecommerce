import "./bag-cart-total.styles.scss";

import Button from "../button/button.component";

const BagCartTotal = ({ cartTotal }) => {
  return (
    <>
      <div className="bag-total-title-container">
        <h3 className="total-title">TOTAL</h3>

        <span className="sub-total-title">
          Subtotal
          <span className="sub-total-price">£{cartTotal}.00</span>
        </span>
      </div>
      <Button buttonType="checkout">CHECKOUT</Button>
    </>
  );
};

export default BagCartTotal;
