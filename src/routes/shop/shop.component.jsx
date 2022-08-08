import { useContext } from "react";
import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  // get the products context
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        // the reason why we want key is because we need to provide id for our map
        // pass product as a prop into product card
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
