import "./category-preview.styles.scss";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

// we want a category preview on our shop page route, that displays the first four products for each object category e.g. hats, jackets, mens, sneakers, womens

const CategoryPreview = ({ title, products }) => {
  // _ using underscore in the first argument, because we don't want to use the product
  // the second argument is the index inside of array
  // filter out the products array,and as long as the index is less than 4 i want you to keep these products
  // after we filter the products, then we can map through the products and pass it to a product card component we want to render
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link className="category-link" to={`/shop/${title}`}>
          {title.toUpperCase()}
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
