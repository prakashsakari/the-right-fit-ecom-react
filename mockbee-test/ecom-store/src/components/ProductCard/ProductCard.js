import "./ProductCard.css";

const ProductCard = ({
  imgUrl,
  isTrending,
  title,
  productCategory,
  newPrice,
  oldPrice,
  discount
}) => {
  return (
    <div className="card card-vertical d-flex direction-column relative">
      <div className="card-image-container relative">
        <img className="card-image" src={imgUrl} alt="card" />
        {isTrending && (
          <small className="c-badge bg-primary absolute left-0">Trending</small>
        )}
        <button className="badge-close cursor absolute d-flex align-center justify-center">
          <span className="material-icons-outlined">favorite</span>
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
          <button className="button btn-primary btn-icon d-flex cursor btn-margin gap align-center">
            <img
              src="https://therightfit.netlify.app/assets/cart-white.png"
              alt="cart"
            />{" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };