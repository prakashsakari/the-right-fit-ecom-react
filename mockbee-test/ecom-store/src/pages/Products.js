import { useEffect, useState } from "react";
import { Navbar, ProductCard } from "../components";
import axios from "axios"
const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            try{
                const {data : {products}} = await axios.get("/api/products")
                setProducts(products);
            }catch(error){
                setError(error);
            }
        })()
    }, [])
  return (
    <div className="page">
      <Navbar />
      <main class="product-content d-flex gap-48px wrap">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </main>
    </div>
  );
};

export { Products };