import { createContext, useState} from "react";

// one of the most CHALLENGING functionality to wrap my head around
// function that allows us to take in an array of cart items, and some product object with an additional quantity field. 
const addCartItem = (cartItems, productToAdd) => {
   // find if cartItems contains productToAdd
   // .find you pass in a callback that receives each element in an array and we're expecting a boolean value that returns the cartItem that returns true
   // return us boolean true if the cartItem has an id value that matches the productToAdd id value
const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)

   // If existingCartItem is found, increment quantity
// we map over all the cartItems if there is an existingCartItem, and create a new object for the cartItem that has same id as productToAdd spreading the values of the cartItem and incrementing the quantity value by 1. 
// if the cartItem.id does not match the productToAdd.id we do nothing to that specific item and return
if (existingCartItem) {
   return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
}

// if existingCartItem doesnt exist in cartItems
   // return new array with modified cartItems/ new cart item
   // if new product, create a new array and spread all existing cart items and the new product we want to add and the quantity of one
   return [...cartItems, {...productToAdd, quantity: 1}]
}


// create context to toggle on and off dropdown menu for shopping cart
// pass the value we want to access
// we want to access a boolean
export const DropdownContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

// create provider for context
export const DropdownProvider = ({ children }) => {
  // set up the state for toggling with initialised value of false
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])

  // a function that takes a product we want to add cart, and adds it to cartItems
  const addItemToCart = (productToAdd) => {
   setCartItems(addCartItem(cartItems, productToAdd))
  }

  // generate the values to be exported
  const value = { isDropdownOpen, setIsDropdownOpen, addItemToCart, cartItems };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
