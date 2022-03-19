import { createContext, useContext, useReducer } from "react";
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
    rating: 0
  });
  return (
    <FilterContext.Provider value={{ state, productDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
