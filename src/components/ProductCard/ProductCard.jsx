import "./ProductCard.css";
import { useFilter, useCart, useAuth } from "../../context";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    state: { myWishlist },
    productDispatch
  } = useFilter();
  const {
    cartState: { cart },
    cartDispatch
  } = useCart();

  const {
    state: { userName, isLoggedIn }
  } = useAuth();

  const { _id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, outOfStock, isFast
  } = product;
  
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

  const getWishlistClass = () => {
    if (isLoggedIn) {
      return "material-icons-outlined wishlist-color";
    } else {
      return "material-icons-outlined";
    }
  };

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
          onClick={() =>
            productDispatch({
              type: "WISHLIST",
              payload: {
                product: product,
                userName: userName
              }
            })
          }
        >
          {myWishlist.some((item) => item.id === product.id) ? (
            <span className={getWishlistClass()}>
              favorite
            </span>
          ) : (
            <span className="material-icons-outlined">favorite</span>
          )}
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
          {cart.some((item) => item.id === product.id) && isLoggedIn ? (
            <button
              className="button btn-primary btn-icon d-flex cursor btn-margin gap align-center"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product
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
                    product: product,
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
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
