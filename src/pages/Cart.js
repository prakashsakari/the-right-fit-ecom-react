import { ProductCardHorizontal, FinalPrice, Navbar } from "../components";
import { useCart } from "../context/cart-context";
import { Link } from "react-router-dom";
export const Cart = () => {
  const {
    cartState: { cart }
  } = useCart();
  return (
    <>
      <Navbar />
      <main className="wishlist-page-container">
        <h2 className="text-center">My Cart</h2>
        {cart.length > 0 ? (
          <div className="d-flex gap-48px wrap justify-center">
            <div className="flex-col">
              {cart.map((product) => (
                <ProductCardHorizontal product={product} key={product.id} />
              ))}
            </div>
            <FinalPrice />
          </div>
        ) : (
          <div className="text-center">
            <h2>Cart Empty</h2>
            <Link to="/products">Click to add items to Cart</Link>
          </div>
        )}
      </main>
    </>
  );
};
