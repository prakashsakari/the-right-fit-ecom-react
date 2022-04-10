import { Navbar, ProductDetails } from "../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const SingleProduct = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { productId } = useParams();


    useEffect(() => {
        (async () => {
            try{
                const {data : {products}} = await axios.get("/api/products")
                setProducts(products);
            }catch(error){
                setError(true);
            }
        })()
    }, [])

  const sproduct = products.find((prod) => prod._id === productId);

  return (
    <>
      <Navbar />
      {(sproduct && !error) ? (<ProductDetails sproduct={sproduct} />) : (<main className="top-margin d-flex gap-4 justify-center">
          <h2>...Loading</h2>
        </main>)}
    </>
  );
};
