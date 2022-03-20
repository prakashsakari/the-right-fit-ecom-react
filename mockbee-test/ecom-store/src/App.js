import "./App.css"
import {Home} from "./pages/Home"
import { Products } from "./pages/Products";
import {Wishlist} from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}
