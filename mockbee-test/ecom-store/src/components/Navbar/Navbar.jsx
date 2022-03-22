import { Link } from "react-router-dom";
import { useFilter, useCart } from "../../context";
import "./Navbar.css";
const Navbar = () => {
  const {
    state: { myWishlist }
  } = useFilter();

  const {
    cartState: { cart }
  } = useCart();

  return (
    <header className="heading d-flex grow1-shrink1-basisauto align-center fixed top-0 left-0">
      <div className="heading-title-icon d-flex align-center">
        <img
          class="icon mr-1 border-radius-50"
          src="https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg"
          alt="lightbulb"
        />
        <h1 class="heading-title">
          <Link class="link" to="/">
            The Right Fit
          </Link>
        </h1>
      </div>
      <div class="search-box-container relative">
        <input
          class="search-box padding-all-8 border-radius-4"
          type="text"
          placeholder="Search"
        />
        <img
          src="https://therightfit.netlify.app/assets/outline_search_black_24dp.png"
          alt="Search"
          class="search-icon absolute left-0 top-0"
        />
      </div>
      <nav class="navigation">
        <ul class="list-non-bullet d-flex align-center gap">
          <li class="list-item-inline">
            <Link to="/" class="link">
              <button class="button btn-outline-primary ">Login</button>
            </Link>
          </li>
          <li class="list-item-inline">
            <Link to="/wishlist" class="link">
              <div class="icon-badge relative">
                <img
                  class="icon-img"
                  src="https://therightfit.netlify.app/assets/fav-outline-48px.png"
                  alt="wishlist"
                />
                <div class="badge-number avatar-badge d-flex align-center justify-center">
                  {myWishlist.length}
                </div>
              </div>
            </Link>
          </li>
          <li class="list-item-inline">
            <Link to="/cart" class="link d-flex align-center gap-8px">
              <div class="icon-badge relative">
                <img
                  class="icon-img"
                  src="https://therightfit.netlify.app/assets/cart-outline-48px.png"
                  alt="cart"
                />
                <div class="badge-number avatar-badge d-flex align-center justify-center">
                  {cart.length}
                </div>
              </div>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
