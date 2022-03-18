import { latestCollection } from "../../staticData/new-arrivals";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  return (
    <main class="main-page-container">
      <section class="new-arrival-section d-flex">
        {latestCollection.map(({ imgUrl }) => {
          return (
            <>
              <Link to="/" class="link">
                <div class="new-arrival-banner-container d-flex gap shadow">
                  <img class="new-arrival-img" src={imgUrl} alt="collection" />
                  <div class="arrival-details d-flex direction-column">
                    <span class="banner-promo">New Arrivals</span>
                    <p class="collection-details">
                      <h3 class="collection-title">Summer Collection</h3>
                      <small class="about-collection">
                        Checkout out latest summer collection to keep your feet
                        cool.
                      </small>
                    </p>
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

export { NewArrivals };
