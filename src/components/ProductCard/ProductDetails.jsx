import { Link, useNavigate } from "react-router-dom";
import { useCart, useAuth, useFilter, useAlert } from "../../context/";
import { isInwishlist, isInCart } from "../../productUtilities";
import "./ProductDetails.css";

export const ProductDetails = ({ sproduct }) => {
  const {
    _id,
    imgUrl,
    title,
    description,
    newPrice,
    oldPrice,
    discount,
    itemRating,
    outOfStock
  } = sproduct;

  const navigate = useNavigate();

  const {
    state: { myWishlist },
    addToWishlist
  } = useFilter();

  const {
    cartState: { cart },
    addToCart
  } = useCart();

  const { eToken } = useAuth();

  const { setAlert } = useAlert();

  const isWishlisted = isInwishlist(myWishlist, _id);
  const inCart = isInCart(cart, _id);

  const addToCartHandler = () => {
    if (eToken){
      addToCart(sproduct, setAlert)
    }else{
      navigate("/login")
    }
  }

  const goToCart = () => {
      navigate("/cart")
  }

  const addToWishlistHandler = () => {
    if (eToken){
      addToWishlist(sproduct, setAlert)
    }else{
      navigate("/login")
    }
  }


  return (
    <div class="top-margin d-flex gap-4 justify-center">
      <div class="image-container img-box">
        <img class="product-image" src={imgUrl} alt="product" />
      </div>
      <div class="content-container content-box col-flex gap-1">
        <div class="product-details col-flex gap-1">
          <h1>{title} Collections</h1>
          <h3>{description} </h3>
          <div class="rating-box d-flex align-center gap-1">
            <span class="rating-font">{itemRating}</span>{" "}
            <span class="fa fa-star fa-1x"></span>
          </div>
        </div>
        <div class="card-price ">
          <div class="d-flex gap align-end">
            <span class="product-final-price">Rs. {newPrice}</span>
            <span class="prod-price-strike-through">Rs. {oldPrice}</span>
            <span class="prod-discount">({discount}% OFF)</span>
          </div>
          <p class="tax-txt">inclusive of all taxes</p>
        </div>
        <div class="delivery-options col-flex gap-1">
          <h3>Delivery Options</h3>
          <div class="shipping d-flex align-center gap">
            <span class="material-icons-outlined">local_shipping</span>{" "}
            <span>Get it in 3 days</span>
          </div>
          <div class="shipping d-flex align-center gap">
            <span class="material-icons-outlined">currency_rupee</span>{" "}
            <span>Pay on delivery available</span>
          </div>
          <div class="shipping d-flex align-center gap">
            <span class="material-icons-outlined">change_circle</span>{" "}
            <span>30 days exchange and return available</span>
          </div>
        </div>
        <div class="cta d-flex gap">
        <button 
          className={`${outOfStock ? `strik-through` : `cursor`} button btn-primary btn-icon d-flex btn-margin gap align-center`} 
          disabled={outOfStock}
          onClick={inCart ? goToCart : addToCartHandler}
          > 
            {inCart ? <span class="material-icons-outlined">
                        shopping_cart_checkout
                      </span> : <span class="material-icons-outlined">
                          shopping_cart
                      </span>}
            {inCart && !outOfStock ? "Go to Cart" : !inCart && !outOfStock ? "Add to Cart" : outOfStock ? "Out of Stock" : ""}
          </button>
          <button
              className="button btn-outline-primary btn-icon d-flex align-center gap cursor btn-margin"
              disabled={isWishlisted}
              onClick={addToWishlistHandler}
              
            >
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
        </div>
      </div>
    </div>
  );
};
