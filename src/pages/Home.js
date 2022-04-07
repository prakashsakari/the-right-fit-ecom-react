import {
  Navbar,
  Banner,
  Category,
  NewArrivals,
  Footer
  } from "../components";
import { useEffect, useState } from "react";

const Home = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("home");
  }, [route]);

  return (
    <div className="page">
      <Navbar route={route} />
      <Category />
      <Banner />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export { Home };
  