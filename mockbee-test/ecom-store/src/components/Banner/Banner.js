import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <main className="main-page-container">
      <section className="main-banner">
        <Link to="/products" className="link">
          <div className="main-banner-image border-radius-4"></div>
        </Link>
      </section>
    </main>
  );
};

export { Banner };
