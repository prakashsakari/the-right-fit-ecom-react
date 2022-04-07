import {
    Navbar,
    Banner,
    Category,
    NewArrivals,
    Footer
  } from "../components";
  
  const Home = () => {
    return (
      <div className="page">
        <Navbar />
        <Category />
        <Banner />
        <NewArrivals />
        <Footer />
      </div>
    );
  };
  
  export { Home };
  