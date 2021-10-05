import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Courses from "../Courses/Courses";
import WhyChose from "../WhyChose/WhyChose"; 
 
// This is home page component where I placed all the components which are showing on the home page

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <About></About>
      <WhyChose></WhyChose>
      <Categories></Categories> 
    </div>
  );
};

export default Home;
