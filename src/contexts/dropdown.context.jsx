import { createContext, useState } from "react";

// create context to toggle on and off dropdown menu for shopping cart
// pass the value we want to access
// we want to access a boolean
export const DropdownContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
});

// create provider for context
export const DropdownProvider = ({ children }) => {
  // set up the state for toggling with initialised value of false
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // generate the values to be exported
  const value = { isDropdownOpen, setIsDropdownOpen };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
