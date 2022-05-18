import { Navbar, WishlistProduct } from "../components";
import { useFilter } from "../context/filter-product-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Wishlist.css";

export const Wishlist = () => {
  const { state: { myWishlist }} = useFilter();
  const [route, setRoute] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setRoute("wishlist");
  }, [route]);
  return (
    <>
      <Navbar route={route} />
      {myWishlist.length > 0 ? (
        <>
          <h2 className="margin-top d-flex justify-center">My Wishlist</h2>
          <main className="product-display d-flex gap-48px wrap">
            {myWishlist.map((product) => (
              <WishlistProduct product={product} key={product.id} />
            ))}
          </main>
        </>
      ) : (
        <main className="margin-top d-flex direction-column align-center">
          <h2>Wishlist Empty</h2>
          <button class="button btn-link-primary cursor" onClick={() => navigate("/products")}>
              <span  class="link-primary" href="#" target="_blank">Click to add items to Wishlist</span>
            </button>
        </main>
      )}
    </>
  );
};
