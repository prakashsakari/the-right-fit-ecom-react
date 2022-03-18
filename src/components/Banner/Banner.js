import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <main class="main-page-container">
      <section class="main-banner">
        <Link to="/" class="link">
          <div class="main-banner-image border-radius-4"></div>
        </Link>
      </section>
    </main>
  );
};

export { Banner };
