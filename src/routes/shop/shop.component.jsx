import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  // get the products context
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name }) => (
        // the reason why we want key is because we need to provide id for our map
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
