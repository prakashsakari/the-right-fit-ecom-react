import {
    Navbar,
    Banner,
    Category,
    NewArrivals,
    Footer
  } from "../components/index";
  
  const Home = () => {
    return (
      <div className="home-page">
        <Navbar />
        <Category />
        <Banner />
        <NewArrivals />
        <Footer />
      </div>
    );
  };
  
  export { Home };
  