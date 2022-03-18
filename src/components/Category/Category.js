import { categories } from "../../staticData/categories";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <main class="main-page-container">
      <section class="footwear-category d-flex justify-center align-center wrap">
        {categories.map(({ imgUrl, alt, category }) => {
          return (
            <>
              <Link class="link relative effect" to="/">
                <div class="category category-men">
                  <img
                    class="category-image border-radius-4"
                    src={imgUrl}
                    alt={alt}
                  />
                </div>
                <div class="overlay d-flex direction-column absolute top-0 left-0 d-flex justify-center align-center text-bg">
                  <div class="men-overlay d-flex justify-center">
                    {category}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </section>
    </main>
  );
};

export { Category };
