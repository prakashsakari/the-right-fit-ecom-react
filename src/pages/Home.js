import {
  Navbar,
  Banner,
  Category,
  NewArrivals,
  Footer,
  Loader
  } from "../components";
  import { useEffect, useState, Fragment } from "react";
  import "./Home.css";
  
  const Home = () => {
    const [route, setRoute] = useState();
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 500)
  }, [])

  useEffect(() => {
    setRoute("home");
  }, [route]);

    return (
      <Fragment>
        {!isLoading ? <Loader /> : (<div className="page">
        <Navbar route={route} />
        <main>
          <Category />
          <Banner />
          <NewArrivals />
          <Footer />
        </main>
      </div>)}
      
      </Fragment>
    );
  };
  
  export { Home };
  