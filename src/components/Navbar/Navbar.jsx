import { Link } from "react-router-dom";
import { useFilter, useCart, useAuth } from "../../context";
import "./Navbar.css";
const Navbar = ({ route }) => {
  const {
    state: { myWishlist }
  } = useFilter();

  const {
    cartState: { cart }
  } = useCart();

  const {
    state: { userName },
    passwordDispatch
  } = useAuth();

  return (
    <header className="heading d-flex grow1-shrink1-basisauto align-center fixed top-0 left-0">
      <div className="heading-title-icon d-flex align-center">
        <img
          className="icon mr-1 border-radius-50"
          src="https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg"
          alt="lightbulb"
        />
        <h1 className="heading-title">
          <Link className="link" to="/">
            The Right Fit
          </Link>
        </h1>
      </div>
      <div className="search-box-container relative">
        <input
          className="search-box padding-all-8 border-radius-4"
          type="text"
          placeholder="Search"
        />
        <img
          src="https://therightfit.netlify.app/assets/outline_search_black_24dp.png"
          alt="Search"
          className="search-icon absolute left-0 top-0"
        />
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet d-flex align-center gap">
          <li className="list-item-inline">
            <Link to="/login" className="link">
              <button className="button btn-outline-primary">
                Login
              </button>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to={userName ? "/wishlist" : "/login"} className="link">
              <div className="icon-badge relative">
                <img
                  className="icon-img"
                  src="https://therightfit.netlify.app/assets/fav-outline-48px.png"
                  alt="wishlist"
                />
                <div className="badge-number avatar-badge d-flex align-center justify-center">
                  {userName.length > 0 ? myWishlist.length : 0}
                </div>
              </div>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to={userName ? "/cart" : "/login"} className="link d-flex align-center gap-8px">
              <div className="icon-badge relative">
                <img
                  className="icon-img"
                  src="https://therightfit.netlify.app/assets/cart-outline-48px.png"
                  alt="cart"
                />
                <div className="badge-number avatar-badge d-flex align-center justify-center">
                  {userName.length > 0 ? cart.length : 0}
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
