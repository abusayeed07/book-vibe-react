import React from "react";
import Banner from "../../components/homepage/Banner";
import Footer from "../../components/homepage/Footer";
import AllBooks from "../../components/homepage/AllBooks";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <AllBooks />
      <Footer />
    </div>
  );
};

export default Homepage;
