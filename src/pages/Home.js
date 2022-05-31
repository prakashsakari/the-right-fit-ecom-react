import {
  Navbar,
  Banner,
  Category,
  NewArrivals,
  Footer,
  Loader,
  Alert
  } from "../components";
  import { useEffect, useState, Fragment } from "react";
  import {useAlert} from "../context";
  import "./Home.css";
  
  const Home = () => {
    const [route, setRoute] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {alert} = useAlert();
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
        {alert.open && <Alert />}
          <Category />
          <Banner />
          <NewArrivals />
        </main>
<<<<<<< HEAD
        <Footer />
      </div>
=======
      </div>)}
      
      </Fragment>
>>>>>>> 675cb5c99ae1b4dd4a0a3c6ca100eea34bffb876
    );
  };
  
  export { Home };
  