
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Category = () => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    (async () => {
      try{
        const {data : {categories}} = await axios.get("/api/categories")
        setCategories(categories)
      }catch(error){
        setError("No products to display")
      }
    })()
  }, [])

  return (
    <main className="main-page-container">
      <section className="footwear-category d-flex justify-center align-center wrap">
        {categories.map(({ imgUrl, alt, category }) => {
          return (
            <>
              <Link className="link relative effect" to="/">
                <div className="category category-men">
                  <img
                    className="category-image border-radius-4"
                    src={imgUrl}
                    alt={alt}
                  />
                </div>
                <div className="overlay d-flex direction-column absolute top-0 left-0 d-flex justify-center align-center text-bg">
                  <div className="men-overlay d-flex justify-center">
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
