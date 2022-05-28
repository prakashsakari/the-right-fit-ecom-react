<<<<<<< HEAD
import "./App.css"
import {Home, Products, Wishlist, Cart, Login, SignUp, SingleProduct} from "./pages"
=======
import "./App.css";
import {RequiresAuth} from "./components";
import {Home, Products, Wishlist, Cart, Login, SignUp, SingleProduct, Address, CheckoutPage, Error, Order} from "./pages"
>>>>>>> 9c10e09 (added address and payment integration)
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
<<<<<<< HEAD
=======
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error />} />
>>>>>>> 9c10e09 (added address and payment integration)
      </Routes>
    </div>
  );
}
