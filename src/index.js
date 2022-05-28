import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
<<<<<<< HEAD
import { FilterProvider, CartProvider, AuthProvider } from "./context";
=======
import { FilterProvider, CartProvider, AuthProvider, AlertProvider, AddressProvider } from "./context";
>>>>>>> 9c10e09 (added address and payment integration)

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
        <CartProvider>
          <AuthProvider>
<<<<<<< HEAD
            <App />
=======
            <AlertProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </AlertProvider> 
>>>>>>> 9c10e09 (added address and payment integration)
          </AuthProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();