import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdownMenu from "../../components/cart-menu-dropdown/cart-menu-dropdown.component";

import { ReactComponent as LazyKitchenLogo } from "../../assets/lazy_kitchen_logo.svg";
import { UserContext } from "../../contexts/user.context";
import { DropdownContext } from "../../contexts/dropdown.context";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  //whenever a value inside of this context updates, re-render me. so when value of currentUser is updated, it says i want you to run my navigation component again
  const { currentUser } = useContext(UserContext);

  // use DropdownContext to use isDropdownOpen to set up conditional render, if isDropdownOpen is true render CartDropdownMenu component, otherwise render nothing
  const { isDropdownOpen} = useContext(DropdownContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LazyKitchenLogo className="logo" />
        </Link>


        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {/* when user is logged in render sign out, else render log in link */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutAuthUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              LOG IN
            </Link>
          )}
      
            <CartIcon />
        
        </div>
        {isDropdownOpen ? <CartDropdownMenu /> : ""}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
