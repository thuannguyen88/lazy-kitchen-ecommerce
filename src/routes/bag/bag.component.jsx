import "./bag.styles.scss";
import Button from "../../components/button/button.component";
import SHOP_DATA from "../../shop-data.json";
import { ReactComponent as FaveIcon } from "../../assets/fave_icon.svg";

const Bag = () => {
  return (
    <section className="section-container">
      <div className="my-bag-container">
        <div className="bag-item-container">
          <div className="bag-header">
            <h3 className="heading">MY BAG</h3>
          </div>
          <div className="item-card">
            <img
              src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
              alt="/"
              className="item-image"
            />

            <div className="item-description">
              <span className="item-description-price">£150.00</span>
              <span className="item-description-name">
                Carhartt WIP lined vest in green Carhartt WIP lined vest in
                green Carhartt WIP lined vest in
              </span>
              <span className="item-description-quantity">Qty: 1</span>
              <Button buttonType="save">
                <FaveIcon className="favourite-icon" fill="red" />
                Save for later
              </Button>
            </div>
            <div className="delete-item">X</div>
          </div>
          <div className="item-card">
            <img
              src="https://i.ibb.co/ypkgK0X/blue-beanie.png"
              alt="/"
              className="item-image"
            />

            <div className="item-description">
              <span className="item-description-price">£150.00</span>
              <span className="item-description-name">
                Carhartt WIP lined vest in green Carhartt WIP lined vest in
                green Carhartt WIP lined vest in
              </span>
              <span className="item-description-quantity">Qty: 1</span>
              <Button buttonType="save">
                <FaveIcon className="favourite-icon" fill="red" />
                Save for later
              </Button>
            </div>
            <div className="delete-item">X</div>
          </div>
          <div className="item-card">
            <img
              src="https://i.ibb.co/bLB646Z/red-beanie.png"
              alt="/"
              className="item-image"
            />

            <div className="item-description">
              <span className="item-description-price">£150.00</span>
              <span className="item-description-name">
                Carhartt WIP lined vest in green Carhartt WIP lined vest in
                green Carhartt WIP lined vest in
              </span>
              <span className="item-description-quantity">Qty: 1</span>
              <Button buttonType="save">
                <FaveIcon className="favourite-icon" fill="red" />
                Save for later
              </Button>
            </div>
            <div className="delete-item">X</div>
          </div>
        </div>
        <div className="bag-total-wrapper">
          <div className="bag-total-title-container">
            <h3 className="total-title">TOTAL</h3>
            <span className="sub-total-title">
              Subtotal<span className="sub-total-price">£188.00</span>
            </span>
          </div>
          <Button buttonType="checkout">CHECKOUT</Button>
        </div>
      </div>
    </section>
  );
};

export default Bag;
