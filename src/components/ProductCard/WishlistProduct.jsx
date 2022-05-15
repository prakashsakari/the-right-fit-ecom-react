import "./ProductCard.css";
import { useFilter, useCart, useAuth} from "../../context";
import { isInCart } from "../../productUtilities";


const WishlistProduct = ({ product }) => {
  const {
    removeFromWishlist
  } = useFilter();

  const {
    cartState: { cart },
    addToCart, removeFromCart
  } = useCart();

  const {eToken} = useAuth();

  const {
    _id,
    imgUrl,
    isTrending,
    title,
    productCategory,
    newPrice,
    oldPrice,
    discount,
    outOfStock,
    isFast
  } = product;

  const inCart = isInCart(cart, _id)

  const removeFromWishlistHandler = () => {
    if(eToken){
      removeFromWishlist(product);
    }
  }

  const addToCartHandler = () => {
    if (eToken){
      addToCart(product)
    }else{
      navigate("/login")
    }
  }

  const removeFromCartHandler = () => {
    if(eToken){
      removeFromCart(product)
    }
  }

  return (
    <div className="card card-vertical d-flex direction-column relative">
      <div className="card-image-container relative">
        <img className="card-image" src={imgUrl} alt="card" />
        {isTrending && (
          <small className="c-badge bg-primary absolute left-0 top-2">
            Trending
          </small>
        )}
        {isFast && (
          <small className="c-badge bg-primary absolute left-0 top-1">
            Express Delivery
          </small>
        )}
        <button
          className="badge-close cursor absolute fav-outline d-flex align-center justify-center"
          onClick={removeFromWishlistHandler}
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>
      <div className="card-details">
        <div className="card-title">{title}</div>
        <div className="card-description">
          <p className="card-des">{productCategory}</p>
          <p className="card-price">
            Rs. {newPrice}
            <span className="price-strike-through padding-all-8">
              Rs. {oldPrice}
            </span>
            <span className="discount padding-all-8">({discount}% OFF)</span>
          </p>
        </div>
        <div className="cta-btn">
        <button 
          className={`${outOfStock ? `strik-through` : `cursor`} button btn-primary btn-icon d-flex btn-margin gap action-btn  align-center justify-center`} 
          disabled={outOfStock}
          onClick={inCart ? removeFromCartHandler : addToCartHandler}
          >
            <img src={inCart ? "https://uilight.netlify.app/assets/delete.png" : "https://therightfit.netlify.app/assets/cart-white.png"} 
                 alt={inCart ? "delete" : "cart"} 
            />
            {inCart && !outOfStock ? "Remove From Cart" : !inCart && !outOfStock ? "Add to Cart" : outOfStock ? "Out of Stock" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export { WishlistProduct };
