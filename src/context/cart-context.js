import axios from "axios";
import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalItemPrice: 0,
    discountedPrice: 0,
    deliveryCharge: 150,
    totalAmount: 0
  });
  const [userCart, setUserCart] = useState([]);

  const addToCart = async (product) => {
    try {
      const {data: {cart}} = await axios.post("/api/user/cart", {product},
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      setUserCart(userCart => [...userCart, cart])
        cartDispatch({
          type: "ADD_TO_CART",
          payload: product
        })
      
    }catch(err){
      console.log(err)
    }
  }

  const removeFromCart = async (product) => {
    console.log(product);
    try {
      const {data: {cart}} = await axios.delete(`api/user/cart/${product._id}`, 
      {headers : {authorization : localStorage.getItem("token")}})
      localStorage.setItem("cart", JSON.stringify(cart));
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id
      })
    }catch(err){
      console.log(err)
    }
  }

  const updateProductQuantity = async (product, updateValue) => {
    try {
      const updateQuantity = await axios.post(`api/user/cart/${product._id}`, {
        action : {
          type: updateValue
        }
      },
      {
        headers: {authorization : localStorage.getItem("token")}
      })
      cartDispatch({
        type: updateValue === "increment" ? "INCREASE_QUANTITY" : "DECREASE_QUANTITY",
        payload: product._id
      })
    }catch (err){
      console.log(err)
    }
  }

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart, removeFromCart, userCart, setUserCart, updateProductQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
