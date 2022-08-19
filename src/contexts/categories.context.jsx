import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";

import {
  getCategoriesandDocuments,
  addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";

// we want to store an array of products
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // categoriesMap is an object
  const [categoriesMap, setCategoriesMap] = useState({});
  // what we want to export out as the value is the products as an object

  // we want to fire the addCollectionAndDocuments once
  // 'categories' as the first parameter being the collectionKey
  // SHOP_DATA dummy data as the second parameter being the objectsToAdd

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  // fired once and data is now in firestore, so don't need anymore, otherwise it will fire everytime we refresh

  // when you pass an async function into useEffect you dont want to make your anonymous callback async, you want to create a new async function inside of your anonymous callback. any thing you need to do with async inside of a useEffect, wrap it in an async function  and then invoke it inside the same callback after its been initialised
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesandDocuments('categories');
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
