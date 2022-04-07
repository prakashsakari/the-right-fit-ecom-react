import "./ProductCardHorizontal.css";
import { useFilter, useCart } from "../../context";

export const ProductCardHorizontal = ({ product }) => {
  const { id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, isFast, itemCount
  } = product;
  const { cartDispatch } = useCart();
  const { productDispatch } = useFilter();
  return (
    <div className="card-horizontal d-flex shadow card-size flex-start">
      <div className="card-hori-image-container card-size-hori relative">
        <img className="card-image d-block" src={imgUrl} alt="shoes" />
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
      <div className="card-details d-flex direction-column">
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
              onClick={() =>
                cartDispatch({
                  type: "DECREASE_QUANTITY",
                  payload: id
                })
              }
            >
              {" "}
              -{" "}
            </button>
            <span className="count-value">{itemCount}</span>
            <button
              class="count"
              onClick={() =>
                cartDispatch({
                  type: "INCREASE_QUANTITY",
                  payload: id
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="cta-btn-container d-flex gap">
          <div className="cta-btn">
            <button
              className="button btn-primary btn-icon d-flex align-center gap cursor btn-margin"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product
                })
              }
            >
              Remove From Cart
            </button>
          </div>
          <div className="cta-btn">
            <button
              className="button btn-outline-primary btn-icon d-flex align-center gap cursor btn-margin"
              onClick={() =>
                productDispatch({
                  type: "WISHLIST",
                  payload: product
                })
              }
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
