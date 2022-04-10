import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { useCart, useAuth, useFilter } from "../../context/";

export const ProductDetails = ({ sproduct }) => {
  const {
    imgUrl,
    title,
    description,
    newPrice,
    oldPrice,
    discount,
    itemRating,
    outOfStock
  } = sproduct;

  const {
    state: { myWishlist },
    productDispatch
  } = useFilter();

  const getClassName = (outOfStock) => {
    if (outOfStock) {
      const className =
        "button btn-primary btn-icon d-flex strik-through btn-margin gap align-center";
      return className;
    } else {
      const className =
        "button btn-primary btn-icon d-flex cursor btn-margin gap align-center";
      return className;
    }
  };

  const {
    cartState: { cart },
    cartDispatch
  } = useCart();

  const {
    state: { userName, isLoggedIn }
  } = useAuth();

  return (
    <div class="top-margin d-flex gap-4 justify-center">
      <div class="image-container img-box">
        <img class="product-image" src={imgUrl} alt="product" />
        <Link className="link-primary" to="/products">
          Go to products page{" "}
        </Link>
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
          {cart.some((prod) => prod.id === sproduct.id) && isLoggedIn ? (
            <button
              className="button btn-primary btn-icon d-flex cursor btn-margin gap align-center"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: sproduct
                })
              }
            >
              <img
                src="https://uilight.netlify.app/assets/delete.png"
                alt="remove"
              />
              Remove From Cart
            </button>
          ) : (
            <button
              className={getClassName(outOfStock)}
              disabled={outOfStock}
              onClick={() =>
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    product: sproduct,
                    userName: userName
                  }
                })
              }
            >
              <img
                src="https://therightfit.netlify.app/assets/cart-white.png"
                alt="cart"
              />{" "}
              {outOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
          {myWishlist.some((prod) => prod.id === sproduct.id) &&
          isLoggedIn ? (
            <button class="button btn-primary btn-icon d-flex align-center gap cursor btn-margin">
              Added to Wishlist
            </button>
          ) : (
            <button
              class="button btn-secondary btn-icon d-flex align-center gap cursor btn-margin"
              onClick={() =>
                productDispatch({
                  type: "WISHLIST",
                  payload: { product: sproduct }
                })
              }
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
