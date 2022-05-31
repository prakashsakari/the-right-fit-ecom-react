import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useFilter, useCart, useAuth, useAlert } from "../../context";
import { isInwishlist, isInCart } from "../../productUtilities";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const {
    state: { myWishlist },
    addToWishlist
  } = useFilter();

  const {
    cartState: { cart },
    addToCart, removeFromCart
  } = useCart();

  const { eToken } = useAuth();

  const { setAlert } = useAlert();

  const { _id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, outOfStock, isFast
  } = product;

  const isWishlisted = isInwishlist(myWishlist, _id);
  const inCart = isInCart(cart, _id)

  const addToCartHandler = () => {
    if (eToken){
      addToCart(product, setAlert)
    }else{
      navigate("/login")
    }
  }

  const removeFromCartHandler = () => {
    if(eToken){
      removeFromCart(product, setAlert)
    }
  }

  const addToWishlistHandler = () => {
    if (eToken){
      addToWishlist(product, setAlert)
    }else{
      navigate("/login")
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
          onClick={addToWishlistHandler}
        >
          <span className={`${isWishlisted ? `wishlist-color` : ``} material-icons-outlined`}>favorite</span>
        </button>
      </div>
      <div className="card-details">
      <Link className="link" to={`/product/${_id}`}>
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
        </Link>
        <div className="cta-btn">
          <button 
          className={`${outOfStock ? `strik-through` : `cursor`} button action-btn btn-primary btn-icon d-flex btn-margin gap align-center justify-center`} 
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

export { ProductCard };
