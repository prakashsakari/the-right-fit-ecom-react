import "./ProductCardHorizontal.css";
import { useFilter, useCart, useAuth, useAlert } from "../../context";
import { isInwishlist } from "../../productUtilities";

export const ProductCardHorizontal = ({ product }) => {
  const { _id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, isFast, itemCount
  } = product;
  const { removeFromCart, updateProductQuantity } = useCart();
  const { state: {myWishlist}, addToWishlist } = useFilter();

  const {eToken} = useAuth();

  const {setAlert} = useAlert();

  const isWishlisted = isInwishlist(myWishlist, _id);

  const removeFromCartHandler = () => {
    if (eToken){
      removeFromCart(product, setAlert)
    }
  }

  const moveToWishlistHandler = () => {
    if (eToken){
      addToWishlist(product, setAlert)
      removeFromCart(product)
    }
  }

  const updateQuantityHandler = (updateValue) => {
    if (eToken){
      updateProductQuantity(product, updateValue, setAlert)
    }
  }

  return (
    <div className="card-horizontal d-flex shadow card-size flex-start">
      <div className="card-hori-image-container card-size-hori relative">
        <img className="card-image-hori d-block" src={imgUrl} alt="shoes" />
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
      </div>
      <div className="card-details horizontal-card d-flex direction-column">
        <div className="card-title">{title}</div>
        <div className="card-description">
          <p className="card-des">{productCategory}</p>
          <p className="card-price">
            Rs. {newPrice}
            <span className="price-strike-through  padding-all-8">Rs. {oldPrice}</span>
            <span className="discount padding-all-8">({discount}% OFF)</span>
          </p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button
              disabled={itemCount === 1}
              className="count"
              onClick={() => updateQuantityHandler("decrement")}
            >
              {" "}
              -{" "}
            </button>
            <span className="count-value">{itemCount}</span>
            <button
              class="count"
              onClick={() => updateQuantityHandler("increment")}
            >
              +
            </button>
          </div>
        </div>
        <div className="cta-btn-container d-flex gap">
            <button
              className="button btn-primary btn-icon d-flex align-center gap cursor btn-margin"
              onClick={removeFromCartHandler}
            >
              Remove From Cart
            </button>

            <button
              className="button btn-outline-primary btn-icon d-flex align-center gap cursor btn-margin"
              disabled={isWishlisted}
              onClick={moveToWishlistHandler}
              
            >
              {isWishlisted ? "Wishlisted" : "Move to Wishlist"}
            </button>
        </div>
      </div>
    </div>
  );
};
