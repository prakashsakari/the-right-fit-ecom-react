import { Navbar, Footer, ProductCard,
  PriceRange, SortByPrice, Discount,
  FilterByStock, FilterByDelivery, ClearFilter,
  FilterByCategory, FilterByRating} from "../components";

import { useFilter } from "../context/filter-product-context";

import { getfilteredProducts, getPriceSortedProducts,
  getDiscountedProducts, getProductsByStock,
  getFastDeliveryProducts, getCategoryFilterProducts,
  getProductsByRating} from "../productUtilities";

import {useState, useEffect} from "react";

import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { state } = useFilter();
  const {
  minPrice,
  sortBy,
  discount,
  includeOutOfStock,
  fastDelivery,
  category,
  rating
} = state;

  useEffect(() => {
      (async () => {
          try{
              const {data : {products}} = await axios.get("/api/products")
              setProducts(products);
          }catch(error){
              setError("No products to display");
          }
      })()
  }, [])

  const filterByDiscount = getDiscountedProducts(products, discount);
  const filterByCategory = getCategoryFilterProducts(filterByDiscount,category);
  const filterByRating = getProductsByRating(filterByCategory, rating);
  const filterByStock = getProductsByStock(filterByRating, includeOutOfStock);
  const filterByDelivery = getFastDeliveryProducts(filterByStock, fastDelivery);
  const filterByPrice = getPriceSortedProducts(filterByDelivery, sortBy);
  const filterProducts = getfilteredProducts(filterByPrice, minPrice);

  return (
    <div className="page">
      <Navbar />
      <div className="d-flex">
        <aside className="side-nav border-right sidebar-position">
          <ClearFilter />
          <PriceRange />
          <FilterByCategory />
          <SortByPrice />
          <FilterByRating />
          <Discount />
          <FilterByStock />
          <FilterByDelivery />
        </aside>
        <main className="product-content d-flex gap-48px wrap">
          {filterProducts.length > 0 ? (filterProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))) : <h2>{error}</h2>}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export { Products };