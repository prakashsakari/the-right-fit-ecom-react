import "./ProductCard.css";
import { useFilter, useCart } from "../../context";
const ProductCard = ({ product }) => {
  const {
    state: { myWishlist },
    productDispatch
  } = useFilter();

  const {
    cartState: { cart },
    cartDispatch
  } = useCart();

  const { imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, outOfStock, isFast
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
              payload: product
            })
          }
        >
          {myWishlist.some((item) => item.id === product.id) ? (
            <span className="material-icons-outlined wishlist-color">
              favorite
            </span>
          ) : (
            <span className="material-icons-outlined">favorite</span>
          )}
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
          {cart.some((item) => item.id === product.id) ? (
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
                  payload: product
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
