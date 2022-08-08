import {createContext, useState} from "react"

import PRODUCTS from "../shop-data.json"

// we want to store an array of products
export const ProductsContext = createContext({
   products: [],

});

export const ProductProvider =({children}) => {
   const [products, setProducts] = useState(PRODUCTS)
   // what we want to export out as the value is the products as an object
   const value = {products}
   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}