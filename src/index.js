import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider, CartProvider, AuthProvider, AlertProvider, AddressProvider } from "./context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
        <CartProvider>
          <AuthProvider>
            <AlertProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </AlertProvider> 
          </AuthProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();