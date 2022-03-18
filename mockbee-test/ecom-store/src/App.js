import "./App.css"
import {Home} from "./pages/Home"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
