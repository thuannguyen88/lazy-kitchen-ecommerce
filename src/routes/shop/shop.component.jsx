import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

// so for any path /shop/* that follows after i want you to render the shop, because inside the shop you can expect further routes, and these routes are all going to be relative to the parent route which was /shop

// whatever was render inside the parameters will be dealth with inside of this route

// set up an index path

// set up a Route path which is a unique string with object key "category" and value whatever is typed after /shop/:category
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
