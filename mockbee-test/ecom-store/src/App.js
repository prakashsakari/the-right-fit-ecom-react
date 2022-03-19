import "./App.css"
import {Home} from "./pages/Home"
import { Products } from "./pages/Products";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}
