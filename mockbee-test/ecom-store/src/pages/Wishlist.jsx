import { Navbar, WishlistProduct } from "../components";
import { useFilter } from "../context/filter-product-context";
import "./Wishlist.css";
import { Link } from "react-router-dom";
export const Wishlist = () => {
  const { state: { myWishlist }} = useFilter();
  return (
    <>
      <Navbar />
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
        <main className="margin-top flex-col">
          <h2>No Items in Wishlist</h2>
          <Link to="/products">Click to add items to Wishlist</Link>
        </main>
      )}
    </>
  );
};
