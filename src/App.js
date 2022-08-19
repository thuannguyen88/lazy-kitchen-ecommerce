import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignUp from "./routes/sign-up/sign-up.component";
import LogIn from "./routes/log-in/log-in.component";
import Shop from "./routes/shop/shop.component";
import Bag from "./routes/bag/bag.component";

const App = () => {
  // with react router dom, it takes a look at the path value and says whenever i match the path "/shop/*" inside of the url relative to what my parent path is, I'm going to render the element given for this route. 

  // so for any path /shop/* that follows after i want you to render the shop, because inside the shop you can expect further routes, and these routes are all going to be relative to the parent route which was /shop
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/checkout" element={<Bag />} />
      </Route>
    </Routes>
  );
};

export default App;
