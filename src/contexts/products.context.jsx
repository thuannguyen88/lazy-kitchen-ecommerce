import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

// we want to store an array of products
export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // what we want to export out as the value is the products as an object

  // we want to fire the addCollectionAndDocuments once
  // 'categories' as the first parameter being the collectionKey
  // SHOP_DATA as the second parameter being the objectsToAdd
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
