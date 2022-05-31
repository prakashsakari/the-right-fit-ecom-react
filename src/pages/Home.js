import {
  Navbar,
  Banner,
  Category,
  NewArrivals,
  Footer
  } from "../components";
  import { useEffect, useState } from "react";
  import "./Home.css";
  
  const Home = () => {
    const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("home");
  }, [route]);

    return (
      <div className="page">
        <Navbar route={route} />
        <main>
          <Category />
          <Banner />
          <NewArrivals />
        </main>
        <Footer />
      </div>
    );
  };
  
  export { Home };
  