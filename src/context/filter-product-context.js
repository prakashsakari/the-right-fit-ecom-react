import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducer/productReducer";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const [state, productDispatch] = useReducer(productReducer, {
    minPrice: 4000,
    sortBy: "",
    discount: "",
    includeOutOfStock: false,
    fastDelivery: false,
    category: "all",
    rating: 0,
    myWishlist: []
  });

  const addToWishlist = async (product) => {
    try {
      const {data: {wishlist}} = await axios.post("/api/user/wishlist", {product}, {
        headers: {authorization: localStorage.getItem("token")}
      })
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
        productDispatch({
          type: "WISHLIST",
          payload: product
        })
    }catch(err){
      console.log(err)
    }
  }

  const removeFromWishlist = async (product) => {
    try {
      const {data: {wishlist}} = await axios.delete(`api/user/wishlist/${product._id}`, 
      {
        headers: {authorization: localStorage.getItem("token")}
      })
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
      productDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id
      })
      
    }catch(err){
      console.log(err)
    }
  }

  return (
    <FilterContext.Provider value={{ state, productDispatch, addToWishlist, removeFromWishlist }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
