import "./category.styles.scss";

import { useParams } from "react-router-dom";

import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

// useParams allows us to get the value as an object. as we know it is category, we can destructure this off from the return of useParams
// we want the products from the categoriesMap
// the only time we want things to change is when the category changes, or when categoriesMap changes. then we update the products array
// so our products wont update even if our page re-renders unless category or categoriesMap has changed
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log(categoriesMap[category]);
  }, [category, categoriesMap]);

  // because we're fetching our products at some point could be undefined, put in safeguards so we only render our component if the actual data is present
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
