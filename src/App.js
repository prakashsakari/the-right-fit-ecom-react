import "./App.css";
import {RequiresAuth} from "./components";
import {Home, Products, Wishlist, Cart, Login, SignUp, SingleProduct, Error} from "./pages"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth> } />
        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
